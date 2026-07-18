export const metadata = {
  title: "Disclaimer | State Overtime Calculator",
  description: "Legal disclaimer for StateOvertime.com",
  alternates: {
    canonical: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Disclaimer</h1>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">General Information</h2>
            <p className="text-[15px] leading-6 text-slate-700">The information provided by StateOvertime.com ("we," "us," or "our") on this website is for general informational purposes only. All information on the website is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">No Legal or Financial Advice</h2>
            <p className="text-[15px] leading-6 text-slate-700">The overtime calculator and any related content on this website does not constitute legal, financial, or professional advice. The calculations provided are estimates based on federal FLSA rules and state-specific overtime laws as we understand them. Actual overtime pay may vary based on your specific employment situation, exemptions, contracts, and other factors.</p>
            <p className="mt-3 text-[15px] leading-6 text-slate-700">You should consult with a qualified employment attorney, your HR department, or your state labor board for advice specific to your situation.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Limitation of Liability</h2>
            <p className="text-[15px] leading-6 text-slate-700">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the website or reliance on any information provided on the website. Your use of the website and your reliance on any information on the website is solely at your own risk.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">External Links</h2>
            <p className="text-[15px] leading-6 text-slate-700">The website may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Changes to This Disclaimer</h2>
            <p className="text-[15px] leading-6 text-slate-700">We reserve the right to modify this disclaimer at any time. Changes take effect immediately upon posting to the website.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h2>
            <p className="text-[15px] leading-6 text-slate-700">If you have questions about this Disclaimer, please contact us at: <a href="mailto:contact@stateovertime.com" className="font-semibold text-blue-600 hover:underline">contact@stateovertime.com</a></p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </section>
    </main>
  );
}
