export const metadata = {
  title: "Privacy Policy | State Overtime Calculator",
  description: "Privacy Policy for StateOvertime.com",
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 mt-2 text-sm">Last updated: July 3, 2026</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">Welcome to StateOvertime.com ("we," "us," or "our"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and disclose information when you use our website and overtime calculator tool.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We do not require you to create an account or provide personal information to use our overtime calculator. The information you enter into the calculator (hourly rate, hours worked, state) is processed entirely in your browser and is not transmitted to or stored on our servers.</p>
            <p className="text-slate-700 leading-relaxed">We may collect anonymous usage data through analytics services to understand how visitors interact with our site. This data does not identify you personally.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Cookies and Tracking Technologies</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We may use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.</p>
            <p className="text-slate-700 leading-relaxed">Third-party advertising partners may use cookies to serve relevant ads. You can choose to disable cookies through your browser settings.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed mb-3">We may use third-party services for analytics and advertising, including:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1 ml-4">
              <li><strong className="font-semibold">Google AdSense</strong> — for displaying advertisements</li>
              <li><strong className="font-semibold">Google Analytics</strong> — for understanding site usage</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">These third parties have access to your Personal Data only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Data Security</h2>
            <p className="text-slate-700 leading-relaxed">The security of your data is important to us. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee absolute security as no method of transmission over the Internet or electronic storage is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Children's Privacy</h2>
            <p className="text-slate-700 leading-relaxed">Our website is intended for general audiences and is not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Changes to This Privacy Policy</h2>
            <p className="text-slate-700 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Contact Us</h2>
            <p className="text-slate-700 leading-relaxed">If you have questions about this Privacy Policy, please contact us at: <a href="mailto:contact@stateovertime.com" className="text-blue-600 hover:underline font-semibold">contact@stateovertime.com</a></p>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-200">
            <a href="/" className="text-blue-600 hover:underline font-semibold">← Back to Overtime Calculator</a>
          </div>
        </div>
      </section>
    </main>
  );
}
