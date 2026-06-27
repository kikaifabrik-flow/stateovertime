import { STATES_DATA } from "../../../data/states";
import Link from "next/link";
import Calculator from "../../../components/Calculator";
import StateFAQ from "../../../components/StateFAQ";

export function generateStaticParams() {
  return STATES_DATA.map((state) => ({
    state: state.slug,
  }));
}

export function generateMetadata({ params }: { params: { state: string } }) {
  const state = STATES_DATA.find((s) => s.slug === params.state);
  if (!state) return {};
  return {
    title: `${state.name} Overtime Calculator 2026 | Free OT Pay Calc`,
    description: `Free ${state.name} overtime calculator. Calculate your OT pay with ${state.name}-specific rules. ${state.dailyOT ? `Daily overtime at ${state.dailyOTThreshold} hours.` : "Federal FLSA weekly overtime."}`,
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const state = STATES_DATA.find((s) => s.slug === params.state);
  if (!state) return <div>State not found</div>;

  const neighboringStates = STATES_DATA.filter((s) => s.code !== state.code).slice(0, 5);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-slate-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{state.name} Overtime Calculator</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {state.name} Overtime Calculator
          </h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Calculate your overtime pay in {state.name} with state-specific rules and federal FLSA compliance.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <Calculator defaultState={state.code} />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {state.name} Overtime Laws
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">{state.intro}</p>
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm text-slate-600">
              <strong>Legal Reference:</strong> {state.lawReference}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {state.name} Overtime Rules Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Weekly Overtime</h3>
              <p className="text-slate-700 text-sm">
                Hours over 40/week = 1.5x pay (Federal FLSA)
              </p>
            </div>
            <div className={`rounded-lg p-4 ${state.dailyOT ? "bg-green-50" : "bg-slate-50"}`}>
              <h3 className="font-semibold text-slate-900 mb-2">Daily Overtime</h3>
              <p className="text-slate-700 text-sm">
                {state.dailyOT
                  ? `Hours over ${state.dailyOTThreshold}/day = 1.5x pay`
                  : "No daily overtime requirement"}
              </p>
            </div>
            <div className={`rounded-lg p-4 ${state.doubleOT ? "bg-purple-50" : "bg-slate-50"}`}>
              <h3 className="font-semibold text-slate-900 mb-2">Double Overtime</h3>
              <p className="text-slate-700 text-sm">
                {state.doubleOT
                  ? `Hours over ${state.doubleOTThreshold}/day = 2x pay`
                  : "No double overtime requirement"}
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Overtime Rate</h3>
              <p className="text-slate-700 text-sm">1.5x regular rate (2x for double OT)</p>
            </div>
          </div>
        </div>

        <StateFAQ faqs={state.faqs} stateName={state.name} />

        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Other State Overtime Calculators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {neighboringStates.map((s) => (
              <Link
                key={s.code}
                href={`/overtime-calculator/${s.slug}`}
                className="block bg-slate-50 hover:bg-slate-100 rounded-lg p-3 text-center transition-colors"
              >
                <span className="text-blue-600 font-medium">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Link href="/" className="text-blue-600 hover:underline font-semibold">
            &larr; Back to All States
          </Link>
        </div>
      </section>
    </main>
  );
}
