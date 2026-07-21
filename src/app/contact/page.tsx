import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata = {
  title: "Contact Us | State Overtime Calculator",
  description: "Contact StateOvertime.com with questions, feedback, or partnership inquiries.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-950">
      <SiteHeader activePage="contact" />

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

        <section aria-labelledby="contact-heading">
          <h1 id="contact-heading" className="text-2xl font-bold tracking-tight text-[#071b35] sm:text-3xl">Contact Us</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
            Contact StateOvertime.com with questions, feedback, or partnership inquiries.
          </p>
        </section>

        <div className="mt-6 bg-white rounded-lg shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Get in Touch</h2>
            <p className="text-[15px] leading-6 text-slate-700">Have a question about our overtime calculator? Found a bug? Want to suggest a new state-specific rule? We'd love to hear from you.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Email</h2>
            <p className="text-[15px] leading-6 text-slate-700">For general inquiries, feedback, or bug reports:</p>
            <p className="mt-2 text-[15px] leading-6"><a href="mailto:contact@stateovertime.com" className="font-semibold text-blue-600 hover:underline">contact@stateovertime.com</a></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Response Time</h2>
            <p className="text-[15px] leading-6 text-slate-700">We typically respond within 2-3 business days.</p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </main>
    </div>
  );
}
