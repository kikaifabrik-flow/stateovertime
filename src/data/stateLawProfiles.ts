import { STATES_DATA } from "./states";

export interface LawSource {
  label: string;
  href: string;
}

export interface PayExample {
  description: string;
  rows: { label: string; value: string; total?: boolean }[];
  note: string;
}

export interface StateLawProfile {
  code: string;
  name: string;
  slug: string;
  intro: string;
  ruleSummary: string;
  weeklyRule: string;
  dailyRule: string;
  doubleTimeRule: string;
  coverageNote: string;
  specialSituations: string[];
  example: PayExample;
  faqAdditions: { question: string; answer: string }[];
  officialSources: LawSource[];
}

type ProfileOverride = Partial<Omit<StateLawProfile, "code" | "name" | "slug" | "officialSources">> & {
  stateSource?: LawSource;
};

const FEDERAL_ONLY_CODES = new Set([
  "AL", "AZ", "DE", "FL", "GA", "ID", "IA", "LA", "MS", "NE", "OK", "SC", "SD", "TN", "TX", "UT", "WY",
]);

const STATE_WEEKLY_CODES = new Set([
  "AR", "CT", "HI", "IL", "IN", "ME", "MD", "MA", "MI", "MO", "MT", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OR", "PA", "RI", "VT", "VA", "WA", "WV", "WI",
]);

const STANDARD_EXAMPLE: PayExample = {
  description: "Assume a nonexempt employee earns $20 per hour and works 45 hours in one workweek.",
  rows: [
    { label: "Regular hourly rate", value: "$20" },
    { label: "Regular pay", value: "40 x $20 = $800" },
    { label: "Overtime rate", value: "$20 x 1.5 = $30" },
    { label: "Overtime pay", value: "5 x $30 = $150" },
    { label: "Estimated weekly total", value: "$950", total: true },
  ],
  note: "This simple example assumes the employee is covered and nonexempt, and that $20 is the complete regular rate. Bonuses, commissions or multiple pay rates can change the calculation.",
};

const FEDERAL_SOURCES: LawSource[] = [
  {
    label: "U.S. Department of Labor - Overtime Pay Requirements (Fact Sheet #23)",
    href: "https://www.dol.gov/agencies/whd/fact-sheets/23-flsa-overtime-pay",
  },
  {
    label: "U.S. Department of Labor - State Minimum Wage and Premium Pay Table",
    href: "https://www.dol.gov/agencies/whd/minimum-wage/state",
  },
  {
    label: "U.S. Department of Labor - Hours Worked (Fact Sheet #22)",
    href: "https://www.dol.gov/agencies/whd/fact-sheets/22-flsa-hours-worked",
  },
];

