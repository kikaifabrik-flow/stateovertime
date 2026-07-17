export interface StateOvertimeRule {
  dailyOvertimeThreshold?: number;
  doubleOvertimeThreshold?: number;
  dailyOvertimeMaxHourlyRateExclusive?: number;
  dailySummary: string;
  doubleSummary: string;
  metadataSummary: string;
  calculatorNote?: string;
}

const WEEKLY_ONLY_RULE: StateOvertimeRule = {
  dailySummary: "No general daily overtime requirement",
  doubleSummary: "No general double overtime requirement",
  metadataSummary: "Federal FLSA weekly overtime.",
};

const STATE_OVERTIME_RULES: Record<string, StateOvertimeRule> = {
  AK: {
    dailyOvertimeThreshold: 8,
    dailySummary: "Hours over 8/day = 1.5x pay",
    doubleSummary: "No general double overtime requirement",
    metadataSummary: "Daily overtime after 8 hours and weekly overtime after 40 hours.",
  },
  CA: {
    dailyOvertimeThreshold: 8,
    doubleOvertimeThreshold: 12,
    dailySummary: "Hours over 8/day = 1.5x pay",
    doubleSummary: "Hours over 12/day = 2x pay",
    metadataSummary: "Daily overtime after 8 hours, double time after 12 hours, and weekly overtime after 40 hours.",
    calculatorNote: "If hours are entered for all seven days, Monday through Sunday is treated as one workweek and California's seventh-day rule is applied.",
  },
  CO: {
    dailyOvertimeThreshold: 12,
    dailySummary: "Hours over 12/day or 12 consecutive hours = 1.5x pay",
    doubleSummary: "No general double overtime requirement",
    metadataSummary: "Overtime after 12 hours per day, 12 consecutive hours, or 40 hours per week.",
    calculatorNote: "For a shift that crosses workdays, enter the week's total hours worked beyond 12 consecutive hours in the additional Colorado field.",
  },
  KY: {
    dailySummary: "No general daily trigger; a seventh-day rule may apply",
    doubleSummary: "No general double overtime requirement",
    metadataSummary: "Weekly overtime after 40 hours, with a separate seventh-day rule for some workers.",
    calculatorNote: "If hours are entered for all seven days and the week exceeds 40 hours, Monday through Sunday is treated as one workweek and Kentucky's seventh-day rule is applied. Statutory exemptions may apply.",
  },
  NV: {
    dailyOvertimeThreshold: 8,
    dailyOvertimeMaxHourlyRateExclusive: 18,
    dailySummary: "Below $18/hour: hours over 8/day = 1.5x pay",
    doubleSummary: "No general double overtime requirement",
    metadataSummary: "Daily overtime after 8 hours for workers earning below $18/hour, plus weekly overtime after 40 hours.",
    calculatorNote: "Effective July 1, 2026, Nevada daily overtime generally applies below $18/hour. At $18/hour or more, this calculator applies the 40-hour weekly threshold.",
  },
  OR: {
    dailySummary: "No general daily trigger; special industry rules may apply",
    doubleSummary: "No general double overtime requirement",
    metadataSummary: "Weekly overtime after 40 hours, with special daily rules in manufacturing and certain related industries.",
    calculatorNote: "Select the Oregon industry option to compare overtime after 10 hours per day with overtime after 40 hours per week and use whichever produces more overtime pay. Exemptions and other special rules may apply.",
  },
};

export function getStateOvertimeRule(stateCode: string): StateOvertimeRule {
  return STATE_OVERTIME_RULES[stateCode] ?? WEEKLY_ONLY_RULE;
}
