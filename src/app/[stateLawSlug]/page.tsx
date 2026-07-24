import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareCalculator from "../../components/ShareCalculator";
import { SiteHeader } from "../../components/SiteHeader";
import { STATE_LAW_PROFILES, getStateLawProfile } from "../../data/stateLawProfiles";

export function generateStaticParams() {
  return STATE_LAW_PROFILES.map((profile) => ({
    stateLawSlug: `${profile.slug}-overtime-laws`,
  }));
}

export function generateMetadata({ params }: { params: { stateLawSlug: string } }): Metadata {
  const profile = getStateLawProfile(params.stateLawSlug);
  if (!profile) notFound();

  return {
    title: `${profile.name} Overtime Laws: Rules, Examples and Calculator`,
    description: `Understand ${profile.name} overtime laws, weekly and daily rules, exemptions, pay examples and official sources. Use the free ${profile.name} overtime calculator.`,
    alternates: {
      canonical: `https://stateovertime.com/${profile.slug}-overtime-laws`,
    },
  };
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

export default function StateOvertimeLawsPage({ params }: { params: { stateLawSlug: string } }) {
  const profile = getStateLawProfile(params.stateLawSlug);
  if (!profile) notFound();

  const currentYear = new Date().getFullYear();
  const calculatorPath = `/overtime-calculator/${profile.slug}`;
  const canonicalUrl = `https://stateovertime.com/${profile.slug}-overtime-laws`;
  const hasDailyOvertime = !profile.dailyRule.startsWith("No general");

  const faqs = [
    {
      question: `When does overtime start in ${profile.name}?`,
      answer: `${profile.weeklyRule}. ${profile.dailyRule}. Coverage, exemptions and special-industry rules can change the result.`,
    },
    {
      question: `Does ${profile.name} require daily overtime?`,
      answer: hasDailyOvertime
        ? `Yes, in covered situations. ${profile.dailyRule}. The weekly rule and any listed exception must also be considered.`
        : `${profile.dailyRule}. Overtime is generally determined from the applicable weekly threshold, unless a special industry rule, public-works rule, contract or employer policy provides more.`
    },
    {
      question: `What is the overtime rate in ${profile.name}?`,
      answer: "The usual overtime rate is one and one-half times the employee's regular rate of pay. The regular rate can include certain bonuses, commissions and other compensation, so it is not always the same as the stated hourly wage.",
    },
    {
      question: `Can a salaried employee receive overtime in ${profile.name}?`,
      answer: "Yes. A salary or job title alone does not make an employee exempt. The worker must satisfy the applicable duties and pay-basis requirements for a recognized exemption.",
    },
    {
      question: `Does unauthorized overtime have to be paid in ${profile.name}?`,
      answer: "Generally, covered work must be paid when the employer required it, allowed it, or knew or should have known it was being performed. An employer may enforce a scheduling policy separately, but cannot simply keep the benefit of compensable work without paying for it.",
    },
    ...profile.faqAdditions,
  ];

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
      <SiteHeader activePage="state-overtime-laws" activeStateSlug={profile.slug} />

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
          <span aria-current="page">{profile.name}</span>
        </nav>

        <section aria-labelledby="state-overtime-heading">
          <h1 id="state-overtime-heading" className="text-3xl font-bold tracking-tight text-[#071b35] sm:text-4xl">
            {profile.name} Overtime Laws
          </h1>
          <div className="mt-4 max-w-3xl space-y-3 text-base leading-7 text-slate-700">
            <p>{profile.intro}</p>
            <p>
              This guide explains the general rule, common exceptions and a simple pay example. It is designed for quick planning, not as a substitute for an official wage determination.
            </p>
          </div>
          <Link
            href={calculatorPath}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate {profile.name} Overtime Pay
          </Link>
        </section>

        <article className="mt-8 space-y-6">
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="general-rules-heading">
            <h2 id="general-rules-heading" className="text-2xl font-bold text-[#071b35]">
              How {profile.name} overtime works
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>{profile.ruleSummary} is the practical starting point for most covered, nonexempt employees.</p>
              <p>
                Overtime is calculated by workweek, not by pay period. An employer cannot average a long week and a short week together to avoid overtime that was earned in the long week.
              </p>
              <div className="overflow-hidden rounded-md border border-slate-200" aria-label={`General ${profile.name} overtime rules`}>
                <dl className="divide-y divide-slate-200">
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-bold text-slate-900">Weekly overtime</dt>
                    <dd>{profile.weeklyRule}</dd>
                  </div>
                  <div className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-bold text-slate-900">Daily overtime</dt>
                    <dd>{profile.dailyRule}</dd>
                  </div>
                  <div className="grid gap-1 bg-slate-50 px-4 py-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-bold text-slate-900">Double time</dt>
                    <dd>{profile.doubleTimeRule}</dd>
                  </div>
                  <div className="grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="font-bold text-slate-900">Usual premium rate</dt>
                    <dd>1.5 times the regular rate of pay</dd>
                  </div>
                </dl>
              </div>
              <p>{profile.coverageNote}</p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="example-heading">
            <h2 id="example-heading" className="text-2xl font-bold text-[#071b35]">
              A simple {profile.name} overtime example
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">{profile.example.description}</p>
            <aside aria-label={`${profile.name} overtime calculation example`} className="mt-5 rounded-md border-l-4 border-blue-700 bg-blue-50 p-5 sm:p-6">
              <h3 className="font-bold text-blue-950">Example</h3>
              <dl className="mt-3 space-y-2 text-sm leading-6 text-slate-700 sm:text-base">
                {profile.example.rows.map((row) => (
                  <ExampleRow key={row.label} {...row} />
                ))}
              </dl>
            </aside>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">{profile.example.note}</p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="situations-heading">
            <h2 id="situations-heading" className="text-2xl font-bold text-[#071b35]">
              {profile.name} situations and exceptions to check
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>The general rule does not fit every worker or workplace. These points are especially important in {profile.name}:</p>
              <ul className="space-y-3">
                {profile.specialSituations.map((situation) => (
                  <li key={situation} className="flex items-start gap-2">
                    <span aria-hidden="true" className="font-semibold text-blue-700">-</span>
                    <span>{situation}</span>
                  </li>
                ))}
              </ul>
              <aside className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 sm:text-base">
                If a state rule and the federal FLSA both apply, the employer generally must meet the standard that gives the employee the greater protection.
              </aside>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="hours-worked-heading">
            <h2 id="hours-worked-heading" className="text-2xl font-bold text-[#071b35]">
              What counts as hours worked?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                Under the FLSA, hours worked generally include time the employer requires or permits an employee to spend working. That can include required preparation, certain training or travel, and work performed before clocking in or after clocking out.
              </p>
              <p>
                Paid vacation, holidays and sick leave usually are not hours actually worked for the federal 40-hour calculation. A contract, policy or state-specific rule can be more generous.
              </p>
              <p>
                The workweek is a fixed, recurring period of 168 hours. It does not have to run Monday through Sunday, but it cannot be changed from week to week simply to avoid overtime.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="salary-heading">
            <h2 id="salary-heading" className="text-2xl font-bold text-[#071b35]">
              Salaried and exempt employees in {profile.name}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>Being paid a salary does not automatically remove an employee's right to overtime.</p>
              <p>
                Common executive, administrative and professional exemptions depend on the employee's real job duties and the applicable pay-basis requirements. A title such as "manager" does not settle the question.
              </p>
              <p>
                State exemption tests can differ from federal tests. Employers should apply every law that covers the work rather than relying only on payroll method or title.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="unauthorized-heading">
            <h2 id="unauthorized-heading" className="text-2xl font-bold text-[#071b35]">
              Does unauthorized overtime still have to be paid?
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
              <p>
                An employer may require advance approval before overtime is worked. Even so, covered work generally must be paid when the employer required it, allowed it, or knew or should have known it was happening.
              </p>
              <p>
                The employer may address a violation of its scheduling policy separately, but it cannot accept compensable work and then erase the hours from payroll.
              </p>
            </div>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-7" aria-labelledby="calculator-heading">
            <h2 id="calculator-heading" className="text-2xl font-bold text-[#071b35]">
              Estimate your {profile.name} overtime pay
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Enter the hours and regular rate in the matching calculator to estimate straight-time and overtime pay. Review the exceptions above before relying on the result.
            </p>
            <Link
              href={calculatorPath}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Open the {profile.name} Overtime Calculator
            </Link>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-2xl font-bold text-[#071b35]">
              {profile.name} overtime FAQ
            </h2>
            <div className="mt-5 divide-y divide-slate-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-4 first:pt-0 last:pb-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-[#071b35] marker:content-none [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span aria-hidden="true" className="mt-0.5 text-xl font-normal text-blue-700 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-base leading-7 text-slate-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="text-2xl font-bold text-[#071b35]">
              Official {profile.name} and federal sources
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-700">
              Wage rules change. Use these government sources to confirm the current rule and any exemption that may apply.
            </p>
            <ul className="mt-4 space-y-3">
              {profile.officialSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
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
              This page and the calculator provide general information and estimates. They are not legal, payroll or tax advice. {profile.name} and federal overtime laws include exemptions and special situations that may change the result. For an official determination, contact the appropriate labor agency or a qualified professional.
            </p>
          </aside>
        </article>

        <ShareCalculator
          shareUrl={canonicalUrl}
          shareTitle={`${profile.name} Overtime Laws`}
          shareText={`Plain-English guide to ${profile.name} overtime laws, examples and official sources.`}
        />
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