const PROFILE_OVERRIDES: Record<string, ProfileOverride> = {
  AK: {
    intro: "Alaska adds a daily overtime rule to the usual weekly rule. Most covered, nonexempt employees earn time-and-a-half after eight hours in a day or 40 hours in a workweek, although the state law contains important employer-size, occupation and approved flexible-schedule exceptions.",
    ruleSummary: "Time-and-a-half after 8 hours in a day or 40 hours in a workweek",
    dailyRule: "Generally after 8 hours in one day",
    coverageNote: "Alaska's state overtime requirement generally does not apply to an employer with fewer than four employees, and the statute lists additional exemptions. Federal coverage may still produce overtime rights.",
    specialSituations: [
      "An approved voluntary flexible work-hour plan can permit four 10-hour days before daily overtime begins.",
      "Agriculture, certain small mining operations and several other occupations have specific state-law exemptions or alternative rules.",
      "Daily and weekly overtime hours are coordinated so the same hour is not counted twice.",
    ],
    example: {
      description: "Assume a covered, nonexempt employee earns $20 per hour, works 10 hours in one day and does not cross 40 hours for the week.",
      rows: [
        { label: "Regular pay", value: "8 x $20 = $160" },
        { label: "Overtime rate", value: "$20 x 1.5 = $30" },
        { label: "Daily overtime pay", value: "2 x $30 = $60" },
        { label: "Estimated pay for the day", value: "$220", total: true },
      ],
      note: "An approved flexible work-hour plan or a statutory exemption could change this result.",
    },
    faqAdditions: [{ question: "Can Alaska use a four-day, 10-hour schedule?", answer: "Sometimes. An employer may use a voluntary flexible work-hour plan that satisfies Alaska's approval and documentation requirements. Under a valid plan, daily overtime can begin after 10 hours instead of eight." }],
    stateSource: { label: "Alaska Department of Labor - Minimum Wage and Overtime Hours", href: "https://labor.alaska.gov/lss/whact.htm" },
  },
  AR: {
    coverageNote: "Arkansas's minimum-wage and overtime law generally applies to employers with four or more employees. Federal law may cover other employment and also uses a 40-hour weekly trigger.",
    stateSource: { label: "Arkansas Division of Labor - Minimum Wage and Overtime", href: "https://labor.arkansas.gov/labor/labor-standards/minimum-wage-and-overtime/" },
  },
  CO: {
    intro: "Colorado compares three overtime triggers for covered, nonexempt employees: more than 40 hours in a workweek, more than 12 hours in a workday, or more than 12 consecutive hours. The calculation that produces the greater pay applies.",
    ruleSummary: "Time-and-a-half after 12 hours per day, 12 consecutive hours, or 40 hours per week",
    dailyRule: "After 12 hours in a workday or 12 consecutive hours",
    coverageNote: "Colorado's COMPS Order covers many employees but includes listed exemptions and industry-specific provisions. The greater-pay comparison matters when more than one trigger is reached.",
    specialSituations: [
      "The 12-consecutive-hour trigger can cross the employee's established workday boundary.",
      "A duty-free meal period may be excluded when measuring 12 consecutive hours if it meets Colorado's requirements.",
      "Colorado has occupation-specific exemptions and separate rules for some health care, transportation and other work.",
    ],
    example: {
      description: "Assume a covered, nonexempt employee earns $20 per hour and works 14 hours in one Colorado workday.",
      rows: [
        { label: "Regular pay", value: "12 x $20 = $240" },
        { label: "Overtime rate", value: "$20 x 1.5 = $30" },
        { label: "Daily overtime pay", value: "2 x $30 = $60" },
        { label: "Estimated pay for the day", value: "$300", total: true },
      ],
      note: "A 12-consecutive-hour calculation can differ from a workday calculation, so the full shift timing matters.",
    },
    faqAdditions: [{ question: "What does 12 consecutive hours mean in Colorado?", answer: "It is a separate trigger measured across consecutive working time, without being reset simply because the employer's workday ends. A qualifying duty-free meal period may be excluded." }],
    stateSource: { label: "Colorado Department of Labor - COMPS Order guidance", href: "https://cdle.colorado.gov/sites/cdle/files/info_%231_2025_comps_%26_paycalc_orders_8.7.25.pdf" },
  },
  CT: {
    specialSituations: [
      "Restaurant and hotel-restaurant employees can have a separate premium-pay rule for the seventh consecutive day of work.",
      "Connecticut law contains occupation-specific exemptions, including provisions affecting certain drivers, seasonal work and commissioned sales employees.",
      "Working a weekend or holiday does not create general overtime for every Connecticut employee; the weekly total and any special rule still matter.",
    ],
    faqAdditions: [{ question: "Does Connecticut require premium pay on a seventh consecutive day?", answer: "A special rule applies in restaurants and hotel restaurants. It is not a general seventh-day rule for every Connecticut workplace." }],
    stateSource: { label: "Connecticut Department of Labor - Wage and Workplace Standards", href: "https://portal.ct.gov/dol/divisions/wage-and-workplace-standards" },
  },
  HI: {
    coverageNote: "Hawaii generally requires weekly overtime under state law, but an employee with guaranteed monthly compensation of $4,000 or more is outside the state minimum-wage and overtime law. Federal overtime may still apply if the federal exemption tests are not met.",
    specialSituations: [
      "Domestic service workers are generally covered by Hawaii's minimum-wage and overtime requirements.",
      "The state's $4,000 guaranteed-monthly-compensation exclusion does not by itself decide whether federal overtime applies.",
      "Covered state and county public-construction work can require overtime after eight hours in a day and for work on Saturdays, Sundays and state holidays.",
    ],
    stateSource: { label: "Hawaii Department of Labor - Wage Standards Division", href: "https://labor.hawaii.gov/wsd/minimum-wage/" },
  },
  IL: {
    coverageNote: "Illinois's Minimum Wage Law generally applies to employers with four or more employees, excluding certain family members, while federal coverage can apply independently.",
    stateSource: { label: "Illinois Department of Labor - Minimum Wage and Overtime", href: "https://labor.illinois.gov/laws-rules/fls/minimum-wage-law.html" },
  },
  IN: {
    coverageNote: "Indiana's state overtime law generally applies to employers with two or more employees. Federal law can also apply and uses the same 40-hour weekly trigger for covered, nonexempt employees.",
    stateSource: { label: "Indiana Department of Labor - Wage and Hour", href: "https://www.in.gov/dol/wage-and-hour/wage-and-hour-home/" },
  },
  KS: {
    intro: "Most Kansas employees covered by the federal Fair Labor Standards Act use the federal 40-hour overtime rule. For employment covered only by the Kansas Minimum Wage and Overtime Law, state overtime generally begins after 46 hours in a workweek.",
    ruleSummary: "Usually after 40 hours under federal law; after 46 hours for state-only coverage",
    weeklyRule: "40 hours under the FLSA; 46 hours under Kansas state-only coverage",
    coverageNote: "Kansas excludes employment covered by the FLSA from its state minimum-wage and overtime law. Determining which law covers the employer and employee is therefore essential.",
    specialSituations: [
      "The 46-hour Kansas threshold does not replace the federal 40-hour rule for employees covered by the FLSA.",
      "Kansas does not impose a general daily overtime rule or a general premium merely for weekend or holiday work.",
      "An employee cannot waive overtime that is required by the law that covers the employment.",
    ],
    example: STANDARD_EXAMPLE,
    faqAdditions: [{ question: "Why does Kansas sometimes use 46 hours?", answer: "Kansas state law uses a 46-hour threshold for employment covered only by that law. Employees and employers covered by the federal FLSA generally use the federal 40-hour threshold instead." }],
    stateSource: { label: "Kansas Department of Labor - Workplace Laws", href: "https://www.dol.ks.gov/employers/workplace-laws" },
  },
  KY: {
    intro: "Kentucky generally requires time-and-a-half after 40 hours in a workweek and also has a separate seventh-day rule for some employees who are permitted to work all seven days in the employer's workweek.",
    ruleSummary: "Time-and-a-half after 40 hours, plus a limited seventh-day rule",
    coverageNote: "Kentucky's seventh-day rule applies only in the circumstances described by the statute and has exemptions. It does not apply when the employee is not permitted to work more than 40 total hours in the workweek.",
    specialSituations: [
      "A covered employee who works all seven days in one workweek may earn time-and-a-half for work on the seventh day.",
      "The seventh-day rule is separate from the ordinary weekly calculation, but the same hour is not paid twice as two overtime hours.",
      "Officers, superintendents, forepersons, certain guards and other listed workers can be excluded from the seventh-day provision.",
    ],
    faqAdditions: [{ question: "Does Kentucky pay overtime on every seventh consecutive day?", answer: "No. The rule concerns a covered employee permitted to work all seven days in the employer's workweek, and statutory conditions and exemptions apply." }],
    stateSource: { label: "Kentucky Education and Labor Cabinet - Wages and Hours", href: "https://elc.ky.gov/workplace-standards/Pages/Wages-and-Hours.aspx" },
  },
  ME: { stateSource: { label: "Maine Department of Labor - Overtime", href: "https://www.maine.gov/labor/labor_laws/overtime.html" } },
  MD: {
    specialSituations: [
      "Certain agricultural workers use a 60-hour weekly overtime threshold under Maryland law.",
      "Maryland lists exemptions for specific occupations and establishments, including some commissioned sales, camps and food-processing work.",
      "Vacation, sick and holiday leave generally does not count as hours worked toward Maryland's overtime threshold.",
    ],
    faqAdditions: [{ question: "When do Maryland agricultural workers receive overtime?", answer: "Certain covered agricultural workers receive overtime after 60 hours in a week under Maryland law. The exact job and applicable exemptions should be checked." }],
    stateSource: { label: "Maryland Department of Labor - Minimum Wage and Overtime Law", href: "https://labor.maryland.gov/labor/wages/wagehrfacts.shtml" },
  },
  MA: { stateSource: { label: "Massachusetts - State law about overtime", href: "https://www.mass.gov/info-details/massachusetts-law-about-overtime" } },
  MI: { stateSource: { label: "Michigan Wage and Hour Division", href: "https://www.michigan.gov/leo/bureaus-agencies/ber/wage-and-hour" } },
  MN: {
    intro: "Most Minnesota employees covered by federal law earn overtime after 40 hours in a workweek. Minnesota's own law separately requires overtime after 48 hours for covered employment, which matters when the federal FLSA does not apply.",
    ruleSummary: "Usually after 40 hours under federal law; after 48 hours under Minnesota law",
    weeklyRule: "40 hours under the FLSA; 48 hours under Minnesota state law",
    coverageNote: "Employers must apply the law that protects the employee. The federal 40-hour trigger commonly controls, while Minnesota's 48-hour rule can protect workers outside federal coverage.",
    specialSituations: [
      "Minnesota overtime is based on hours actually worked, so vacation, holiday and sick leave generally do not count toward the threshold.",
      "Minnesota lists more than 20 occupation or employment categories with specific exemptions.",
      "Agricultural work has separate state guidance and should be checked against both Minnesota and federal rules.",
    ],
    faqAdditions: [{ question: "Is Minnesota overtime after 40 or 48 hours?", answer: "Federal law requires overtime after 40 hours for federally covered employment. Minnesota law uses 48 hours. The applicable law and the more protective result determine what the employee is owed." }],
    stateSource: { label: "Minnesota Department of Labor and Industry - Overtime Laws", href: "https://www.dli.mn.gov/overtime" },
  },
  MO: {
    specialSituations: [
      "Qualifying seasonal amusement or recreation businesses can use a 52-hour weekly threshold under Missouri law.",
      "Missouri law contains a small-retail-or-service-business exemption tied to annual sales, while federal coverage may still apply.",
      "There is no general Missouri daily overtime rule for an ordinary private-sector schedule.",
    ],
    faqAdditions: [{ question: "Do Missouri seasonal amusement workers use a 40-hour threshold?", answer: "A qualifying seasonal amusement or recreation business may use a 52-hour threshold under Missouri law. Federal coverage and the precise exemption requirements still need to be checked." }],
    stateSource: { label: "Missouri Department of Labor - Minimum Wage", href: "https://labor.mo.gov/dls/minimum-wage" },
  },
  MT: { stateSource: { label: "Montana Department of Labor - Overtime", href: "https://erd.dli.mt.gov/labor-standards/wage-and-hour-payment-act/overtime" } },
  NV: {
    intro: "Nevada combines a 40-hour weekly rule with wage-based daily overtime. As of July 1, 2026, a covered employee earning less than $18 per hour generally earns time-and-a-half after eight hours in a workday; an employee earning at least $18 generally uses the 40-hour weekly trigger.",
    ruleSummary: "Weekly overtime after 40 hours; daily overtime below the $18 hourly threshold",
    dailyRule: "After 8 hours when the regular rate is below $18 per hour, subject to exceptions",
    coverageNote: "The daily threshold is one and one-half times Nevada's $12 minimum wage. A qualifying, mutually agreed four-day, 10-hour schedule and statutory exemptions can change the result.",
    specialSituations: [
      "The daily rule is wage-based: earning exactly $18 per hour or more generally removes the ordinary daily trigger, but not weekly overtime.",
      "A valid four-day, 10-hour schedule can avoid daily overtime for the ninth and tenth hours when Nevada's requirements are met.",
      "Nevada measures the daily period as a workday or 24-hour period under its wage rules; shift timing can matter.",
    ],
    example: {
      description: "Assume a covered, nonexempt employee earns $17 per hour and works 10 hours in one workday without a qualifying four-day, 10-hour agreement.",
      rows: [
        { label: "Regular pay", value: "8 x $17 = $136" },
        { label: "Overtime rate", value: "$17 x 1.5 = $25.50" },
        { label: "Daily overtime pay", value: "2 x $25.50 = $51" },
        { label: "Estimated pay for the day", value: "$187", total: true },
      ],
      note: "The wage threshold changes if Nevada's minimum wage changes, so the current Labor Commissioner bulletin should always be checked.",
    },
    faqAdditions: [{ question: "What is Nevada's daily-overtime wage cutoff in 2026?", answer: "Beginning July 1, 2026, the ordinary daily-overtime rule applies when the employee earns less than $18 per hour, which is one and one-half times Nevada's $12 minimum wage." }],
    stateSource: { label: "Nevada Office of the Labor Commissioner - Employer Bulletins", href: "https://labor.nv.gov/Employer/Employer_Posters/" },
  },
  NJ: { stateSource: { label: "New Jersey Department of Labor - Wage and Hour Compliance", href: "https://www.nj.gov/labor/myworkrights/wages/wages/" } },
  NM: { stateSource: { label: "New Mexico Department of Workforce Solutions - Minimum Wage", href: "https://www.dws.state.nm.us/Minimum-Wage-Information" } },
  NY: {
    specialSituations: [
      "Residential or live-in employees generally use a 44-hour state overtime threshold rather than 40 hours.",
      "In 2026, covered farm laborers generally earn overtime after 52 hours in a calendar week and for work on the designated day of rest.",
      "Some wage orders require extra spread-of-hours pay when a workday spans more than 10 hours; that payment is separate from the overtime-hour calculation.",
    ],
    faqAdditions: [
      { question: "When do New York live-in workers earn overtime?", answer: "Residential or live-in workers generally earn state overtime after 44 hours in a payroll week. Other covered employees generally use 40 hours." },
      { question: "What is New York's farm-worker overtime threshold in 2026?", answer: "For 2026, covered farm laborers generally earn overtime after 52 hours in a calendar week and for work on their day of rest. The threshold is scheduled to continue phasing down in later years." },
    ],
    stateSource: { label: "New York Department of Labor - Wages and Hours FAQ", href: "https://dol.ny.gov/node/6461" },
  },
  NC: {
    specialSituations: [
      "Qualifying seasonal amusement or recreational establishments can use a 45-hour weekly threshold under North Carolina law.",
      "North Carolina does not impose a general daily overtime or double-time requirement for ordinary private employment.",
      "Federal exemptions and North Carolina's listed exemptions can affect coverage for particular jobs.",
    ],
    faqAdditions: [{ question: "Do North Carolina seasonal amusement workers receive overtime after 40 hours?", answer: "A qualifying seasonal amusement or recreational establishment may use a 45-hour threshold under state law. Federal coverage and the requirements of the exception still need to be checked." }],
    stateSource: { label: "North Carolina Department of Labor - Hours Worked and Wages", href: "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-time-worked-and-wages-earned/maximumminimum-hours-worked" },
  },
  ND: { stateSource: { label: "North Dakota Department of Labor - Wage and Hour Topics", href: "https://www.nd.gov/labor/wage-and-hour-topics" } },
  OH: {
    coverageNote: "Ohio's state-law coverage can depend on an employer's annual gross receipts, with the threshold adjusted over time. Federal overtime coverage is separate and may still apply.",
    stateSource: { label: "Ohio Revised Code Chapter 4111 - Minimum Wage and Overtime", href: "https://codes.ohio.gov/ohio-revised-code/chapter-4111" },
  },
  OR: {
    specialSituations: [
      "Most employees use the 40-hour weekly rule, but covered mills, factories, manufacturing establishments and certain nonfarm processing plants can earn overtime after 10 hours in a day or 40 in a week, whichever produces more overtime pay.",
      "For 2025 and 2026, covered agricultural workers generally earn overtime after 48 hours in a workweek; the phase-in is scheduled to reach 40 hours in 2027.",
      "Public works, hospitals, seafood processing and other settings can have different daily, weekly or maximum-hours provisions.",
    ],
    faqAdditions: [
      { question: "Does Oregon require daily overtime in manufacturing?", answer: "Often, yes. Covered manufacturing and certain processing employees generally earn overtime after 10 hours in a day or 40 hours in a week, using the calculation that produces more overtime pay." },
      { question: "What is Oregon's agricultural overtime threshold in 2026?", answer: "Covered agricultural employees generally use a 48-hour weekly threshold in 2026. Exemptions and special processing rules can change the result." },
    ],
    stateSource: { label: "Oregon BOLI - Paid Time and Overtime", href: "https://www.oregon.gov/boli/workers/pages/paid-time.aspx" },
  },
  PA: {
    specialSituations: [
      "Most covered employees use the 40-hour workweek rule, but a qualifying hospital or residential-care employer and employee can agree to an 8-and-80 system for a 14-day work period.",
      "Under a valid 8-and-80 arrangement, overtime is due after eight hours in a workday and after 80 hours in the 14-day period.",
      "Pennsylvania and federal law contain occupation-specific exemptions, so job duties and the employer's industry still matter.",
    ],
    faqAdditions: [{ question: "What is Pennsylvania's 8-and-80 overtime system?", answer: "A qualifying hospital or residential-care employer and employee may agree to measure overtime over 14 days. Overtime is then due after eight hours in a day and after 80 hours in the 14-day period." }],
    stateSource: { label: "Pennsylvania Department of Labor and Industry - Minimum Wage Act", href: "https://www.pa.gov/agencies/dli/resources/compliance-laws-and-regulations/labor-management-relations/pennsylvania-s-minimum-wage-act" },
  },
  RI: {
    specialSituations: [
      "Rhode Island has separate Sunday and holiday premium-pay laws for retail and certain other businesses; those rules are not the same as weekly overtime.",
      "Some health care employees, commissioned sales workers and other listed occupations have specific overtime provisions or exemptions.",
      "For ordinary weekly overtime, paid leave generally is not treated as hours actually worked.",
    ],
    faqAdditions: [{ question: "Does Rhode Island require time-and-a-half on Sundays and holidays?", answer: "Separate Rhode Island laws require premium pay in retail and certain other businesses, subject to coverage rules and exemptions. That premium is distinct from overtime after 40 hours." }],
    stateSource: { label: "Rhode Island Department of Labor and Training - Labor Standards", href: "https://dlt.ri.gov/regulation-and-safety/labor-standards" },
  },
  VT: {
    coverageNote: "Vermont's state overtime law generally applies to employers with two or more employees and includes listed exemptions. Federal coverage can apply independently.",
    stateSource: { label: "Vermont Department of Labor - Wage and Hour", href: "https://labor.vermont.gov/rights-and-wages/wage-and-hour" },
  },
  VA: { stateSource: { label: "Virginia Department of Labor and Industry - Labor Law", href: "https://doli.virginia.gov/labor-law/" } },
  WA: {
    specialSituations: [
      "Washington agricultural employees, including dairy workers, now generally earn overtime after 40 hours in a workweek.",
      "Washington uses state-specific salary and duties tests for executive, administrative and professional exemptions; a salary alone is not enough.",
      "Certain hospital or residential-care schedules and other occupations can follow special statutory rules.",
    ],
    faqAdditions: [{ question: "Do Washington farm workers receive overtime?", answer: "Yes. All covered agricultural workers generally earn overtime after 40 hours in a workweek; the state's phase-in reached 40 hours in 2024." }],
    stateSource: { label: "Washington Labor and Industries - Overtime", href: "https://www.lni.wa.gov/workers-rights/wages/overtime/" },
  },
  WV: {
    coverageNote: "West Virginia's state overtime law generally applies to employers with six or more employees at one location. Federal coverage is separate and can protect employees outside that state-law scope.",
    stateSource: { label: "West Virginia Division of Labor - Wage and Hour", href: "https://labor.wv.gov/Wage-Hour/Pages/default.aspx" },
  },
  WI: { stateSource: { label: "Wisconsin Department of Workforce Development - Overtime", href: "https://dwd.wisconsin.gov/er/laborstandards/overtime.htm" } },
};

