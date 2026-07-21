import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { STATES_DATA } from "../../data/states";

export const metadata: Metadata = {
  title: "State Overtime Laws and Calculators | StateOvertime.com",
  description:
    "Browse overtime laws and free overtime calculators for every U.S. state and the District of Columbia.",
  alternates: {
    canonical: "/state-laws",
  },
};

export default function StateLawsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#f4f7fa] text-slate-950">
      <SiteHeader activePage="state-laws" />

      <main className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to calculator
        </Link>

        <section aria-labelledby="state-laws-heading">
          <h1 id="state-laws-heading" className="text-2xl font-bold tracking-tight text-[#071b35] sm:text-3xl">
            State overtime laws and calculators
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Choose a state to review its overtime rules, use its calculator, and read answers to common questions.
          </p>
        </section>

        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6" aria-label="States">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {STATES_DATA.map((state) => (
              <Link
                key={state.code}
                href={`/overtime-calculator/${state.slug}`}
                className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-[#071b35] transition-colors hover:border-blue-500 hover:bg-blue-50 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {state.code === "DC" ? "DC" : state.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-5 shadow-sm sm:p-6" aria-labelledby="california-guide-heading">
          <h2 id="california-guide-heading" className="text-xl font-bold text-[#071b35]">
            California overtime guide
          </h2>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-700">
            California uses daily overtime, weekly overtime and double-time rules. Read the guide for a plain-language explanation, worked examples and links to official state sources.
          </p>
          <Link
            href="/california-overtime-laws"
            className="mt-4 inline-flex items-center rounded-md border border-blue-300 bg-white px-4 py-2.5 font-semibold text-blue-700 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Read California overtime laws
          </Link>
        </section>
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
          <p className="mt-2 text-sm text-slate-500">
            This tool provides estimates only. Consult your HR department or state labor board for official calculations.
          </p>
        </div>
      </footer>
    </div>
  );
}
