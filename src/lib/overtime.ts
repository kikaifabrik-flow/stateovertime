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
  consecutiveOvertimeHours?: number;
  useOregonIndustryRule?: boolean;
}

export function calculateOvertimePay({
  stateCode,
  hourlyRate,
  dayHours,
  consecutiveOvertimeHours = 0,
  useOregonIndustryRule = false,
}: CalculateOvertimeInput): CalcResult {
  const rule = getStateOvertimeRule(stateCode);
  const dailyOvertimeThreshold =
    stateCode === "OR" && useOregonIndustryRule
      ? 10
      : rule.dailyOvertimeThreshold;
  const dailyRuleApplies =
    dailyOvertimeThreshold !== undefined &&
    (rule.dailyOvertimeMaxHourlyRateExclusive === undefined ||
      hourlyRate < rule.dailyOvertimeMaxHourlyRateExclusive);

  let regularHours = 0;
  let otHours = 0;
  let doubleOtHours = 0;

  if (dailyRuleApplies) {
    const dailyThreshold = dailyOvertimeThreshold!;

    dayHours.forEach((hours, dayIndex) => {
      const isCaliforniaSeventhDay =
        stateCode === "CA" &&
        dayIndex === 6 &&
        dayHours.every((day) => day > 0);

      if (isCaliforniaSeventhDay) {
        otHours += Math.min(hours, 8);
        doubleOtHours += Math.max(0, hours - 8);
        return;
      }

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
    });

    const weeklyOtHours = Math.max(0, regularHours - 40);
    regularHours -= weeklyOtHours;
    otHours += weeklyOtHours;
  } else {
    const totalHours = dayHours.reduce((sum, hours) => sum + hours, 0);
    regularHours = Math.min(totalHours, 40);
    otHours = Math.max(0, totalHours - 40);
  }

  const totalHours = dayHours.reduce((sum, hours) => sum + hours, 0);

  if (
    stateCode === "KY" &&
    totalHours > 40 &&
    dayHours.every((day) => day > 0)
  ) {
    const seventhDayOtHours = dayHours[6];
    const additionalOtHours = Math.max(0, seventhDayOtHours - otHours);
    const reclassifiedHours = Math.min(regularHours, additionalOtHours);
    regularHours -= reclassifiedHours;
    otHours += reclassifiedHours;
  }

  if (stateCode === "CO" && consecutiveOvertimeHours > otHours) {
    const additionalOtHours = consecutiveOvertimeHours - otHours;
    const reclassifiedHours = Math.min(regularHours, additionalOtHours);
    regularHours -= reclassifiedHours;
    otHours += reclassifiedHours;
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
