export interface StateInfo {
  code: string;
  name: string;
  slug: string;
  dailyOT: boolean;
  dailyOTThreshold: number;
  doubleOT: boolean;
  doubleOTThreshold: number;
  intro: string;
  lawReference: string;
  faqs: { question: string; answer: string }[];
}

export const STATES_DATA: StateInfo[] = [
  {
    code: "AL",
    name: "Alabama",
    slug: "alabama",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Alabama follows federal FLSA overtime rules. Alabama does not have state-specific daily overtime requirements. Employees in Alabama must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. There are no daily overtime triggers in Alabama, meaning an employee can work 10 or 12 hours in a single day without triggering overtime, as long as their weekly total does not exceed 40 hours.",
    lawReference: "Alabama does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Alabama have daily overtime?",
        answer: "No. Alabama only follows federal FLSA rules, which require overtime pay for hours worked over 40 in a workweek, not for daily hours worked.",
      },
      {
        question: "What is the overtime rate in Alabama?",
        answer: "Overtime in Alabama is paid at 1.5 times the employee's regular rate of pay, in accordance with federal FLSA requirements.",
      },
      {
        question: "Are salaried employees in Alabama entitled to overtime?",
        answer: "Salaried employees may be exempt from overtime if they meet the FLSA exemption tests for executive, administrative, professional, or other exempt categories. Salary alone does not determine exemption.",
      },
      {
        question: "Can an employer refuse to pay overtime in Alabama?",
        answer: "No. Under federal FLSA, employers must pay overtime to non-exempt employees for hours worked over 40 in a workweek. Refusing to pay overtime is a violation of federal law.",
      },
      {
        question: "How is overtime calculated in Alabama?",
        answer: "Overtime is calculated as 1.5 times the regular hourly rate for any hours worked over 40 in a single workweek. The workweek is a fixed, recurring 168-hour period.",
      },
    ],
  },
  {
    code: "AK",
    name: "Alaska",
    slug: "alaska",
    dailyOT: true,
    dailyOTThreshold: 8,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Alaska has stronger overtime protections than federal law. In addition to the federal 40-hour weekly overtime rule, Alaska requires daily overtime pay at 1.5 times the regular rate for any hours worked over 8 in a single workday. Alaska labor law also applies overtime to some workers not covered by federal FLSA. Alaska's daily overtime rule means that even if an employee works fewer than 40 hours in a week, they still receive overtime pay for any day where they worked more than 8 hours.",
    lawReference: "Alaska Stat. § 23.10.060",
    faqs: [
      {
        question: "Does Alaska have daily overtime?",
        answer: "Yes. Alaska requires overtime pay at 1.5x the regular rate for any hours worked over 8 in a single workday, in addition to the federal 40-hour weekly overtime rule.",
      },
      {
        question: "What is the overtime rate in Alaska?",
        answer: "Alaska overtime is paid at 1.5 times the regular rate of pay for hours over 8 per day or 40 per week.",
      },
      {
        question: "Does Alaska have double overtime?",
        answer: "No. Alaska does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "Are salaried employees in Alaska entitled to overtime?",
        answer: "Salaried employees may be exempt from overtime if they meet FLSA exemption tests. However, Alaska has its own salary threshold that may be higher than federal requirements.",
      },
      {
        question: "When did Alaska implement daily overtime?",
        answer: "Alaska has had daily overtime requirements in state law for decades. The 8-hour daily overtime trigger is a long-standing protection for Alaska workers.",
      },
    ],
  },
  {
    code: "AZ",
    name: "Arizona",
    slug: "arizona",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Arizona follows federal FLSA overtime rules. Arizona does not have state-specific daily overtime requirements. Employees in Arizona must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Arizona's state minimum wage is higher than the federal minimum, but overtime calculations follow federal standards.",
    lawReference: "Arizona does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Arizona have daily overtime?",
        answer: "No. Arizona follows federal FLSA rules, which require overtime pay only for hours worked over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Arizona?",
        answer: "Overtime in Arizona is paid at 1.5 times the employee's regular rate of pay, per federal FLSA requirements.",
      },
      {
        question: "Does Arizona have a higher minimum wage?",
        answer: "Yes. Arizona's state minimum wage is higher than the federal minimum, but this does not affect overtime calculations.",
      },
      {
        question: "Are tipped employees in Arizona entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate. The regular rate must be at least the full minimum wage before tip credit considerations.",
      },
      {
        question: "How is overtime calculated in Arizona?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek. The workweek is a fixed 168-hour period.",
      },
    ],
  },
  {
    code: "AR",
    name: "Arkansas",
    slug: "arkansas",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Arkansas follows federal FLSA overtime rules. Arkansas does not have state-specific daily overtime requirements. Employees in Arkansas must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Arkansas state law covers some employers not subject to federal FLSA, but the overtime calculation method is the same.",
    lawReference: "Arkansas Code § 11-4-217. Federal FLSA also applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Arkansas have daily overtime?",
        answer: "No. Arkansas follows federal FLSA rules, requiring overtime only for hours worked over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Arkansas?",
        answer: "Overtime in Arkansas is paid at 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Which employers must pay overtime in Arkansas?",
        answer: "Employers with 4 or more employees must comply with Arkansas labor law. Federal FLSA applies to employers with 2 or more employees and annual revenue over $500,000.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Arkansas?",
        answer: "Agricultural workers are generally exempt from overtime requirements under both Arkansas and federal law.",
      },
      {
        question: "How is overtime calculated in Arkansas?",
        answer: "Overtime is 1.5 times the regular hourly rate for any hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "CA",
    name: "California",
    slug: "california",
    dailyOT: true,
    dailyOTThreshold: 8,
    doubleOT: true,
    doubleOTThreshold: 12,
    intro: "California has the strongest overtime protections in the United States. California labor law requires daily overtime pay at 1.5 times the regular rate for hours worked over 8 in a single workday, and double-time pay at 2 times the regular rate for hours worked over 12 in a single workday. California also requires overtime for the first 8 hours on the seventh consecutive day of work in a workweek, and double-time for hours over 8 on the seventh consecutive day. These California-specific overtime rules are in addition to the federal 40-hour weekly overtime requirement.",
    lawReference: "California Labor Code § 510, California Wage Orders",
    faqs: [
      {
        question: "Does California have daily overtime?",
        answer: "Yes. California requires overtime pay at 1.5x for hours over 8 in a workday, and double-time at 2x for hours over 12 in a workday.",
      },
      {
        question: "What is the seventh consecutive day rule in California?",
        answer: "In California, the first 8 hours on the seventh consecutive day of work in a workweek must be paid at 1.5x, and hours over 8 on the seventh day must be paid at 2x.",
      },
      {
        question: "What is the California overtime rate?",
        answer: "California overtime is 1.5x the regular rate for hours 9-12 in a day, and 2x the regular rate for hours over 12 in a day, plus 1.5x for hours over 40 in a week.",
      },
      {
        question: "Are salaried employees in California entitled to overtime?",
        answer: "California has its own salary threshold for exempt employees, which is typically double the state minimum wage. Many salaried employees in California are entitled to overtime if they don't meet this threshold.",
      },
      {
        question: "Can California employers offer comp time instead of overtime?",
        answer: "No. Private sector employers in California must pay overtime in wages, not compensatory time off. Comp time is generally only allowed for public sector employees.",
      },
    ],
  },
  {
    code: "CO",
    name: "Colorado",
    slug: "colorado",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: true,
    doubleOTThreshold: 12,
    intro: "Colorado has state-specific overtime rules that go beyond federal FLSA. Colorado requires double-time pay at 2 times the regular rate for any hours worked over 12 in a single workday. Colorado also has its own salary threshold for exempt employees, which is updated annually. Colorado follows the federal 40-hour weekly overtime rule for standard overtime calculations.",
    lawReference: "Colorado Overtime and Minimum Pay Standards Order (COMPS Order) #38",
    faqs: [
      {
        question: "Does Colorado have daily overtime?",
        answer: "Colorado does not have a daily overtime trigger at 8 hours, but does require double-time pay at 2x for hours worked over 12 in a single workday.",
      },
      {
        question: "What is the overtime rate in Colorado?",
        answer: "Colorado overtime is 1.5x the regular rate for hours over 40 in a workweek, and 2x for hours over 12 in a single workday.",
      },
      {
        question: "Does Colorado have a higher salary threshold for exemption?",
        answer: "Yes. Colorado has its own salary threshold that is typically higher than the federal threshold. Employees earning below this threshold are entitled to overtime even if they are salaried.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Colorado?",
        answer: "Colorado has extended overtime protections to some agricultural workers in recent years, partially closing the historical exemption.",
      },
      {
        question: "How is overtime calculated in Colorado?",
        answer: "Standard overtime is 1.5x for hours over 40 in a week. Double-time is 2x for hours over 12 in a single day.",
      },
    ],
  },
  {
    code: "CT",
    name: "Connecticut",
    slug: "connecticut",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Connecticut follows federal FLSA overtime rules for most employees. Connecticut does not have state-specific daily overtime requirements for general employment. Employees in Connecticut must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Some industries in Connecticut have specific overtime rules, but most follow federal standards.",
    lawReference: "Connecticut General Statutes § 31-76c through 31-76i. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Connecticut have daily overtime?",
        answer: "No. Connecticut follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Connecticut?",
        answer: "Overtime in Connecticut is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Do restaurant workers in Connecticut get overtime?",
        answer: "Yes. Restaurant workers must receive overtime pay for hours over 40 in a workweek. Connecticut has specific rules for tipped restaurant employees.",
      },
      {
        question: "Are salaried employees in Connecticut entitled to overtime?",
        answer: "Salaried employees may be exempt from overtime if they meet FLSA exemption tests. Connecticut has its own salary threshold that may apply.",
      },
      {
        question: "How is overtime calculated in Connecticut?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "DE",
    name: "Delaware",
    slug: "delaware",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Delaware follows federal FLSA overtime rules. Delaware does not have state-specific daily overtime requirements. Employees in Delaware must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Delaware state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Delaware Code Title 19, Chapter 19. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Delaware have daily overtime?",
        answer: "No. Delaware follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Delaware?",
        answer: "Overtime in Delaware is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Delaware have a higher minimum wage?",
        answer: "Yes. Delaware's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Delaware?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Delaware and federal law.",
      },
      {
        question: "How is overtime calculated in Delaware?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "DC",
    name: "District of Columbia",
    slug: "district-of-columbia",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Washington DC follows federal FLSA overtime rules. DC does not have state-specific daily overtime requirements for most employees. Employees in DC must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. DC has one of the highest minimum wages in the country, but overtime calculations follow federal standards.",
    lawReference: "DC Code § 32-1003. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Washington DC have daily overtime?",
        answer: "No. DC follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Washington DC?",
        answer: "Overtime in DC is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does DC have a higher minimum wage?",
        answer: "Yes. DC has one of the highest minimum wages in the US, but this does not affect overtime calculations.",
      },
      {
        question: "Are tipped employees in DC entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime at 1.5 times the regular rate. The regular rate must account for the full minimum wage before tip credits.",
      },
      {
        question: "How is overtime calculated in Washington DC?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "FL",
    name: "Florida",
    slug: "florida",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Florida follows federal FLSA overtime rules. Florida does not have state-specific daily overtime requirements. Employees in Florida must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Florida state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Florida does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Florida have daily overtime?",
        answer: "No. Florida follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Florida?",
        answer: "Overtime in Florida is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Florida have a higher minimum wage?",
        answer: "Yes. Florida's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Florida?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Florida.",
      },
      {
        question: "How is overtime calculated in Florida?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "GA",
    name: "Georgia",
    slug: "georgia",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Georgia follows federal FLSA overtime rules for most employers. Georgia does not have state-specific daily overtime requirements. Employees in Georgia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Georgia's state minimum wage is lower than federal, meaning most employees are covered by the higher federal minimum wage and FLSA overtime rules.",
    lawReference: "Georgia Code § 34-4-3. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Georgia have daily overtime?",
        answer: "No. Georgia follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Georgia?",
        answer: "Overtime in Georgia is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Georgia have a lower state minimum wage?",
        answer: "Yes. Georgia's state minimum wage is $5.15/hour, but most employees are covered by the higher federal minimum wage of $7.25/hour.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Georgia?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Georgia.",
      },
      {
        question: "How is overtime calculated in Georgia?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "HI",
    name: "Hawaii",
    slug: "hawaii",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Hawaii follows federal FLSA overtime rules. Hawaii does not have state-specific daily overtime requirements for most employees. Employees in Hawaii must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Hawaii state minimum wage is higher than federal, and Hawaii has specific overtime rules for certain industries like sugarcane processing.",
    lawReference: "Hawaii Revised Statutes Chapter 388. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Hawaii have daily overtime?",
        answer: "No. Hawaii follows federal FLSA rules for most employees, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Hawaii?",
        answer: "Overtime in Hawaii is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Hawaii have a higher minimum wage?",
        answer: "Yes. Hawaii's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are sugarcane workers in Hawaii entitled to overtime?",
        answer: "Hawaii has specific overtime rules for sugarcane processing workers that may differ from standard FLSA rules.",
      },
      {
        question: "How is overtime calculated in Hawaii?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "ID",
    name: "Idaho",
    slug: "idaho",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Idaho follows federal FLSA overtime rules. Idaho does not have state-specific daily overtime requirements. Employees in Idaho must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Idaho state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Idaho Code § 44-1503. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Idaho have daily overtime?",
        answer: "No. Idaho follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Idaho?",
        answer: "Overtime in Idaho is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Idaho?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Idaho.",
      },
      {
        question: "Are seasonal workers in Idaho entitled to overtime?",
        answer: "Some seasonal workers may be exempt from overtime depending on the industry and duration of employment.",
      },
      {
        question: "How is overtime calculated in Idaho?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "IL",
    name: "Illinois",
    slug: "illinois",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Illinois follows federal FLSA overtime rules for most employees. Illinois does not have state-specific daily overtime requirements. Employees in Illinois must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Illinois state minimum wage is higher than federal, and Illinois has specific overtime rules for certain industries.",
    lawReference: "820 ILCS 105/4a. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Illinois have daily overtime?",
        answer: "No. Illinois follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Illinois?",
        answer: "Overtime in Illinois is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Illinois have a higher minimum wage?",
        answer: "Yes. Illinois minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Illinois?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Illinois and federal law.",
      },
      {
        question: "How is overtime calculated in Illinois?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "IN",
    name: "Indiana",
    slug: "indiana",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Indiana follows federal FLSA overtime rules. Indiana does not have state-specific daily overtime requirements. Employees in Indiana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Indiana state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Indiana Code § 22-2-2-4. Federal FLSA applies.",
    faqs: [
      {
        question: "Does Indiana have daily overtime?",
        answer: "No. Indiana follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Indiana?",
        answer: "Overtime in Indiana is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Indiana?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Indiana.",
      },
      {
        question: "Are seasonal workers in Indiana entitled to overtime?",
        answer: "Some seasonal workers may be exempt from overtime depending on the industry and duration of employment.",
      },
      {
        question: "How is overtime calculated in Indiana?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "IA",
    name: "Iowa",
    slug: "iowa",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Iowa follows federal FLSA overtime rules. Iowa does not have state-specific daily overtime requirements. Employees in Iowa must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Iowa state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Iowa Code § 91A.3. Federal FLSA applies.",
    faqs: [
      {
        question: "Does Iowa have daily overtime?",
        answer: "No. Iowa follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Iowa?",
        answer: "Overtime in Iowa is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Iowa?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Iowa.",
      },
      {
        question: "Are tipped employees in Iowa entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in Iowa?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "KS",
    name: "Kansas",
    slug: "kansas",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Kansas follows federal FLSA overtime rules for most employers. Kansas has a state overtime law that triggers overtime at 46 hours in a workweek, but federal FLSA's 40-hour threshold applies to most employers. Employees in Kansas typically receive overtime pay at 1.5 times their regular rate for hours over 40 in a workweek under federal FLSA.",
    lawReference: "Kansas Statutes § 44-1204. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Kansas have daily overtime?",
        answer: "No. Kansas follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime threshold in Kansas?",
        answer: "Kansas state law sets overtime at 46 hours per week, but federal FLSA's 40-hour threshold applies to most employers, so most employees receive overtime after 40 hours.",
      },
      {
        question: "What is the overtime rate in Kansas?",
        answer: "Overtime in Kansas is 1.5 times the regular rate of pay for hours over 40 in a workweek (under federal FLSA).",
      },
      {
        question: "Are agricultural workers entitled to overtime in Kansas?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Kansas.",
      },
      {
        question: "How is overtime calculated in Kansas?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek for most employees.",
      },
    ],
  },
  {
    code: "KY",
    name: "Kentucky",
    slug: "kentucky",
    dailyOT: true,
    dailyOTThreshold: 7,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Kentucky has state-specific overtime rules that differ from federal FLSA. Kentucky requires overtime pay at 1.5 times the regular rate for hours worked over 7 in a single workday for most employees in industries covered by state law. Kentucky also follows the federal 40-hour weekly overtime rule. The 7-hour daily overtime trigger applies to employees covered by Kentucky state labor law.",
    lawReference: "Kentucky Revised Statutes § 337.028",
    faqs: [
      {
        question: "Does Kentucky have daily overtime?",
        answer: "Yes. Kentucky requires overtime pay at 1.5x for hours over 7 in a single workday for employees covered by state labor law.",
      },
      {
        question: "What is the overtime rate in Kentucky?",
        answer: "Kentucky overtime is 1.5 times the regular rate for hours over 7 in a workday or over 40 in a workweek.",
      },
      {
        question: "Does Kentucky have double overtime?",
        answer: "No. Kentucky does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "Which employees are covered by Kentucky's 7-hour daily overtime?",
        answer: "Kentucky's daily overtime applies to employees in industries covered by Kentucky state labor law. Some industries may be exempt.",
      },
      {
        question: "How is overtime calculated in Kentucky?",
        answer: "Overtime is 1.5 times the regular rate for hours over 7 in a workday or over 40 in a workweek, whichever applies.",
      },
    ],
  },
  {
    code: "LA",
    name: "Louisiana",
    slug: "louisiana",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Louisiana follows federal FLSA overtime rules. Louisiana does not have state-specific daily overtime requirements. Employees in Louisiana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Louisiana state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Louisiana does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Louisiana have daily overtime?",
        answer: "No. Louisiana follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Louisiana?",
        answer: "Overtime in Louisiana is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are oilfield workers in Louisiana entitled to overtime?",
        answer: "Oilfield workers may have specific overtime considerations under federal FLSA, depending on their job duties and classification.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Louisiana?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Louisiana.",
      },
      {
        question: "How is overtime calculated in Louisiana?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "ME",
    name: "Maine",
    slug: "maine",
    dailyOT: true,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Maine has state-specific overtime rules that differ from federal FLSA. Maine's overtime threshold is 40 hours per workweek, but the calculation of the regular rate of pay differs from federal standards for some employees. Maine also has a higher salary threshold for exempt employees than federal standards. Maine follows federal FLSA's basic overtime calculation for most employees.",
    lawReference: "Maine Revised Statutes Title 26, § 664",
    faqs: [
      {
        question: "Does Maine have daily overtime?",
        answer: "No. Maine follows federal FLSA rules for daily overtime, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Maine?",
        answer: "Overtime in Maine is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Maine have a higher salary threshold for exemption?",
        answer: "Yes. Maine has its own salary threshold that is typically higher than the federal threshold for exempt employees.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Maine?",
        answer: "Maine has extended some overtime protections to agricultural workers, partially closing the historical exemption.",
      },
      {
        question: "How is overtime calculated in Maine?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MD",
    name: "Maryland",
    slug: "maryland",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Maryland follows federal FLSA overtime rules for most employees. Maryland does not have state-specific daily overtime requirements. Employees in Maryland must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Maryland state minimum wage is higher than federal, and Maryland has specific overtime rules for certain industries like agriculture.",
    lawReference: "Maryland Labor and Employment Code § 3-415. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Maryland have daily overtime?",
        answer: "No. Maryland follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Maryland?",
        answer: "Overtime in Maryland is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Maryland have a higher minimum wage?",
        answer: "Yes. Maryland's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Maryland?",
        answer: "Maryland has specific overtime rules for agricultural workers that may differ from federal standards.",
      },
      {
        question: "How is overtime calculated in Maryland?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MA",
    name: "Massachusetts",
    slug: "massachusetts",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Massachusetts follows federal FLSA overtime rules for most employees. Massachusetts does not have state-specific daily overtime requirements. Employees in Massachusetts must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Massachusetts state minimum wage is higher than federal, and Massachusetts has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "Massachusetts General Laws Chapter 151, § 1A",
    faqs: [
      {
        question: "Does Massachusetts have daily overtime?",
        answer: "No. Massachusetts follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Massachusetts?",
        answer: "Overtime in Massachusetts is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Massachusetts have a higher minimum wage?",
        answer: "Yes. Massachusetts has one of the highest minimum wages in the US, but this does not affect overtime calculations.",
      },
      {
        question: "Are Sunday overtime rules different in Massachusetts?",
        answer: "Massachusetts has specific Sunday premium pay rules for certain retail employees that may require premium pay on Sundays.",
      },
      {
        question: "How is overtime calculated in Massachusetts?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MI",
    name: "Michigan",
    slug: "michigan",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Michigan follows federal FLSA overtime rules for most employees. Michigan does not have state-specific daily overtime requirements. Employees in Michigan must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Michigan state minimum wage is higher than federal, and overtime calculations follow federal standards.",
    lawReference: "Michigan Compiled Laws § 408.934a. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Michigan have daily overtime?",
        answer: "No. Michigan follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Michigan?",
        answer: "Overtime in Michigan is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Michigan have a higher minimum wage?",
        answer: "Yes. Michigan's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Michigan?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Michigan and federal law.",
      },
      {
        question: "How is overtime calculated in Michigan?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MN",
    name: "Minnesota",
    slug: "minnesota",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Minnesota follows federal FLSA overtime rules for most employers. Minnesota has a state overtime law that triggers overtime at 48 hours in a workweek for very small employers, but federal FLSA's 40-hour threshold applies to most employers. Employees in Minnesota typically receive overtime pay at 1.5 times their regular rate for hours over 40 in a workweek under federal FLSA.",
    lawReference: "Minnesota Statutes § 177.25. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Minnesota have daily overtime?",
        answer: "No. Minnesota follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek for most employees.",
      },
      {
        question: "What is the overtime threshold in Minnesota?",
        answer: "Minnesota state law sets overtime at 48 hours per week for very small employers, but federal FLSA's 40-hour threshold applies to most employers.",
      },
      {
        question: "What is the overtime rate in Minnesota?",
        answer: "Overtime in Minnesota is 1.5 times the regular rate of pay for hours over 40 in a workweek (under federal FLSA).",
      },
      {
        question: "Are agricultural workers entitled to overtime in Minnesota?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Minnesota.",
      },
      {
        question: "How is overtime calculated in Minnesota?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek for most employees.",
      },
    ],
  },
  {
    code: "MS",
    name: "Mississippi",
    slug: "mississippi",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Mississippi follows federal FLSA overtime rules. Mississippi does not have state-specific daily overtime requirements. Employees in Mississippi must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Mississippi state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Mississippi does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Mississippi have daily overtime?",
        answer: "No. Mississippi follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Mississippi?",
        answer: "Overtime in Mississippi is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Mississippi?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Mississippi.",
      },
      {
        question: "Are tipped employees in Mississippi entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in Mississippi?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MO",
    name: "Missouri",
    slug: "missouri",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Missouri follows federal FLSA overtime rules. Missouri does not have state-specific daily overtime requirements. Employees in Missouri must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Missouri state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Missouri Revised Statutes § 290.505. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Missouri have daily overtime?",
        answer: "No. Missouri follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Missouri?",
        answer: "Overtime in Missouri is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Missouri have a higher minimum wage?",
        answer: "Yes. Missouri's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Missouri?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Missouri and federal law.",
      },
      {
        question: "How is overtime calculated in Missouri?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "MT",
    name: "Montana",
    slug: "montana",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Montana follows federal FLSA overtime rules. Montana does not have state-specific daily overtime requirements. Employees in Montana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Montana state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Montana Code § 39-3-405. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Montana have daily overtime?",
        answer: "No. Montana follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Montana?",
        answer: "Overtime in Montana is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Montana have a higher minimum wage?",
        answer: "Yes. Montana's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Montana?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Montana and federal law.",
      },
      {
        question: "How is overtime calculated in Montana?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "NE",
    name: "Nebraska",
    slug: "nebraska",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Nebraska follows federal FLSA overtime rules. Nebraska does not have state-specific daily overtime requirements. Employees in Nebraska must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Nebraska state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Nebraska Revised Statutes § 48-1201. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Nebraska have daily overtime?",
        answer: "No. Nebraska follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Nebraska?",
        answer: "Overtime in Nebraska is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Nebraska have a higher minimum wage?",
        answer: "Yes. Nebraska's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Nebraska?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Nebraska and federal law.",
      },
      {
        question: "How is overtime calculated in Nebraska?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "NV",
    name: "Nevada",
    slug: "nevada",
    dailyOT: true,
    dailyOTThreshold: 8,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Nevada has state-specific overtime rules that go beyond federal FLSA. Nevada requires daily overtime pay at 1.5 times the regular rate for hours worked over 8 in a single workday, for employees who do not receive qualifying health benefits from their employer. Employees who receive qualifying health benefits may have different overtime rules. Nevada also follows the federal 40-hour weekly overtime rule.",
    lawReference: "Nevada Revised Statutes § 608.018",
    faqs: [
      {
        question: "Does Nevada have daily overtime?",
        answer: "Yes. Nevada requires overtime pay at 1.5x for hours over 8 in a single workday for employees without qualifying health benefits.",
      },
      {
        question: "What is the overtime rate in Nevada?",
        answer: "Nevada overtime is 1.5 times the regular rate for hours over 8 in a workday or over 40 in a workweek.",
      },
      {
        question: "Does Nevada have double overtime?",
        answer: "No. Nevada does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "Are employees with health benefits treated differently?",
        answer: "Yes. Employees who receive qualifying health benefits from their employer may have different overtime thresholds under Nevada law.",
      },
      {
        question: "How is overtime calculated in Nevada?",
        answer: "Overtime is 1.5 times the regular rate for hours over 8 in a workday or over 40 in a workweek, depending on health benefits status.",
      },
    ],
  },
  {
    code: "NH",
    name: "New Hampshire",
    slug: "new-hampshire",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "New Hampshire follows federal FLSA overtime rules. New Hampshire does not have state-specific daily overtime requirements. Employees in New Hampshire must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Hampshire state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "New Hampshire Revised Statutes § 279:21. Federal FLSA applies.",
    faqs: [
      {
        question: "Does New Hampshire have daily overtime?",
        answer: "No. New Hampshire follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in New Hampshire?",
        answer: "Overtime in New Hampshire is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are seasonal workers in New Hampshire entitled to overtime?",
        answer: "Some seasonal workers may be exempt from overtime depending on the industry and duration of employment.",
      },
      {
        question: "Are tipped employees in New Hampshire entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in New Hampshire?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "NJ",
    name: "New Jersey",
    slug: "new-jersey",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "New Jersey follows federal FLSA overtime rules for most employees. New Jersey does not have state-specific daily overtime requirements. Employees in New Jersey must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Jersey state minimum wage is higher than federal, and New Jersey has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "New Jersey Statutes § 34:11-56a4. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does New Jersey have daily overtime?",
        answer: "No. New Jersey follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in New Jersey?",
        answer: "Overtime in New Jersey is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does New Jersey have a higher minimum wage?",
        answer: "Yes. New Jersey has one of the highest minimum wages in the US, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in New Jersey?",
        answer: "Agricultural workers are generally exempt from overtime requirements under New Jersey and federal law.",
      },
      {
        question: "How is overtime calculated in New Jersey?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "NM",
    name: "New Mexico",
    slug: "new-mexico",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "New Mexico follows federal FLSA overtime rules. New Mexico does not have state-specific daily overtime requirements. Employees in New Mexico must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Mexico state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "New Mexico Statutes § 50-4-22. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does New Mexico have daily overtime?",
        answer: "No. New Mexico follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in New Mexico?",
        answer: "Overtime in New Mexico is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does New Mexico have a higher minimum wage?",
        answer: "Yes. New Mexico's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in New Mexico?",
        answer: "Agricultural workers are generally exempt from overtime requirements under New Mexico and federal law.",
      },
      {
        question: "How is overtime calculated in New Mexico?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "NY",
    name: "New York",
    slug: "new-york",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "New York follows federal FLSA overtime rules for most employees. New York does not have state-specific daily overtime requirements for general employment. Employees in New York must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New York has a higher salary threshold for exempt employees than federal standards, and some industries have specific overtime rules. New York also has spread-of-hours pay requirements that may affect overtime calculations.",
    lawReference: "New York Labor Law § 651. New York Wage Orders. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does New York have daily overtime?",
        answer: "No. New York follows federal FLSA rules for most employees, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in New York?",
        answer: "Overtime in New York is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does New York have a higher salary threshold for exemption?",
        answer: "Yes. New York has its own salary threshold for exempt employees that is typically higher than the federal threshold, especially in New York City.",
      },
      {
        question: "What is the spread-of-hours rule in New York?",
        answer: "New York requires an additional hour of pay at minimum wage when an employee's workday spans more than 10 hours, regardless of total hours worked.",
      },
      {
        question: "How is overtime calculated in New York?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek, with additional considerations for spread-of-hours pay.",
      },
    ],
  },
  {
    code: "NC",
    name: "North Carolina",
    slug: "north-carolina",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "North Carolina follows federal FLSA overtime rules. North Carolina does not have state-specific daily overtime requirements. Employees in North Carolina must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. North Carolina state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "North Carolina General Statutes § 95-25.4. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does North Carolina have daily overtime?",
        answer: "No. North Carolina follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in North Carolina?",
        answer: "Overtime in North Carolina is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in North Carolina?",
        answer: "Agricultural workers are generally exempt from overtime requirements under North Carolina and federal law.",
      },
      {
        question: "Are seasonal workers in North Carolina entitled to overtime?",
        answer: "Some seasonal workers may be exempt from overtime depending on the industry and duration of employment.",
      },
      {
        question: "How is overtime calculated in North Carolina?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "ND",
    name: "North Dakota",
    slug: "north-dakota",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "North Dakota follows federal FLSA overtime rules. North Dakota does not have state-specific daily overtime requirements. Employees in North Dakota must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. North Dakota state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "North Dakota Century Code § 34-06-02.1. Federal FLSA applies.",
    faqs: [
      {
        question: "Does North Dakota have daily overtime?",
        answer: "No. North Dakota follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in North Dakota?",
        answer: "Overtime in North Dakota is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in North Dakota?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in North Dakota.",
      },
      {
        question: "Are oilfield workers in North Dakota entitled to overtime?",
        answer: "Oilfield workers may have specific overtime considerations under federal FLSA, depending on their job duties.",
      },
      {
        question: "How is overtime calculated in North Dakota?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "OH",
    name: "Ohio",
    slug: "ohio",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Ohio follows federal FLSA overtime rules. Ohio does not have state-specific daily overtime requirements. Employees in Ohio must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Ohio state minimum wage is higher than federal for employers with annual gross receipts over $342,000, but overtime calculations follow federal standards.",
    lawReference: "Ohio Revised Code § 4111.02. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Ohio have daily overtime?",
        answer: "No. Ohio follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Ohio?",
        answer: "Overtime in Ohio is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Ohio have a higher minimum wage?",
        answer: "Yes, for employers with annual gross receipts over $342,000. Smaller employers follow the federal minimum wage.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Ohio?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Ohio and federal law.",
      },
      {
        question: "How is overtime calculated in Ohio?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "OK",
    name: "Oklahoma",
    slug: "oklahoma",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Oklahoma follows federal FLSA overtime rules for most employers. Oklahoma does not have state-specific daily overtime requirements. Employees in Oklahoma must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Oklahoma state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Oklahoma Statutes § 40-197.1. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Oklahoma have daily overtime?",
        answer: "No. Oklahoma follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Oklahoma?",
        answer: "Overtime in Oklahoma is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Oklahoma?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Oklahoma.",
      },
      {
        question: "Are oilfield workers in Oklahoma entitled to overtime?",
        answer: "Oilfield workers may have specific overtime considerations under federal FLSA, depending on their job duties.",
      },
      {
        question: "How is overtime calculated in Oklahoma?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "OR",
    name: "Oregon",
    slug: "oregon",
    dailyOT: true,
    dailyOTThreshold: 10,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Oregon has state-specific overtime rules for certain industries. Oregon requires daily overtime pay at 1.5 times the regular rate for hours worked over 10 in a single workday for workers in manufacturing establishments. Most other Oregon employees follow federal FLSA's 40-hour weekly overtime rule. Oregon also has specific overtime rules for workers in canneries and certain other industries.",
    lawReference: "Oregon Revised Statutes § 653.265. Oregon Wage Orders.",
    faqs: [
      {
        question: "Does Oregon have daily overtime?",
        answer: "Yes, but only for manufacturing workers. Oregon requires overtime at 1.5x for hours over 10 in a workday for manufacturing employees.",
      },
      {
        question: "What is the overtime rate in Oregon?",
        answer: "Oregon overtime is 1.5 times the regular rate for hours over 40 in a workweek, or over 10 in a workday for manufacturing workers.",
      },
      {
        question: "Does Oregon have double overtime?",
        answer: "No. Oregon does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "Which Oregon workers have daily overtime?",
        answer: "Manufacturing workers in Oregon have daily overtime at 10 hours. Most other workers follow federal weekly overtime rules.",
      },
      {
        question: "How is overtime calculated in Oregon?",
        answer: "Overtime is 1.5 times the regular rate for hours over 40 in a workweek, with daily overtime for manufacturing workers at 10 hours.",
      },
    ],
  },
  {
    code: "PA",
    name: "Pennsylvania",
    slug: "pennsylvania",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Pennsylvania follows federal FLSA overtime rules. Pennsylvania does not have state-specific daily overtime requirements. Employees in Pennsylvania must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Pennsylvania state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Pennsylvania Minimum Wage Act. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Pennsylvania have daily overtime?",
        answer: "No. Pennsylvania follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Pennsylvania?",
        answer: "Overtime in Pennsylvania is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Pennsylvania?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Pennsylvania and federal law.",
      },
      {
        question: "Are tipped employees in Pennsylvania entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in Pennsylvania?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "RI",
    name: "Rhode Island",
    slug: "rhode-island",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Rhode Island follows federal FLSA overtime rules for most employees. Rhode Island does not have state-specific daily overtime requirements for general employment. Employees in Rhode Island must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Rhode Island has Sunday premium pay requirements for certain retail employees.",
    lawReference: "Rhode Island General Laws § 28-12-4.1. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Rhode Island have daily overtime?",
        answer: "No. Rhode Island follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Rhode Island?",
        answer: "Overtime in Rhode Island is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Rhode Island have Sunday premium pay?",
        answer: "Yes. Rhode Island requires Sunday premium pay for certain retail employees, separate from overtime requirements.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Rhode Island?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Rhode Island and federal law.",
      },
      {
        question: "How is overtime calculated in Rhode Island?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "SC",
    name: "South Carolina",
    slug: "south-carolina",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "South Carolina follows federal FLSA overtime rules. South Carolina does not have state-specific daily overtime requirements. Employees in South Carolina must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. South Carolina state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "South Carolina does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does South Carolina have daily overtime?",
        answer: "No. South Carolina follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in South Carolina?",
        answer: "Overtime in South Carolina is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in South Carolina?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in South Carolina.",
      },
      {
        question: "Are tipped employees in South Carolina entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in South Carolina?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "SD",
    name: "South Dakota",
    slug: "south-dakota",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "South Dakota follows federal FLSA overtime rules. South Dakota does not have state-specific daily overtime requirements. Employees in South Dakota must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. South Dakota state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "South Dakota Codified Laws § 60-11-7.1. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does South Dakota have daily overtime?",
        answer: "No. South Dakota follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in South Dakota?",
        answer: "Overtime in South Dakota is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does South Dakota have a higher minimum wage?",
        answer: "Yes. South Dakota's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in South Dakota?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in South Dakota.",
      },
      {
        question: "How is overtime calculated in South Dakota?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "TN",
    name: "Tennessee",
    slug: "tennessee",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Tennessee follows federal FLSA overtime rules. Tennessee does not have state-specific daily overtime requirements. Employees in Tennessee must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Tennessee state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Tennessee does not have a state overtime law. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Tennessee have daily overtime?",
        answer: "No. Tennessee follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Tennessee?",
        answer: "Overtime in Tennessee is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Tennessee?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Tennessee.",
      },
      {
        question: "Are tipped employees in Tennessee entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in Tennessee?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "TX",
    name: "Texas",
    slug: "texas",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Texas follows federal FLSA overtime rules. Texas does not have state-specific daily overtime requirements. Employees in Texas must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Texas state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Texas Labor Code § 62. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Texas have daily overtime?",
        answer: "No. Texas follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Texas?",
        answer: "Overtime in Texas is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are oilfield workers in Texas entitled to overtime?",
        answer: "Oilfield workers may have specific overtime considerations under federal FLSA, depending on their job duties and classification.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Texas?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Texas.",
      },
      {
        question: "How is overtime calculated in Texas?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "UT",
    name: "Utah",
    slug: "utah",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Utah follows federal FLSA overtime rules. Utah does not have state-specific daily overtime requirements. Employees in Utah must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Utah state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Utah Code § 34-40-101. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Utah have daily overtime?",
        answer: "No. Utah follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Utah?",
        answer: "Overtime in Utah is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Utah?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Utah and federal law.",
      },
      {
        question: "Are seasonal workers in Utah entitled to overtime?",
        answer: "Some seasonal workers may be exempt from overtime depending on the industry and duration of employment.",
      },
      {
        question: "How is overtime calculated in Utah?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "VT",
    name: "Vermont",
    slug: "vermont",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Vermont follows federal FLSA overtime rules for most employees. Vermont does not have state-specific daily overtime requirements. Employees in Vermont must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Vermont state minimum wage is higher than federal, and Vermont has specific overtime rules for certain industries.",
    lawReference: "Vermont Statutes Title 21, § 384. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Vermont have daily overtime?",
        answer: "No. Vermont follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Vermont?",
        answer: "Overtime in Vermont is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Vermont have a higher minimum wage?",
        answer: "Yes. Vermont's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Vermont?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Vermont and federal law.",
      },
      {
        question: "How is overtime calculated in Vermont?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "VA",
    name: "Virginia",
    slug: "virginia",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Virginia follows federal FLSA overtime rules. Virginia does not have state-specific daily overtime requirements. Employees in Virginia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Virginia state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Virginia Code § 40.1-29.1. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Virginia have daily overtime?",
        answer: "No. Virginia follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Virginia?",
        answer: "Overtime in Virginia is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Virginia have a higher minimum wage?",
        answer: "Yes. Virginia's minimum wage is higher than federal, but this does not affect overtime calculations.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Virginia?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Virginia and federal law.",
      },
      {
        question: "How is overtime calculated in Virginia?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "WA",
    name: "Washington",
    slug: "washington",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Washington State follows federal FLSA overtime rules for most employees. Washington does not have state-specific daily overtime requirements. Employees in Washington must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Washington state minimum wage is one of the highest in the country, and Washington has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "Washington Revised Code § 49.46.130. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Washington State have daily overtime?",
        answer: "No. Washington follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Washington?",
        answer: "Overtime in Washington is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Does Washington have a higher salary threshold for exemption?",
        answer: "Yes. Washington has its own salary threshold for exempt employees that is typically higher than the federal threshold.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Washington?",
        answer: "Washington has extended overtime protections to some agricultural workers in recent years.",
      },
      {
        question: "How is overtime calculated in Washington?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "WV",
    name: "West Virginia",
    slug: "west-virginia",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "West Virginia follows federal FLSA overtime rules. West Virginia does not have state-specific daily overtime requirements. Employees in West Virginia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. West Virginia state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "West Virginia Code § 21-5C-2. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does West Virginia have daily overtime?",
        answer: "No. West Virginia follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in West Virginia?",
        answer: "Overtime in West Virginia is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are coal miners in West Virginia entitled to overtime?",
        answer: "Coal miners may have specific overtime considerations under federal FLSA and West Virginia labor law.",
      },
      {
        question: "Are agricultural workers entitled to overtime in West Virginia?",
        answer: "Agricultural workers are generally exempt from overtime requirements under West Virginia and federal law.",
      },
      {
        question: "How is overtime calculated in West Virginia?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "WI",
    name: "Wisconsin",
    slug: "wisconsin",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Wisconsin follows federal FLSA overtime rules. Wisconsin does not have state-specific daily overtime requirements. Employees in Wisconsin must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Wisconsin state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Wisconsin Statutes § 104.01. Federal FLSA also applies.",
    faqs: [
      {
        question: "Does Wisconsin have daily overtime?",
        answer: "No. Wisconsin follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Wisconsin?",
        answer: "Overtime in Wisconsin is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Wisconsin?",
        answer: "Agricultural workers are generally exempt from overtime requirements under Wisconsin and federal law.",
      },
      {
        question: "Are tipped employees in Wisconsin entitled to overtime?",
        answer: "Yes. Tipped employees must receive overtime pay at 1.5 times their regular rate.",
      },
      {
        question: "How is overtime calculated in Wisconsin?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
  {
    code: "WY",
    name: "Wyoming",
    slug: "wyoming",
    dailyOT: false,
    dailyOTThreshold: 0,
    doubleOT: false,
    doubleOTThreshold: 0,
    intro: "Wyoming follows federal FLSA overtime rules. Wyoming does not have state-specific daily overtime requirements. Employees in Wyoming must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Wyoming state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Wyoming Statutes § 27-7-101. Federal FLSA applies (29 U.S.C. § 207).",
    faqs: [
      {
        question: "Does Wyoming have daily overtime?",
        answer: "No. Wyoming follows federal FLSA rules, requiring overtime only for hours over 40 in a workweek.",
      },
      {
        question: "What is the overtime rate in Wyoming?",
        answer: "Overtime in Wyoming is 1.5 times the regular rate of pay for hours over 40 in a workweek.",
      },
      {
        question: "Are oilfield workers in Wyoming entitled to overtime?",
        answer: "Oilfield workers may have specific overtime considerations under federal FLSA, depending on their job duties.",
      },
      {
        question: "Are agricultural workers entitled to overtime in Wyoming?",
        answer: "Agricultural workers are generally exempt from overtime requirements under federal law, which applies in Wyoming.",
      },
      {
        question: "How is overtime calculated in Wyoming?",
        answer: "Overtime is 1.5 times the regular hourly rate for hours over 40 in a workweek.",
      },
    ],
  },
];
