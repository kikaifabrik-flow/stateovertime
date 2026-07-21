import type { Metadata } from "next";
import Link from "next/link";
import ShareCalculator from "../../components/ShareCalculator";
import { SiteHeader } from "../../components/SiteHeader";

const calculatorPath = "/overtime-calculator/california";

const faqs = [
  {
    question: "Does California overtime start after eight hours?",
    answer:
      "For most nonexempt employees, time-and-a-half begins after eight hours worked in one workday. Weekly overtime may also apply after 40 hours worked in a workweek.",
  },
  {
    question: "When does double time begin in California?",
    answer:
      "A nonexempt employee may earn double time after 12 hours worked in one workday. Double time may also apply after eight hours worked on the seventh consecutive day of work within a workweek.",
  },
  {
    question: "Do I receive overtime just for working on Sunday?",
    answer:
      "Not automatically. California overtime rules do not apply solely because work takes place on a Saturday, Sunday or holiday. Overtime depends on hours worked, consecutive days and any applicable employment agreement or employer policy.",
  },
  {
    question: "Can a salaried employee receive overtime?",
    answer:
      "Yes. A salary alone does not make an employee exempt. The employee must meet the applicable legal requirements for an overtime exemption.",
  },
  {
    question: "Is overtime based on hours worked or hours paid?",
    answer:
      "California calculates overtime from hours actually worked. Paid vacation, sick leave and holiday time are not treated as hours worked when deciding whether the employee crossed an overtime threshold.",
  },
  {
    question: "Can my employer refuse to pay overtime that was not approved?",
    answer:
      "An employer may enforce a policy requiring approval before overtime is worked. However, overtime still must be paid when the employer knew or should have known that the work was performed.",
  },
];

const officialSources = [
  {
    label: "California Labor Commissioner - Overtime FAQ",
    href: "https://www.dir.ca.gov/dlse/faq_overtime.htm",
  },
  {
    label: "California Labor Commissioner - Overtime exemptions",
    href: "https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm",
  },
  {
    label: "California Labor Commissioner - Exceptions to the general overtime law",
    href: "https://www.dir.ca.gov/dlse/FAQ_OvertimeExceptions.htm",
  },
  {
    label: "California Labor Code Section 510",
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=510.",
  },
  {
    label: "California Labor Code Section 500 - Workday and workweek definitions",
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=500.",
  },
];

export const metadata: Metadata = {
  title: "California Overtime Laws: Daily Overtime and Double Time",
  description:
    "Learn when California workers may earn daily overtime, weekly overtime and double time, with clear examples and a link to the California overtime calculator.",
  alternates: {
    canonical: "https://stateovertime.com/california-overtime-laws",
  },
};

function ExampleBox({
  children,
  labelledBy,
}: {
  children: React.ReactNode;
  labelledBy: string;
}) {
  return (
    <aside
      aria-labelledby={labelledBy}
      className="mt-5 rounded-md border-l-4 border-blue-700 bg-blue-50 p-5 sm:p-6"
    >
      <h3 id={labelledBy} className="font-bold text-blue-950">
        Example
      </h3>
      <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
        {children}
      </dl>
    </aside>
  );
}

