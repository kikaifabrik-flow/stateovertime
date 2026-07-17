import { getStateOvertimeRule } from "../data/overtimeRules";

export interface CalcResult {
  regularHours: number;
  otHours: number;
  doubleOtHours: number;
  regularPay: number;
  otPay: number;
  doubleOtPay: number;
  grossPay: number;
}

interface CalculateOvertimeInput {
  stateCode: string;
  hourlyRate: number;
  dayHours: number[];
}

export function calculateOvertimePay({
  stateCode,
  hourlyRate,
  dayHours,
}: CalculateOvertimeInput): CalcResult {
  const rule = getStateOvertimeRule(stateCode);
  const dailyRuleApplies =
    rule.dailyOvertimeThreshold !== undefined &&
    (rule.dailyOvertimeMaxHourlyRateExclusive === undefined ||
      hourlyRate < rule.dailyOvertimeMaxHourlyRateExclusive);

  let regularHours = 0;
  let otHours = 0;
  let doubleOtHours = 0;

  if (dailyRuleApplies) {
    const dailyThreshold = rule.dailyOvertimeThreshold!;

    for (const hours of dayHours) {
      if (
        rule.doubleOvertimeThreshold !== undefined &&
        hours > rule.doubleOvertimeThreshold
      ) {
        regularHours += dailyThreshold;
        otHours += rule.doubleOvertimeThreshold - dailyThreshold;
        doubleOtHours += hours - rule.doubleOvertimeThreshold;
      } else if (hours > dailyThreshold) {
        regularHours += dailyThreshold;
        otHours += hours - dailyThreshold;
      } else {
        regularHours += hours;
      }
    }

    const weeklyOtHours = Math.max(0, regularHours - 40);
    regularHours -= weeklyOtHours;
    otHours += weeklyOtHours;
  } else {
    const totalHours = dayHours.reduce((sum, hours) => sum + hours, 0);
    regularHours = Math.min(totalHours, 40);
    otHours = Math.max(0, totalHours - 40);
  }

  const regularPay = regularHours * hourlyRate;
  const otPay = otHours * hourlyRate * 1.5;
  const doubleOtPay = doubleOtHours * hourlyRate * 2;

  return {
    regularHours,
    otHours,
    doubleOtHours,
    regularPay,
    otPay,
    doubleOtPay,
    grossPay: regularPay + otPay + doubleOtPay,
  };
}
