export const metadata = {
  title: "About Us | State Overtime Calculator",
  description: "Learn about StateOvertime.com and our mission to help US workers understand their overtime pay.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About StateOvertime.com</h1>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
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
      </section>
    </main>
  );
}
