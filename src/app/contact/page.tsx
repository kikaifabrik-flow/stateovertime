export const metadata = {
  title: "Contact Us | State Overtime Calculator",
  description: "Contact StateOvertime.com with questions, feedback, or partnership inquiries.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Get in Touch</h2>
            <p className="text-slate-700 leading-relaxed">Have a question about our overtime calculator? Found a bug? Want to suggest a new state-specific rule? We'd love to hear from you.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Email</h2>
            <p className="text-slate-700 leading-relaxed">For general inquiries, feedback, or bug reports:</p>
            <p className="mt-2"><a href="mailto:contact@stateovertime.com" className="text-blue-600 hover:underline font-semibold text-lg">contact@stateovertime.com</a></p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Response Time</h2>
            <p className="text-slate-700 leading-relaxed">We typically respond within 2-3 business days. For urgent issues, please include "URGENT" in your email subject line.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">What to Include</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li>Your state</li>
              <li>Hourly rate and hours worked (if reporting a calculation issue)</li>
              <li>Screenshot of the problem (if applicable)</li>
              <li>Description of what you expected vs. what happened</li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </section>
    </main>
  );
}