function ExampleRow({ label, value, total = false }: { label: string; value: string; total?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-0.5 border-b border-blue-100 pb-2 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6 ${
        total ? "font-bold text-blue-950" : ""
      }`}
    >
      <dt>{label}</dt>
      <dd className="sm:text-right">{value}</dd>
    </div>
  );
}

export default function CaliforniaOvertimeLawsPage() {
  const currentYear = new Date().getFullYear();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] text-slate-950">
      <SiteHeader activePage="california-overtime-laws" />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to calculator
        </Link>

        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-600">
          <Link href="/state-laws" className="font-semibold text-blue-700 hover:text-blue-900">
            State overtime laws
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">California</span>
        </nav>

        <section aria-labelledby="california-overtime-heading">
          <h1 id="california-overtime-heading" className="text-3xl font-bold tracking-tight text-[#071b35] sm:text-4xl">
            California Overtime Laws
          </h1>
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-slate-700">
            <p>
              California overtime can work differently from overtime in many other states. For most nonexempt employees, overtime may be based on the number of hours worked in one day as well as the total hours worked during the week.
            </p>
            <p>
              This guide explains the rules and shows how time-and-a-half and double time may apply. When you are ready to estimate your pay, use the California overtime calculator.
            </p>
          </div>
          <Link
            href={calculatorPath}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate California Overtime Pay
          </Link>
        </section>

        <article className="mt-8 space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="general-rules-heading">
            <h2 id="general-rules-heading" className="text-2xl font-bold text-[#071b35]">
              How California overtime works
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                Most nonexempt employees in California may earn overtime in more than one way. Working more than eight hours in a single workday can create overtime, even when the employee works fewer than 40 hours for the entire week.
              </p>
              <p>
                Weekly overtime may also apply once an employee works more than 40 hours in a workweek.
              </p>
              <div className="overflow-hidden rounded-md border border-slate-200" aria-label="General California overtime rates">
                <dl className="divide-y divide-slate-200">
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Regular pay</dt>
                    <dd>The first eight hours worked in a workday</dd>
                  </div>
                  <div className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Time-and-a-half</dt>
                    <dd>Hours worked beyond eight and through 12 in a workday</dd>
                  </div>
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Double time</dt>
                    <dd>Hours worked beyond 12 in a workday</dd>
                  </div>
                </dl>
              </div>
              <p>
                These are the general rules. Some occupations, employment arrangements and properly adopted alternative workweek schedules follow different rules.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="daily-overtime-heading">
            <h2 id="daily-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Daily overtime after eight hours
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                A nonexempt employee who works more than eight hours in one workday earns time-and-a-half for the extra hours.
              </p>
              <p>For example, suppose an employee earns $20 per hour and works 10 hours on Monday.</p>
              <p>
                The first eight hours are paid at the regular $20 hourly rate. The remaining two hours would be paid at $30 per hour, which is one and one-half times the regular rate.
              </p>
            </div>
            <ExampleBox labelledBy="ten-hour-example-heading">
              <ExampleRow label="Regular hourly rate" value="$20" />
              <ExampleRow label="Hours worked" value="10" />
              <ExampleRow label="Regular pay" value="8 × $20 = $160" />
              <ExampleRow label="Overtime pay" value="2 × $30 = $60" />
              <ExampleRow label="Estimated total" value="$220" total />
            </ExampleBox>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The actual regular rate can sometimes include more than an employee’s basic hourly wage, such as certain bonuses, commissions or shift differentials.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="double-time-heading">
            <h2 id="double-time-heading" className="text-2xl font-bold text-[#071b35]">
              Double time after 12 hours
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>For most nonexempt employees, double time begins after more than 12 hours of work in one workday.</p>
              <p>An employee earning $20 per hour would have a double-time rate of $40 per hour.</p>
            </div>
            <ExampleBox labelledBy="fourteen-hour-example-heading">
              <ExampleRow label="Regular hourly rate" value="$20" />
              <ExampleRow label="Hours worked" value="14" />
              <ExampleRow label="Regular pay" value="8 × $20 = $160" />
              <ExampleRow label="Time-and-a-half pay" value="4 × $30 = $120" />
              <ExampleRow label="Double-time pay" value="2 × $40 = $80" />
              <ExampleRow label="Estimated total" value="$360" total />
            </ExampleBox>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="weekly-overtime-heading">
            <h2 id="weekly-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Overtime after 40 hours in a workweek
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>California&apos;s weekly rule also provides time-and-a-half pay for hours worked beyond 40 in a workweek.</p>
              <p>
                Daily and weekly overtime rules are considered together. The same hours are not simply paid twice because they qualify under both a daily and weekly rule.
              </p>
              <p>
                For example, an employee could work six hours a day for seven days. That adds up to 42 hours. Even though the employee did not exceed eight hours on any single day, overtime rules may still apply because of the weekly total and the seventh-day rule.
              </p>
              <p>
                To see how a schedule breaks into regular, overtime and double-time hours, enter the workweek in the {" "}
                <Link href={calculatorPath} className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900">
                  California pay estimator
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="seventh-day-heading">
            <h2 id="seventh-day-heading" className="text-2xl font-bold text-[#071b35]">
              Working seven days in a row
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>California has an additional rule for the seventh consecutive day worked within an employer’s workweek.</p>
              <p>For most nonexempt employees:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>The first eight hours worked on the seventh consecutive day receive time-and-a-half pay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Hours worked beyond eight on that seventh day receive double-time pay.</span>
                </li>
              </ul>
              <p>
                The rule concerns the seventh consecutive day within the same workweek, not simply any seven calendar days chosen by the employee.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="salary-heading">
            <h2 id="salary-heading" className="text-2xl font-bold text-[#071b35]">
              Does a salary prevent overtime?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Being paid a salary does not automatically mean an employee is exempt from overtime.</p>
              <p>
                Exempt status normally depends on several legal requirements, including the employee’s actual duties and how the employee is paid. A job title by itself does not settle the question.
              </p>
              <p>
                Someone called a “manager,” for example, may still be entitled to overtime if the position does not satisfy the applicable exemption requirements. The Labor Commissioner maintains current {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  overtime exemption information
                </a>
                .
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="workday-heading">
            <h2 id="workday-heading" className="text-2xl font-bold text-[#071b35]">
              What counts as a workday?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>A workday is a fixed 24-hour period established by the employer that begins at the same time each calendar day. It does not always begin at midnight.</p>
              <p>
                This matters for employees who work overnight. A shift that crosses midnight is not automatically split into two separate workdays for overtime purposes. The employer’s established workday determines where the hours fall.
              </p>
              <aside className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 sm:text-base">
                An employer cannot change the workday from week to week simply to avoid paying overtime.
              </aside>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="unauthorized-overtime-heading">
            <h2 id="unauthorized-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Does unauthorized overtime still have to be paid?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                An employer may have a rule requiring approval before an employee works overtime. Even so, the employer must pay for overtime it knew about or should have known was being worked.
              </p>
              <p>
                The employer may address a violation of its scheduling or approval policy separately, but it cannot accept the work and then refuse to pay for the time.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="special-situations-heading">
            <h2 id="special-situations-heading" className="text-2xl font-bold text-[#071b35]">
              Common situations that can change the calculation
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                California overtime rules contain exemptions and special rules. The standard calculation may not apply in the usual way to every worker.
              </p>
              <p>Examples can include:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Employees who legally qualify as executive, administrative or professional employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Certain workers covered by a valid alternative workweek schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Some commissioned employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Certain drivers and transportation workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Employees covered by qualifying collective bargaining agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                  <span>Workers in industries with special wage-order rules</span>
                </li>
              </ul>
              <p>
                Review the Labor Commissioner’s official pages covering {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  exemptions
                </a>{" "}
                and {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/FAQ_OvertimeExceptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  exceptions to the general overtime law
                </a>{" "}
                for more detail.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-7" aria-labelledby="calculator-cta-heading">
            <h2 id="calculator-cta-heading" className="text-2xl font-bold text-[#071b35]">
              Try the California overtime calculator
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Knowing the rules is useful, but most people want to see what the hours may mean for their paycheck.</p>
              <p>
                Use the California overtime calculator to enter an hourly rate and hours worked. The calculator can provide an estimate based on the information entered.
              </p>
            </div>
            <Link
              href={calculatorPath}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Open the California Overtime Calculator
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The calculator provides a general estimate. Payroll results can differ when bonuses, commissions, multiple pay rates, alternative schedules or special industry rules apply.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-[#071b35]">
              California overtime FAQ
            </h2>
            <div className="mt-5 divide-y divide-slate-200">
              {faqs.map((faq) => (
                <section key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">{faq.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-2xl font-bold text-[#071b35]">
              Official California sources
            </h2>
            <ul className="mt-5 space-y-3">
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold leading-6 text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-lg border border-slate-300 bg-slate-100 p-5 sm:p-7" aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="text-lg font-bold text-[#071b35]">
              General information only
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              This page and the calculator provide general information and estimates. They are not legal, payroll or tax advice. California overtime rules include exemptions and special situations that may change the result. For an official determination, consult the California Labor Commissioner or a qualified professional.
            </p>
          </aside>
        </article>

        <ShareCalculator />
      </main>

      <footer className="border-t border-slate-300 bg-[#f4f7fa]">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/privacy" className="text-[#071b35] hover:text-blue-700">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-[#071b35] hover:text-blue-700">Disclaimer</Link>
            <Link href="/contact" className="text-[#071b35] hover:text-blue-700">Contact</Link>
          </nav>
          <p className="mt-6 text-sm text-slate-500">
            © {currentYear} StateOvertime.com - Free overtime calculator for US workers.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            This tool provides estimates only. Consult your HR department or state labor board for official calculations.
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

const calculatorPath = "/overtime-calculator/california";

const faqs = [
  {
    question: "Does California overtime start after eight hours?",
    answer:
      "For most nonexempt employees, time-and-a-half generally begins after eight hours worked in one workday. Weekly overtime may also apply after 40 hours worked in a workweek.",
  },
  {
    question: "When does double time begin in California?",
    answer:
      "Double time generally applies after 12 hours worked in one workday. It may also apply after eight hours worked on the seventh consecutive day of work within a workweek.",
  },
  {
    question: "Do I receive overtime just for working on Sunday?",
    answer:
      "Not automatically. California does not generally require overtime simply because work takes place on a Saturday, Sunday or holiday. Overtime depends on hours worked, consecutive days and any applicable employment agreement or employer policy.",
  },
  {
    question: "Can a salaried employee receive overtime?",
    answer:
      "Yes. A salary alone does not make an employee exempt. The employee must meet the applicable legal requirements for an overtime exemption.",
  },
  {
    question: "Is overtime based on hours worked or hours paid?",
    answer:
      "Overtime is generally based on hours actually worked. Paid vacation, sick leave or holiday time usually does not count as hours worked when determining whether the employee crossed an overtime threshold.",
  },
  {
    question: "Can my employer refuse to pay overtime that was not approved?",
    answer:
      "An employer may enforce a policy requiring approval before overtime is worked. However, overtime generally must still be paid when the employer knew or should have known that the work was performed.",
  },
];

const officialSources = [
  {
    label: "California Labor Commissioner — Overtime FAQ",
    href: "https://www.dir.ca.gov/dlse/faq_overtime.htm",
  },
  {
    label: "California Labor Commissioner — Overtime exemptions",
    href: "https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm",
  },
  {
    label: "California Labor Commissioner — Exceptions to the general overtime law",
    href: "https://www.dir.ca.gov/dlse/FAQ_OvertimeExceptions.htm",
  },
  {
    label: "California Labor Code Section 510",
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=510.",
  },
  {
    label: "California Labor Code Section 500 — Workday and workweek definitions",
    href: "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=LAB&sectionNum=500.",
  },
];

export const metadata: Metadata = {
  title: "California Overtime Laws: Daily Overtime and Double Time",
  description:
    "Learn when California workers may earn daily overtime, weekly overtime and double time, with clear examples and a link to the California overtime calculator.",
  alternates: {
    canonical: "https://stateovertime.com/california-overtime-laws",
  },
};

function ExampleBox({
  children,
  labelledBy,
}: {
  children: React.ReactNode;
  labelledBy: string;
}) {
  return (
    <aside
      aria-labelledby={labelledBy}
      className="mt-5 rounded-md border-l-4 border-blue-700 bg-blue-50 p-5 sm:p-6"
    >
      <h3 id={labelledBy} className="font-bold text-blue-950">
        Example
      </h3>
      <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
        {children}
      </dl>
    </aside>
  );
}

function ExampleRow({ label, value, total = false }: { label: string; value: string; total?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-0.5 border-b border-blue-100 pb-2 last:border-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6 ${
        total ? "font-bold text-blue-950" : ""
      }`}
    >
      <dt>{label}</dt>
      <dd className="sm:text-right">{value}</dd>
    </div>
  );
}

