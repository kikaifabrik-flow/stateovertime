import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata = {
  title: "About Us | State Overtime Calculator",
  description: "Learn about StateOvertime.com and our mission to help US workers understand their overtime pay.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-950">
      <SiteHeader activePage="about" />

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

        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-2xl font-bold tracking-tight text-[#071b35] sm:text-3xl">About StateOvertime.com</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Learn about our mission to help US workers understand and calculate overtime pay.
          </p>
        </section>

        <div className="mt-6 bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">StateOvertime.com was created to help American workers understand and calculate their overtime pay accurately. With 50 states and Washington DC each having different overtime rules, knowing what you're owed can be confusing. Our free calculator makes it simple.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Why We Built This</h2>
            <p className="text-slate-700 leading-relaxed">Millions of US workers lose money every year because they don't fully understand overtime laws. California has daily overtime rules. Alaska and Nevada have their own daily OT triggers. Federal FLSA covers everyone. We wanted one tool that handles all these variations accurately.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li><strong className="font-semibold">Free overtime calculator</strong> with state-specific rules</li>
              <li><strong className="font-semibold">Federal FLSA compliance</strong> for all 50 states plus DC</li>
              <li><strong className="font-semibold">California daily overtime</strong> (over 8 hours = 1.5x, over 12 hours = 2x)</li>
              <li><strong className="font-semibold">Alaska & Nevada daily overtime</strong> rules</li>
              <li><strong className="font-semibold">No signup required</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Important Disclaimer</h2>
            <p className="text-slate-700 leading-relaxed">StateOvertime.com provides estimates for informational purposes only. We are not lawyers or accountants. For official calculations and legal advice, consult your HR department, state labor board, or an employment attorney.</p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </main>
    </div>
  );
}
import Link from "next/link";

export const metadata = {
  title: "About Us | State Overtime Calculator",
  description: "Learn about StateOvertime.com and our mission to help US workers understand their overtime pay.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-950">
      <header className="bg-[#071b35] text-white shadow-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-5">
            <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight sm:text-2xl">STATE OVERTIME</Link>
            <span className="hidden border-l border-white/20 pl-5 text-sm text-slate-200 lg:block">Overtime pay calculator &amp; state laws</span>
          </div>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold sm:gap-x-8">
            <Link href="/#calculator" className="pb-2 text-slate-200 transition-colors hover:text-white">Calculator</Link>
            <Link href="/state-laws" className="pb-2 text-slate-200 transition-colors hover:text-white">State Laws</Link>
            <Link href="/about" aria-current="page" className="border-b-2 border-blue-400 pb-2 text-white">About</Link>
            <Link href="/contact" className="pb-2 text-slate-200 transition-colors hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

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

        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-2xl font-bold tracking-tight text-[#071b35] sm:text-3xl">About StateOvertime.com</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Learn about our mission to help US workers understand and calculate overtime pay.
          </p>
        </section>

        <div className="mt-6 bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">StateOvertime.com was created to help American workers understand and calculate their overtime pay accurately. With 50 states and Washington DC each having different overtime rules, knowing what you're owed can be confusing. Our free calculator makes it simple.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Why We Built This</h2>
            <p className="text-slate-700 leading-relaxed">Millions of US workers lose money every year because they don't fully understand overtime laws. California has daily overtime rules. Alaska and Nevada have their own daily OT triggers. Federal FLSA covers everyone. We wanted one tool that handles all these variations accurately.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">What We Offer</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li><strong className="font-semibold">Free overtime calculator</strong> with state-specific rules</li>
              <li><strong className="font-semibold">Federal FLSA compliance</strong> for all 50 states plus DC</li>
              <li><strong className="font-semibold">California daily overtime</strong> (over 8 hours = 1.5x, over 12 hours = 2x)</li>
              <li><strong className="font-semibold">Alaska & Nevada daily overtime</strong> rules</li>
              <li><strong className="font-semibold">No signup required</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Important Disclaimer</h2>
            <p className="text-slate-700 leading-relaxed">StateOvertime.com provides estimates for informational purposes only. We are not lawyers or accountants. For official calculations and legal advice, consult your HR department, state labor board, or an employment attorney.</p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </main>
    </div>
  );
}
