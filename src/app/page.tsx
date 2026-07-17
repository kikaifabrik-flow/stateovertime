"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
];

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState("");
  const currentYear = new Date().getFullYear();

  const handleStateChange = (stateCode: string) => {
    const selectedState = STATES.find((item) => item.code === stateCode);
    if (!selectedState) return;

    setState(stateCode);
    const slug = selectedState.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/overtime-calculator/${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">State Overtime Calculator</h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
            Free overtime calculator with state-specific rules for all 50 US states plus Washington DC. Calculate your overtime pay based on federal FLSA and state labor laws.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Select your state</h2>
          <p className="text-sm text-slate-600 mb-5">Choose a state to open its overtime calculator.</p>
          <label htmlFor="home-state" className="block text-sm font-medium text-blue-600 mb-2">Select State</label>
          <select
            id="home-state"
            value={state}
            onChange={(event) => handleStateChange(event.target.value)}
            className="w-full px-4 py-3 border border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white text-blue-600 font-semibold"
          >
            <option value="" disabled>Select State</option>
            {STATES.map((item) => <option key={item.code} value={item.code} className="text-slate-900 font-normal">{item.name}</option>)}
          </select>
        </div>

        <div className="mt-8 bg-slate-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">How overtime is calculated</h3>
          <div className="prose prose-sm text-slate-600 space-y-2">
            <p><strong>Federal FLSA (all states):</strong> Hours worked over 40 in a workweek must be paid at 1.5x your regular rate.</p>
            <p><strong>California:</strong> Daily overtime applies — over 8 hours/day = 1.5x, over 12 hours/day = 2x.</p>
            <p><strong>Alaska:</strong> Daily overtime generally applies after 8 hours/day at 1.5x.</p>
            <p><strong>Colorado:</strong> Overtime generally applies after 12 hours/day or 12 consecutive hours at 1.5x.</p>
            <p><strong>Nevada:</strong> Daily overtime generally applies after 8 hours/day when the hourly rate is below $18; weekly overtime still applies after 40 hours.</p>
            <p><strong>Other state rules:</strong> Some states have separate seventh-day, industry, or prevailing-wage rules. Review the selected state page for limitations.</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">Browse Overtime Calculator by State</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {STATES.map((item) => {
              const slug = item.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={item.code} href={`/overtime-calculator/${slug}`} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                  {item.code === "DC" ? "DC" : item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm mb-4">
            <Link href="/about" className="text-slate-600 hover:text-blue-900">About</Link>
            <Link href="/privacy" className="text-slate-600 hover:text-blue-900">Privacy Policy</Link>
            <Link href="/disclaimer" className="text-slate-600 hover:text-blue-900">Disclaimer</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-900">Contact</Link>
          </nav>
          <p className="text-sm text-slate-500">© {currentYear} StateOvertime.com — Free overtime calculator for US workers.</p>
          <p className="text-xs text-slate-400 mt-2">This tool provides estimates only. Consult your HR department or state labor board for official calculations.</p>
        </div>
      </footer>
    </div>
  );
}
