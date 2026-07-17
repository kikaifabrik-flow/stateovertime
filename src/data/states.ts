export interface StateInfo {
  code: string;
  name: string;
  slug: string;
  intro: string;
  lawReference: string;
  faqs: { question: string; answer: string }[];
}

export const STATES_DATA: StateInfo[] = [
  {
    code: "AL",
    name: "Alabama",
    slug: "alabama",
    intro: "Alabama follows federal FLSA overtime rules. Alabama does not have state-specific daily overtime requirements. Employees in Alabama must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. There are no daily overtime triggers in Alabama, meaning an employee can work 10 or 12 hours in a single day without triggering overtime, as long as their weekly total does not exceed 40 hours.",
    lawReference: "Alabama does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Alaska has stronger overtime protections than federal law. In addition to the federal 40-hour weekly overtime rule, Alaska requires daily overtime pay at 1.5 times the regular rate for any hours worked over 8 in a single workday. Alaska labor law also applies overtime to some workers not covered by federal FLSA. Alaska's daily overtime rule means that even if an employee works fewer than 40 hours in a week, they still receive overtime pay for any day where they worked more than 8 hours.",
    lawReference: "Alaska Stat. Â§ 23.10.060",
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
    intro: "Arizona follows federal FLSA overtime rules. Arizona does not have state-specific daily overtime requirements. Employees in Arizona must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Arizona's state minimum wage is higher than the federal minimum, but overtime calculations follow federal standards.",
    lawReference: "Arizona does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Arkansas follows federal FLSA overtime rules. Arkansas does not have state-specific daily overtime requirements. Employees in Arkansas must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Arkansas state law covers some employers not subject to federal FLSA, but the overtime calculation method is the same.",
    lawReference: "Arkansas Code Â§ 11-4-217. Federal FLSA also applies (29 U.S.C. Â§ 207).",
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
    intro: "California has the strongest overtime protections in the United States. California labor law requires daily overtime pay at 1.5 times the regular rate for hours worked over 8 in a single workday, and double-time pay at 2 times the regular rate for hours worked over 12 in a single workday. California also requires overtime for the first 8 hours on the seventh consecutive day of work in a workweek, and double-time for hours over 8 on the seventh consecutive day. These California-specific overtime rules are in addition to the federal 40-hour weekly overtime requirement.",
    lawReference: "California Labor Code Â§ 510, California Wage Orders",
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
    intro: "Colorado requires overtime at 1.5 times the regular rate after 40 hours in a workweek, after 12 hours in a workday, or after 12 consecutive hours of work, whichever calculation results in more pay. This calculator handles the daily and weekly thresholds; split shifts that cross calendar days may require a separate consecutive-hours calculation.",
    lawReference: "Colorado COMPS and PAY CALC Orders, Rule 4",
    faqs: [
      {
        question: "Does Colorado have daily overtime?",
        answer: "Yes. Colorado requires overtime at 1.5x after 12 hours in a workday or 12 consecutive hours of work.",
      },
      {
        question: "What is the overtime rate in Colorado?",
        answer: "Colorado overtime is 1.5x the regular rate after 40 hours in a workweek, after 12 hours in a workday, or after 12 consecutive hours of work.",
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
        answer: "Overtime is 1.5x after 40 weekly hours, 12 daily hours, or 12 consecutive hours, using the calculation that pays the employee the most.",
      },
    ],
  },
  {
    code: "CT",
    name: "Connecticut",
    slug: "connecticut",
    intro: "Connecticut follows federal FLSA overtime rules for most employees. Connecticut does not have state-specific daily overtime requirements for general employment. Employees in Connecticut must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Some industries in Connecticut have specific overtime rules, but most follow federal standards.",
    lawReference: "Connecticut General Statutes Â§ 31-76c through 31-76i. Federal FLSA also applies.",
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
    intro: "Washington DC follows federal FLSA overtime rules. DC does not have state-specific daily overtime requirements for most employees. Employees in DC must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. DC has one of the highest minimum wages in the country, but overtime calculations follow federal standards.",
    lawReference: "DC Code Â§ 32-1003. Federal FLSA also applies.",
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
    intro: "Florida follows federal FLSA overtime rules. Florida does not have state-specific daily overtime requirements. Employees in Florida must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Florida state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Florida does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Georgia follows federal FLSA overtime rules for most employers. Georgia does not have state-specific daily overtime requirements. Employees in Georgia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Georgia's state minimum wage is lower than federal, meaning most employees are covered by the higher federal minimum wage and FLSA overtime rules.",
    lawReference: "Georgia Code Â§ 34-4-3. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Idaho follows federal FLSA overtime rules. Idaho does not have state-specific daily overtime requirements. Employees in Idaho must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Idaho state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Idaho Code Â§ 44-1503. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Indiana follows federal FLSA overtime rules. Indiana does not have state-specific daily overtime requirements. Employees in Indiana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Indiana state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Indiana Code Â§ 22-2-2-4. Federal FLSA applies.",
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
    intro: "Iowa follows federal FLSA overtime rules. Iowa does not have state-specific daily overtime requirements. Employees in Iowa must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Iowa state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Iowa Code Â§ 91A.3. Federal FLSA applies.",
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
    intro: "Kansas follows federal FLSA overtime rules for most employers. Kansas has a state overtime law that triggers overtime at 46 hours in a workweek, but federal FLSA's 40-hour threshold applies to most employers. Employees in Kansas typically receive overtime pay at 1.5 times their regular rate for hours over 40 in a workweek under federal FLSA.",
    lawReference: "Kansas Statutes Â§ 44-1204. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Kentucky generally requires overtime at 1.5 times the regular rate after 40 hours in a workweek. Kentucky also has a seventh-day rule for certain employees who work all seven days in the same workweek. It is not a daily overtime rule after seven hours.",
    lawReference: "Kentucky Revised Statutes Â§ 337.050; federal FLSA (29 U.S.C. Â§ 207)",
    faqs: [
      {
        question: "Does Kentucky have daily overtime?",
        answer: "No. Kentucky does not have a general daily overtime threshold. Its special rule concerns eligible employees who work seven days in one workweek.",
      },
      {
        question: "What is the overtime rate in Kentucky?",
        answer: "Kentucky overtime is generally 1.5 times the regular rate after 40 hours in a workweek. Eligible employees may also receive time-and-a-half for work on the seventh day of that workweek.",
      },
      {
        question: "Does Kentucky have double overtime?",
        answer: "No. Kentucky does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "Who may qualify for Kentucky's seventh-day overtime?",
        answer: "The rule generally applies when an employee works all seven days in a workweek, subject to statutory exemptions. It does not create overtime after seven hours in one day.",
      },
      {
        question: "How is overtime calculated in Kentucky?",
        answer: "This calculator applies the standard 40-hour weekly threshold. A seventh consecutive workday may need separate review because eligibility depends on the employee and workweek.",
      },
    ],
  },
  {
    code: "LA",
    name: "Louisiana",
    slug: "louisiana",
    intro: "Louisiana follows federal FLSA overtime rules. Louisiana does not have state-specific daily overtime requirements. Employees in Louisiana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Louisiana state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Louisiana does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Maine generally requires covered employees to receive overtime at 1.5 times the regular rate after 40 hours in a workweek. Maine does not impose a general daily overtime threshold, although exemptions and industry-specific rules may apply.",
    lawReference: "Maine Revised Statutes Title 26, Â§ 664",
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
    intro: "Maryland follows federal FLSA overtime rules for most employees. Maryland does not have state-specific daily overtime requirements. Employees in Maryland must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Maryland state minimum wage is higher than federal, and Maryland has specific overtime rules for certain industries like agriculture.",
    lawReference: "Maryland Labor and Employment Code Â§ 3-415. Federal FLSA also applies.",
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
    intro: "Massachusetts follows federal FLSA overtime rules for most employees. Massachusetts does not have state-specific daily overtime requirements. Employees in Massachusetts must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Massachusetts state minimum wage is higher than federal, and Massachusetts has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "Massachusetts General Laws Chapter 151, Â§ 1A",
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
    intro: "Michigan follows federal FLSA overtime rules for most employees. Michigan does not have state-specific daily overtime requirements. Employees in Michigan must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Michigan state minimum wage is higher than federal, and overtime calculations follow federal standards.",
    lawReference: "Michigan Compiled Laws Â§ 408.934a. Federal FLSA also applies.",
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
    intro: "Minnesota follows federal FLSA overtime rules for most employers. Minnesota has a state overtime law that triggers overtime at 48 hours in a workweek for very small employers, but federal FLSA's 40-hour threshold applies to most employers. Employees in Minnesota typically receive overtime pay at 1.5 times their regular rate for hours over 40 in a workweek under federal FLSA.",
    lawReference: "Minnesota Statutes Â§ 177.25. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Mississippi follows federal FLSA overtime rules. Mississippi does not have state-specific daily overtime requirements. Employees in Mississippi must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Mississippi state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Mississippi does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Missouri follows federal FLSA overtime rules. Missouri does not have state-specific daily overtime requirements. Employees in Missouri must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Missouri state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Missouri Revised Statutes Â§ 290.505. Federal FLSA also applies.",
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
    intro: "Montana follows federal FLSA overtime rules. Montana does not have state-specific daily overtime requirements. Employees in Montana must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Montana state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Montana Code Â§ 39-3-405. Federal FLSA also applies.",
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
    intro: "Nebraska follows federal FLSA overtime rules. Nebraska does not have state-specific daily overtime requirements. Employees in Nebraska must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Nebraska state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Nebraska Revised Statutes Â§ 48-1201. Federal FLSA also applies.",
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
    intro: "Effective July 1, 2026, Nevada generally requires daily overtime at 1.5 times the regular rate after 8 hours in a workday for employees earning less than $18 per hour. Employees earning $18 per hour or more generally receive overtime after 40 hours in a workweek rather than under the daily threshold. Exemptions may apply.",
    lawReference: "Nevada Revised Statutes Â§ 608.018",
    faqs: [
      {
        question: "Does Nevada have daily overtime?",
        answer: "Effective July 1, 2026, Nevada generally requires daily overtime after 8 hours for employees earning less than $18 per hour.",
      },
      {
        question: "What is the overtime rate in Nevada?",
        answer: "Nevada overtime is 1.5 times the regular rate. The daily threshold generally applies below $18 per hour, while the 40-hour weekly threshold applies at all wage levels for covered employees.",
      },
      {
        question: "Does Nevada have double overtime?",
        answer: "No. Nevada does not require double-time pay. All overtime is paid at 1.5 times the regular rate.",
      },
      {
        question: "What is Nevada's daily-overtime wage threshold?",
        answer: "For the period beginning July 1, 2026, the daily-overtime threshold generally applies to employees earning less than $18 per hour.",
      },
      {
        question: "How is overtime calculated in Nevada?",
        answer: "This calculator applies daily overtime after 8 hours when the hourly rate is below $18, then reconciles any remaining weekly overtime after 40 hours without counting the same hour twice.",
      },
    ],
  },
  {
    code: "NH",
    name: "New Hampshire",
    slug: "new-hampshire",
    intro: "New Hampshire follows federal FLSA overtime rules. New Hampshire does not have state-specific daily overtime requirements. Employees in New Hampshire must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Hampshire state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "New Hampshire Revised Statutes Â§ 279:21. Federal FLSA applies.",
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
    intro: "New Jersey follows federal FLSA overtime rules for most employees. New Jersey does not have state-specific daily overtime requirements. Employees in New Jersey must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Jersey state minimum wage is higher than federal, and New Jersey has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "New Jersey Statutes Â§ 34:11-56a4. Federal FLSA also applies.",
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
    intro: "New Mexico follows federal FLSA overtime rules. New Mexico does not have state-specific daily overtime requirements. Employees in New Mexico must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New Mexico state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "New Mexico Statutes Â§ 50-4-22. Federal FLSA also applies.",
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
    intro: "New York follows federal FLSA overtime rules for most employees. New York does not have state-specific daily overtime requirements for general employment. Employees in New York must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. New York has a higher salary threshold for exempt employees than federal standards, and some industries have specific overtime rules. New York also has spread-of-hours pay requirements that may affect overtime calculations.",
    lawReference: "New York Labor Law Â§ 651. New York Wage Orders. Federal FLSA also applies.",
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
    intro: "North Carolina follows federal FLSA overtime rules. North Carolina does not have state-specific daily overtime requirements. Employees in North Carolina must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. North Carolina state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "North Carolina General Statutes Â§ 95-25.4. Federal FLSA also applies.",
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
    intro: "North Dakota follows federal FLSA overtime rules. North Dakota does not have state-specific daily overtime requirements. Employees in North Dakota must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. North Dakota state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "North Dakota Century Code Â§ 34-06-02.1. Federal FLSA applies.",
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
    intro: "Ohio follows federal FLSA overtime rules. Ohio does not have state-specific daily overtime requirements. Employees in Ohio must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Ohio state minimum wage is higher than federal for employers with annual gross receipts over $342,000, but overtime calculations follow federal standards.",
    lawReference: "Ohio Revised Code Â§ 4111.02. Federal FLSA also applies.",
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
    intro: "Oklahoma follows federal FLSA overtime rules for most employers. Oklahoma does not have state-specific daily overtime requirements. Employees in Oklahoma must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Oklahoma state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Oklahoma Statutes Â§ 40-197.1. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Oregon has state-specific overtime rules for certain industries. Oregon requires daily overtime pay at 1.5 times the regular rate for hours worked over 10 in a single workday for workers in manufacturing establishments. Most other Oregon employees follow federal FLSA's 40-hour weekly overtime rule. Oregon also has specific overtime rules for workers in canneries and certain other industries.",
    lawReference: "Oregon Revised Statutes Â§ 653.265. Oregon Wage Orders.",
    faqs: [
      {
        question: "Does Oregon have daily overtime?",
        answer: "Not for most employees. Oregon's daily overtime after 10 hours applies to manufacturing establishments and certain other specialized work.",
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
        answer: "Workers in manufacturing establishments and certain canneries have special daily overtime protections. Most other workers follow the weekly overtime rule.",
      },
      {
        question: "How is overtime calculated in Oregon?",
        answer: "This general calculator applies overtime after 40 hours in a workweek. Manufacturing and cannery workers should use the applicable industry rule because daily overtime may also apply.",
      },
    ],
  },
  {
    code: "PA",
    name: "Pennsylvania",
    slug: "pennsylvania",
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
    intro: "Rhode Island follows federal FLSA overtime rules for most employees. Rhode Island does not have state-specific daily overtime requirements for general employment. Employees in Rhode Island must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Rhode Island has Sunday premium pay requirements for certain retail employees.",
    lawReference: "Rhode Island General Laws Â§ 28-12-4.1. Federal FLSA also applies.",
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
    intro: "South Carolina follows federal FLSA overtime rules. South Carolina does not have state-specific daily overtime requirements. Employees in South Carolina must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. South Carolina state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "South Carolina does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "South Dakota follows federal FLSA overtime rules. South Dakota does not have state-specific daily overtime requirements. Employees in South Dakota must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. South Dakota state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "South Dakota Codified Laws Â§ 60-11-7.1. Federal FLSA also applies.",
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
    intro: "Tennessee follows federal FLSA overtime rules. Tennessee does not have state-specific daily overtime requirements. Employees in Tennessee must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Tennessee state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Tennessee does not have a state overtime law. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Texas follows federal FLSA overtime rules. Texas does not have state-specific daily overtime requirements. Employees in Texas must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Texas state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Texas Labor Code Â§ 62. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Utah follows federal FLSA overtime rules. Utah does not have state-specific daily overtime requirements. Employees in Utah must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Utah state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Utah Code Â§ 34-40-101. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
    intro: "Vermont follows federal FLSA overtime rules for most employees. Vermont does not have state-specific daily overtime requirements. Employees in Vermont must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Vermont state minimum wage is higher than federal, and Vermont has specific overtime rules for certain industries.",
    lawReference: "Vermont Statutes Title 21, Â§ 384. Federal FLSA also applies.",
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
    intro: "Virginia follows federal FLSA overtime rules. Virginia does not have state-specific daily overtime requirements. Employees in Virginia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Virginia state minimum wage is higher than federal, but overtime calculations follow federal standards.",
    lawReference: "Virginia Code Â§ 40.1-29.1. Federal FLSA also applies.",
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
    intro: "Washington State follows federal FLSA overtime rules for most employees. Washington does not have state-specific daily overtime requirements. Employees in Washington must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Washington state minimum wage is one of the highest in the country, and Washington has a higher salary threshold for exempt employees than federal standards.",
    lawReference: "Washington Revised Code Â§ 49.46.130. Federal FLSA also applies.",
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
    intro: "West Virginia follows federal FLSA overtime rules. West Virginia does not have state-specific daily overtime requirements. Employees in West Virginia must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. West Virginia state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "West Virginia Code Â§ 21-5C-2. Federal FLSA also applies.",
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
    intro: "Wisconsin follows federal FLSA overtime rules. Wisconsin does not have state-specific daily overtime requirements. Employees in Wisconsin must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Wisconsin state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Wisconsin Statutes Â§ 104.01. Federal FLSA also applies.",
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
    intro: "Wyoming follows federal FLSA overtime rules. Wyoming does not have state-specific daily overtime requirements. Employees in Wyoming must receive overtime pay at 1.5 times their regular rate for any hours worked over 40 in a single workweek. Wyoming state minimum wage matches the federal minimum wage, and overtime calculations follow federal standards.",
    lawReference: "Wyoming Statutes Â§ 27-7-101. Federal FLSA applies (29 U.S.C. Â§ 207).",
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
