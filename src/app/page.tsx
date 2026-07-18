import Link from "next/link";
import Calculator from "../components/Calculator";
import ShareCalculator from "../components/ShareCalculator";

const STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" },
  { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" },
  { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" },
  { code: "DE", name: "Delaware" },
  { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" },
  { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" },
  { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" },
  { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" },
  { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" },
  { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" },
  { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" },
  { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" },
  { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" },
  { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" },
  { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" },
  { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" },
  { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" },
  { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" },
  { code: "WY", name: "Wyoming" },
];

const iconClass = "h-10 w-10 text-blue-700";

function FederalRuleIcon() {
  return (
    <svg aria-hidden="true" className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h36L24 7 6 18Z" />
      <path d="M10 21v17M18 21v17M30 21v17M38 21v17M6 41h36" />
    </svg>
  );
}

function StateRulesIcon() {
  return (
    <svg aria-hidden="true" className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 7v34M17 10h14M11 16h26" />
      <path d="m11 16-6 13h12L11 16ZM37 16l-6 13h12l-6-13Z" />
      <path d="M6 29c0 4 10 4 10 0M32 29c0 4 10 4 10 0M17 41h14" />
    </svg>
  );
}

function ImportantIcon() {
  return (
    <svg aria-hidden="true" className={iconClass} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5h17l8 8v30H12V5Z" />
      <path d="M29 5v9h8M18 22h13M18 28h13M18 34h8" />
    </svg>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

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
            <a href="#calculator" className="border-b-2 border-blue-400 pb-2 text-white">
              Calculator
            </a>
            <Link href="/state-laws" className="pb-2 text-slate-200 transition-colors hover:text-white">
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

      <main className="mx-auto max-w-4xl px-4 py-8">
        <section aria-labelledby="homepage-heading">
          <h1 id="homepage-heading" className="text-2xl font-bold tracking-tight text-[#071b35] sm:text-3xl">
            Calculate your overtime pay
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Enter your hourly rate, select your state, and add the hours you worked each day.
          </p>
        </section>

        <div id="calculator" className="mt-7 scroll-mt-6 bg-white rounded-lg shadow-md p-6 md:p-8">
          <Calculator defaultState="" />
        </div>

        <section className="mt-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="overtime-explanation-heading">
          <h2 id="overtime-explanation-heading" className="text-xl font-bold text-[#071b35]">
            How overtime is calculated
          </h2>

          <div className="mt-6 grid gap-7 md:grid-cols-3 md:gap-9">
            <article className="flex gap-4">
              <div className="shrink-0"><FederalRuleIcon /></div>
              <div>
                <h3 className="font-bold text-slate-900">Federal rule</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Under the Fair Labor Standards Act (FLSA), hours over 40 in a workweek are generally paid at 1.5 times your regular rate.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="shrink-0"><StateRulesIcon /></div>
              <div>
                <h3 className="font-bold text-slate-900">State exceptions</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Some states require daily overtime or use higher rates. California, Alaska, Colorado, and Nevada have additional requirements.
                </p>
              </div>
            </article>

            <article className="flex gap-4">
              <div className="shrink-0"><ImportantIcon /></div>
              <div>
                <h3 className="font-bold text-slate-900">Important</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  This calculator provides an estimate only. Always refer to your state&apos;s laws and your employer&apos;s policy.
                </p>
              </div>
            </article>
          </div>

          <details className="group mt-6 border-t border-slate-200 pt-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-blue-700 [&::-webkit-details-marker]:hidden">
              <span>View detailed overtime rules</span>
              <svg aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <p><strong>Federal FLSA (all states):</strong> Hours worked over 40 in a workweek must be paid at 1.5x your regular rate.</p>
              <p><strong>California:</strong> Daily overtime applies — over 8 hours/day = 1.5x, over 12 hours/day = 2x.</p>
              <p><strong>Alaska:</strong> Daily overtime generally applies after 8 hours/day at 1.5x.</p>
              <p><strong>Colorado:</strong> Overtime generally applies after 12 hours/day or 12 consecutive hours at 1.5x.</p>
              <p><strong>Nevada:</strong> Daily overtime generally applies after 8 hours/day when the hourly rate is below $18; weekly overtime still applies after 40 hours.</p>
              <p><strong>Other state rules:</strong> Some states have separate seventh-day, industry, or prevailing-wage rules. Review the selected state page for limitations.</p>
            </div>
          </details>
        </section>

        <ShareCalculator />

        <section id="state-laws" className="mt-5 scroll-mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="state-laws-heading">
          <h2 id="state-laws-heading" className="text-xl font-bold text-[#071b35]">
            Browse overtime laws and calculators by state
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {STATES.map((stateItem) => {
              const slug = stateItem.name.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link
                  key={stateItem.code}
                  href={`/overtime-calculator/${slug}`}
                  className="rounded-md border border-slate-300 px-3 py-2.5 text-sm font-medium text-[#071b35] transition-colors hover:border-blue-500 hover:bg-blue-50 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {stateItem.code === "DC" ? "DC" : stateItem.name}
                </Link>
              );
            })}
          </div>
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
          <p className="mt-2 text-xs text-slate-400">
            This tool provides estimates only. Consult your HR department or state labor board for official calculations.
          </p>
        </div>
      </footer>
    </div>
  );
}