export default function CaliforniaOvertimeLawsPage() {
  const currentYear = new Date().getFullYear();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f4f7fa] text-slate-950">
      <header className="bg-[#071b35] text-white shadow-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight sm:text-2xl">
              STATE OVERTIME
            </Link>
            <span className="hidden border-l border-white/20 pl-5 text-sm text-slate-200 lg:block">
              Overtime pay calculator &amp; state laws
            </span>
          </div>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold sm:gap-x-8">
            <Link href="/#calculator" className="pb-2 text-slate-200 transition-colors hover:text-white">
              Calculator
            </Link>
            <Link href="/state-laws" className="border-b-2 border-blue-400 pb-2 text-white">
              State Laws
            </Link>
            <Link href="/about" className="pb-2 text-slate-200 transition-colors hover:text-white">
              About
            </Link>
            <Link href="/contact" className="pb-2 text-slate-200 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-600">
          <Link href="/state-laws" className="font-semibold text-blue-700 hover:text-blue-900">
            State overtime laws
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span aria-current="page">California</span>
        </nav>

        <section aria-labelledby="california-overtime-heading">
          <h1 id="california-overtime-heading" className="text-3xl font-bold tracking-tight text-[#071b35] sm:text-4xl">
            California Overtime Laws
          </h1>
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-slate-700">
            <p>
              California overtime can work differently from overtime in many other states. For most nonexempt employees, overtime may be based on the number of hours worked in one day as well as the total hours worked during the week.
            </p>
            <p>
              This guide explains the general rules and shows how time-and-a-half and double time may apply. When you are ready to estimate your pay, use the {" "}
              <Link href={calculatorPath} className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900">
                California overtime calculator
              </Link>
              .
            </p>
          </div>
          <Link
            href={calculatorPath}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate California Overtime Pay
          </Link>
        </section>

        <article className="mt-8 space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="general-rules-heading">
            <h2 id="general-rules-heading" className="text-2xl font-bold text-[#071b35]">
              How California overtime generally works
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                Most nonexempt employees in California may earn overtime in more than one way. Working more than eight hours in a single workday can create overtime, even when the employee works fewer than 40 hours for the entire week.
              </p>
              <p>
                Weekly overtime may also apply once an employee works more than 40 hours in a workweek.
              </p>
              <div className="overflow-hidden rounded-md border border-slate-200" aria-label="General California overtime rates">
                <dl className="divide-y divide-slate-200">
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Regular pay</dt>
                    <dd>The first eight hours worked in a workday</dd>
                  </div>
                  <div className="grid gap-1 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Time-and-a-half</dt>
                    <dd>Hours worked beyond eight and through 12 in a workday</dd>
                  </div>
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-bold text-slate-900">Double time</dt>
                    <dd>Hours worked beyond 12 in a workday</dd>
                  </div>
                </dl>
              </div>
              <p>
                These are the general rules. Some occupations, employment arrangements and properly adopted alternative workweek schedules follow different rules.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="daily-overtime-heading">
            <h2 id="daily-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Daily overtime after eight hours
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                California generally requires time-and-a-half pay when a nonexempt employee works more than eight hours in one workday.
              </p>
              <p>For example, suppose an employee earns $20 per hour and works 10 hours on Monday.</p>
              <p>
                The first eight hours are paid at the regular $20 hourly rate. The remaining two hours are generally paid at $30 per hour, which is one and one-half times the regular rate.
              </p>
            </div>
            <ExampleBox labelledBy="ten-hour-example-heading">
              <ExampleRow label="Regular hourly rate" value="$20" />
              <ExampleRow label="Hours worked" value="10" />
              <ExampleRow label="Regular pay" value="8 × $20 = $160" />
              <ExampleRow label="Overtime pay" value="2 × $30 = $60" />
              <ExampleRow label="Estimated total" value="$220" total />
            </ExampleBox>
            <p className="mt-4 text-base leading-7 text-slate-700">
              The actual regular rate can sometimes include more than an employee’s basic hourly wage, such as certain bonuses, commissions or shift differentials.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="double-time-heading">
            <h2 id="double-time-heading" className="text-2xl font-bold text-[#071b35]">
              Double time after 12 hours
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Double time generally begins after an employee works more than 12 hours in one workday.</p>
              <p>An employee earning $20 per hour would have a double-time rate of $40 per hour.</p>
            </div>
            <ExampleBox labelledBy="fourteen-hour-example-heading">
              <ExampleRow label="Regular hourly rate" value="$20" />
              <ExampleRow label="Hours worked" value="14" />
              <ExampleRow label="Regular pay" value="8 × $20 = $160" />
              <ExampleRow label="Time-and-a-half pay" value="4 × $30 = $120" />
              <ExampleRow label="Double-time pay" value="2 × $40 = $80" />
              <ExampleRow label="Estimated total" value="$360" total />
            </ExampleBox>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="weekly-overtime-heading">
            <h2 id="weekly-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Overtime after 40 hours in a workweek
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>California also generally requires time-and-a-half pay for hours worked beyond 40 in a workweek.</p>
              <p>
                Daily and weekly overtime rules are considered together. The same hours are not simply paid twice because they qualify under both a daily and weekly rule.
              </p>
              <p>
                For example, an employee could work six hours a day for seven days. That adds up to 42 hours. Even though the employee did not exceed eight hours on any single day, overtime rules may still apply because of the weekly total and the seventh-day rule.
              </p>
              <p>
                To see how a schedule breaks into regular, overtime and double-time hours, enter the workweek in the {" "}
                <Link href={calculatorPath} className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900">
                  California pay estimator
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="seventh-day-heading">
            <h2 id="seventh-day-heading" className="text-2xl font-bold text-[#071b35]">
              Working seven days in a row
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>California has an additional rule for the seventh consecutive day worked within an employer’s workweek.</p>
              <p>For most nonexempt employees:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-blue-700">
                <li>The first eight hours worked on the seventh consecutive day are generally paid at time-and-a-half.</li>
                <li>Hours worked beyond eight on that seventh day are generally paid at double time.</li>
              </ul>
              <p>
                The rule concerns the seventh consecutive day within the same workweek, not simply any seven calendar days chosen by the employee.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="salary-heading">
            <h2 id="salary-heading" className="text-2xl font-bold text-[#071b35]">
              Does a salary prevent overtime?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Being paid a salary does not automatically mean an employee is exempt from overtime.</p>
              <p>
                Exempt status normally depends on several legal requirements, including the employee’s actual duties and how the employee is paid. A job title by itself does not settle the question.
              </p>
              <p>
                Someone called a “manager,” for example, may still be entitled to overtime if the position does not satisfy the applicable exemption requirements. The Labor Commissioner maintains current {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  overtime exemption information
                </a>
                .
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="workday-heading">
            <h2 id="workday-heading" className="text-2xl font-bold text-[#071b35]">
              What counts as a workday?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>A workday is generally a fixed 24-hour period established by the employer. It does not always begin at midnight.</p>
              <p>
                This matters for employees who work overnight. A shift that crosses midnight is not automatically split into two separate workdays for overtime purposes. The employer’s established workday determines where the hours fall.
              </p>
              <aside className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 sm:text-base">
                An employer cannot change the workday from week to week simply to avoid paying overtime.
              </aside>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="unauthorized-overtime-heading">
            <h2 id="unauthorized-overtime-heading" className="text-2xl font-bold text-[#071b35]">
              Does unauthorized overtime still have to be paid?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                An employer may have a rule requiring approval before an employee works overtime. However, California generally requires payment for overtime the employer knew about or should have known was being worked.
              </p>
              <p>
                The employer may address a violation of its scheduling or approval policy separately, but it generally cannot accept the work and then refuse to pay for the time.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="special-situations-heading">
            <h2 id="special-situations-heading" className="text-2xl font-bold text-[#071b35]">
              Common situations that can change the calculation
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                California overtime rules contain exemptions and special rules. The standard calculation may not apply in the usual way to every worker.
              </p>
              <p>Examples can include:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-blue-700">
                <li>Employees who legally qualify as executive, administrative or professional employees</li>
                <li>Certain workers covered by a valid alternative workweek schedule</li>
                <li>Some commissioned employees</li>
                <li>Certain drivers and transportation workers</li>
                <li>Employees covered by qualifying collective bargaining agreements</li>
                <li>Workers in industries with special wage-order rules</li>
              </ul>
              <p>
                Review the Labor Commissioner’s official pages covering {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/faq_overtimeexemptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  exemptions
                </a>{" "}
                and {" "}
                <a
                  href="https://www.dir.ca.gov/dlse/FAQ_OvertimeExceptions.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                >
                  exceptions to the general overtime law
                </a>{" "}
                for more detail.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-7" aria-labelledby="calculator-cta-heading">
            <h2 id="calculator-cta-heading" className="text-2xl font-bold text-[#071b35]">
              Try the California overtime calculator
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Knowing the rules is useful, but most people want to see what the hours may mean for their paycheck.</p>
              <p>
                Use the California overtime calculator to enter an hourly rate and hours worked. The calculator can provide an estimate based on the information entered.
              </p>
            </div>
            <Link
              href={calculatorPath}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Open the California Overtime Calculator
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              The calculator provides a general estimate. Payroll results can differ when bonuses, commissions, multiple pay rates, alternative schedules or special industry rules apply.
            </p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-[#071b35]">
              California overtime FAQ
            </h2>
            <div className="mt-5 divide-y divide-slate-200">
              {faqs.map((faq) => (
                <section key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-700">{faq.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-2xl font-bold text-[#071b35]">
              Official California sources
            </h2>
            <ul className="mt-5 space-y-3">
              {officialSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold leading-6 text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
                  >
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <aside className="rounded-lg border border-slate-300 bg-slate-100 p-5 sm:p-7" aria-labelledby="disclaimer-heading">
            <h2 id="disclaimer-heading" className="text-lg font-bold text-[#071b35]">
              General information only
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              This page and the calculator provide general information and estimates. They are not legal, payroll or tax advice. California overtime rules include exemptions and special situations that may change the result. For an official determination, consult the California Labor Commissioner or a qualified professional.
            </p>
          </aside>
        </article>
      </main>

      <footer className="border-t border-slate-300 bg-[#f4f7fa]">
        <div className="mx-auto max-w-4xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
            <Link href="/privacy" className="text-[#071b35] hover:text-blue-700">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-[#071b35] hover:text-blue-700">Disclaimer</Link>
            <Link href="/contact" className="text-[#071b35] hover:text-blue-700">Contact</Link>
          </nav>
          <p className="mt-6 text-sm text-slate-500">
            © {currentYear} StateOvertime.com — Free overtime calculator for US workers.
          </p>
          <p className="mt-2 text-xs text-slate-400">
            This tool provides estimates only. Consult your HR department or state labor board for official calculations.
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
