export const metadata = {
  title: "Privacy Policy | State Overtime Calculator",
  description: "Privacy Policy for StateOvertime.com",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 mt-2 text-sm">Last updated: July 17, 2026</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Introduction</h2>
            <p className="text-[15px] leading-6 text-slate-700">Welcome to StateOvertime.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and disclose information when you use our website and overtime calculator tool.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Information We Collect</h2>
            <p className="text-[15px] leading-6 text-slate-700">We may collect anonymous usage data through analytics services to understand how visitors interact with our site. This data does not identify you personally.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Cookies and Tracking Technologies</h2>
            <p className="text-[15px] leading-6 text-slate-700">We may use cookies and similar tracking technologies to track activity on our website and store certain information.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Changes to This Privacy Policy</h2>
            <p className="text-[15px] leading-6 text-slate-700">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h2>
            <p className="text-[15px] leading-6 text-slate-700">If you have questions about this Privacy Policy, please contact us at: <a href="mailto:contact@stateovertime.com" className="font-semibold text-blue-600 hover:underline">contact@stateovertime.com</a></p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </section>
    </main>
  );
}
