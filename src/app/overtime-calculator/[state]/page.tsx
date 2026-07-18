import { STATES_DATA } from "../../../data/states";
import { getStateOvertimeRule } from "../../../data/overtimeRules";
import Link from "next/link";
import { notFound } from "next/navigation";
import Calculator from "../../../components/Calculator";
import ShareCalculator from "../../../components/ShareCalculator";
import StateFAQ from "../../../components/StateFAQ";

export function generateStaticParams() {
  return STATES_DATA.map((state) => ({
    state: state.slug,
  }));
}

export function generateMetadata({ params }: { params: { state: string } }) {
  const state = STATES_DATA.find((s) => s.slug === params.state);

  if (!state) notFound();

  const currentYear = new Date().getFullYear();
  const rule = getStateOvertimeRule(state.code);

  return {
    title: `${state.name} Overtime Calculator ${currentYear} | Free OT Pay Calc`,
    description: `Free ${state.name} overtime calculator. Calculate your OT pay with ${state.name}-specific rules. ${rule.metadataSummary}`,
    alternates: {
      canonical: `/overtime-calculator/${state.slug}`,
    },
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const state = STATES_DATA.find((s) => s.slug === params.state);

  if (!state) notFound();

  const rule = getStateOvertimeRule(state.code);
  const currentYear = new Date().getFullYear();

  const neighboringStates = STATES_DATA.filter(
    (s) => s.code !== state.code,
  ).slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-slate-400 mb-2">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{state.name} Overtime Calculator</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {state.name} Overtime Calculator
          </h1>

          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Calculate your overtime pay in {state.name} with state-specific
            rules and federal FLSA compliance.
          </p>
        </div>
      </header>

      <main>
        <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <Calculator defaultState={state.code} />
          </div>

          <ShareCalculator />

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {state.code === "CA" ? (
              <>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  New California Section
                </span>

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How California Overtime Pay Works
                </h2>

                <div className="space-y-5 text-slate-700 leading-relaxed">
                  <p>
                    California looks at both the hours worked in one day and the
                    total hours worked during the week. That is different from
                    most states. In many places overtime starts only after 40
                    hours in one workweek.
                  </p>

                  <p>
                    These rules usually apply to hourly workers who are
                    classified as nonexempt.
                  </p>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Overtime After 8 Hours in One Day
                    </h3>
                    <p>
                      The first 8 hours are paid at the regular hourly rate.
                      Hours over 8 through 12 are normally paid at one and
                      one-half times the regular rate. Time worked beyond 12
                      hours is normally paid at twice the regular rate.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      California Overtime Example
                    </h3>
                    <div className="bg-blue-50 border-l-4 border-blue-700 rounded-md p-5 space-y-2">
                      <p className="font-semibold text-blue-900">
                        An employee earns $20 per hour and works 10 hours in one
                        day.
                      </p>
                      <p>8 regular hours × $20 = $160</p>
                      <p>2 overtime hours × $30 = $60</p>
                      <p className="font-semibold text-blue-900">
                        Total pay for the day: $220
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Overtime After 40 Hours in a Week
                    </h3>
                    <p>
                      California also requires overtime after more than 40 hours
                      are worked in one workweek. The same hour is not simply
                      counted twice. An hour already paid as daily overtime does
                      not become a second overtime hour just because the weekly
                      total passed 40.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Working Seven Days in a Row
                    </h3>
                    <p>
                      A separate rule may apply when someone works seven
                      consecutive days in the same workweek. The first 8 hours
                      on the seventh day are generally paid at one and one-half
                      times the regular rate. Time beyond 8 hours on that day is
                      generally paid at twice the regular rate.
                    </p>
                    <p className="mt-3">
                      The seven days must fall within the employer’s established
                      workweek. Seven consecutive calendar days that cross two
                      workweeks may be treated differently.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Your Regular Rate May Be Higher Than Your Hourly Wage
                    </h3>
                    <p>
                      Overtime is based on the regular rate of pay. In some
                      cases that rate includes more than the normal hourly wage.
                      Certain bonuses or commissions may need to be included.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      What This Calculator Covers
                    </h3>
                    <p>
                      This calculator estimates pay for a standard hourly
                      schedule. It calculates daily overtime after 8 hours and
                      double time after 12 hours.
                    </p>
                    <p className="mt-3">
                      When all seven days contain hours, the calculator treats
                      Monday through Sunday as one workweek and applies the
                      seventh-day rule. It does not calculate bonuses, commissions, union
                      contract terms, exemptions, or special industry rules.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {state.name} Overtime Laws
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {state.intro}
                </p>
              </>
            )}

            <div className="bg-slate-50 rounded-md p-4 mt-6">
              <p className="text-sm text-slate-600">
                <strong>Legal Reference:</strong> {state.lawReference}
              </p>
            </div>

            {state.code === "CA" && (
              <p className="text-sm text-slate-500 mt-4">
                This page provides general information and is not legal advice.
              </p>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {state.name} Overtime Rules Summary
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-md p-4">
                <h3 className="font-semibold text-blue-900 mb-2">
                  Weekly Overtime
                </h3>
                <p className="text-slate-700 text-sm">
                  Hours over 40/week = 1.5x pay (Federal FLSA)
                </p>
              </div>

              <div
                className={`rounded-md p-4 ${
                  rule.dailyOvertimeThreshold !== undefined ? "bg-green-50" : "bg-slate-50"
                }`}
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  Daily Overtime
                </h3>
                <p className="text-slate-700 text-sm">
                  {rule.dailySummary}
                </p>
              </div>

              <div
                className={`rounded-md p-4 ${
                  rule.doubleOvertimeThreshold !== undefined ? "bg-purple-50" : "bg-slate-50"
                }`}
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  Double Overtime
                </h3>
                <p className="text-slate-700 text-sm">
                  {rule.doubleSummary}
                </p>
              </div>

              <div className="bg-slate-50 rounded-md p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Overtime Rate
                </h3>
                <p className="text-slate-700 text-sm">
                  1.5x regular rate (2x for double OT)
                </p>
              </div>
            </div>
          </div>

          <StateFAQ faqs={state.faqs} stateName={state.name} />

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Other State Overtime Calculators
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {neighboringStates.map((s) => (
                <Link
                  key={s.code}
                  href={`/overtime-calculator/${s.slug}`}
                  className="block bg-slate-50 hover:bg-slate-100 rounded-md p-3 text-center transition-colors"
                >
                  <span className="text-blue-600 font-medium">{s.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-blue-200 bg-white px-5 py-3 text-blue-700 shadow-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900 font-semibold transition-colors"
            >
              &larr; Return to the main calculator
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm mb-4">
            <Link href="/about" className="text-slate-600 hover:text-blue-900">
              About
            </Link>
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-blue-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-slate-600 hover:text-blue-900"
            >
              Disclaimer
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-blue-900"
            >
              Contact
            </Link>
          </nav>

          <p className="text-sm text-slate-500">
            © {currentYear} StateOvertime.com — Free overtime calculator for US workers.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            This tool provides estimates only. Consult your HR department or
            state labor board for official calculations.
          </p>
        </div>
      </footer>
    </div>
  );
}