function defaultIntro(name: string, hasStateWeeklyLaw: boolean) {
  if (hasStateWeeklyLaw) {
    return `${name} generally requires covered, nonexempt employees to receive time-and-a-half after 40 hours worked in a workweek. Federal law also uses a 40-hour weekly threshold, so an employer may need to consider both laws and follow the rule that protects the employee.`;
  }

  return `${name} does not set a broader general overtime formula for most private employees. The federal Fair Labor Standards Act is therefore usually the starting point: covered, nonexempt employees generally receive time-and-a-half after 40 hours worked in a workweek.`;
}

function buildProfile(code: string): StateLawProfile {
  const state = STATES_DATA.find((candidate) => candidate.code === code);
  if (!state) throw new Error(`Missing state data for ${code}`);

  const override = PROFILE_OVERRIDES[code] ?? {};
  const hasStateWeeklyLaw = STATE_WEEKLY_CODES.has(code);
  const federalOnly = FEDERAL_ONLY_CODES.has(code);
  const stateContact: LawSource = {
    label: `${state.name} labor office - official contact directory`,
    href: `https://www.dol.gov/agencies/whd/state/contacts#${code}`,
  };

  const standardSpecialSituations = [
    `${state.name} does not impose a general daily overtime trigger for an ordinary private-sector schedule. A long day by itself does not create overtime unless a special law, contract or policy applies.`,
    "Saturday, Sunday and holiday work does not automatically require overtime under the FLSA. Hours actually worked in the employer's defined workweek control.",
    "Agriculture, transportation, seasonal work, public employment, commissioned sales and certain care settings are common areas where exemptions or special calculations may apply.",
  ];

  return {
    code,
    name: state.name,
    slug: state.slug,
    intro: override.intro ?? defaultIntro(state.name, hasStateWeeklyLaw),
    ruleSummary: override.ruleSummary ?? "Time-and-a-half after 40 hours worked in a workweek",
    weeklyRule: override.weeklyRule ?? "After 40 hours worked in one workweek",
    dailyRule: override.dailyRule ?? "No general daily overtime requirement",
    doubleTimeRule: override.doubleTimeRule ?? "No general double-time requirement",
    coverageNote:
      override.coverageNote ??
      (federalOnly
        ? `${state.name} does not have a general state overtime law for most private employment. Federal coverage and exemptions determine whether the 40-hour rule applies.`
        : `${state.name} and federal law contain exemptions and special rules. When both laws cover the work, the employer generally must follow the requirement that gives the employee greater protection.`),
    specialSituations: override.specialSituations ?? standardSpecialSituations,
    example: override.example ?? STANDARD_EXAMPLE,
    faqAdditions: override.faqAdditions ?? [],
    officialSources: [override.stateSource ?? stateContact, ...FEDERAL_SOURCES],
  };
}

export const STATE_LAW_PROFILES: StateLawProfile[] = STATES_DATA
  .filter((state) => state.code !== "DC" && state.code !== "CA")
  .map((state) => buildProfile(state.code));

export function getStateLawProfile(slug: string) {
  return STATE_LAW_PROFILES.find((profile) => `${profile.slug}-overtime-laws` === slug);
}
