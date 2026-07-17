"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

const DAYS: { key: string; label: string }[] = [
  { key: "mon", label: "Monday" },
  { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" },
  { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" },
  { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
];

const DAILY_OT_STATES = ["CA", "AK", "NV"];

interface DayHours {
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
}

interface CalcResult {
  regularHours: number;
  otHours: number;
  doubleOtHours: number;
  regularPay: number;
  otPay: number;
  doubleOtPay: number;
  grossPay: number;
}

export default function Home() {
  const router = useRouter();
  const [hourlyRate, setHourlyRate] = useState<string>("20");
  const [state, setState] = useState<string>("");
  const [hours, setHours] = useState<DayHours>({
    mon: 8,
    tue: 8,
    wed: 8,
    thu: 8,
    fri: 8,
    sat: 0,
    sun: 0,
  });

  const [result, setResult] = useState<CalcResult | null>(null);

  const handleHourChange = (day: string, value: string) => {
    setHours({
      ...hours,
      [day]: parseFloat(value) || 0,
    });
  };

  const handleStateChange = (stateCode: string) => {
    const selectedState = STATES.find((stateItem) => stateItem.code === stateCode);

    if (!selectedState) return;

    setState(stateCode);
    const slug = selectedState.name.toLowerCase().replace(/\s+/g, "-");
    router.push(`/overtime-calculator/${slug}`);
  };

  const calculate = () => {
    if (!state) {
      setResult(null);
      return;
    }

    const rate = parseFloat(hourlyRate) || 0;
    const dayHoursArr = DAYS.map((d) => hours[d.key as keyof DayHours]);
    const totalHours = dayHoursArr.reduce((a, b) => a + b, 0);

    let regularHours = 0;
    let otHours = 0;
    let doubleOtHours = 0;

    if (DAILY_OT_STATES.includes(state)) {
      for (const dh of dayHoursArr) {
        if (state === "CA") {
          if (dh > 12) {
            regularHours += 8;
            otHours += 4;
            doubleOtHours += dh - 12;
          } else if (dh > 8) {
            regularHours += 8;
            otHours += dh - 8;
          } else {
            regularHours += dh;
          }
        } else {
          if (dh > 8) {
            regularHours += 8;
            otHours += dh - 8;
          } else {
            regularHours += dh;
          }
        }
      }
    } else {
      regularHours = Math.min(totalHours, 40);
      otHours = Math.max(0, totalHours - 40);
    }

    const regularPay = regularHours * rate;
    const otPay = otHours * rate * 1.5;
    const doubleOtPay = doubleOtHours * rate * 2;
    const grossPay = regularPay + otPay + doubleOtPay;

    setResult({
      regularHours,
      otHours,
      doubleOtHours,
      regularPay,
      otPay,
      doubleOtPay,
      grossPay,
    });
  };

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-8 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            State Overtime Calculator
          </h1>
          <p className="text-slate-300 mt-2 text-sm md:text-base">
           Free overtime calculator with state-specific rules for all 50 US
            states plus Washington DC. Calculate your overtime pay based on
            federal FLSA and state labor laws.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Enter your work hours
          </h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Hourly Rate ($)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="20.00"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              State
            </label>
            <select
              value={state}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              <option value="" disabled>
                Select State
              </option>
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Hours worked per day
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {DAYS.map((day) => (
                <div key={day.key}>
                  <label className="block text-xs text-slate-500 mb-1">
                    {day.label}
                  </label>
                  <input
                    type="number"
                    value={hours[day.key as keyof DayHours]}
                    onChange={(e) => handleHourChange(day.key, e.target.value)}
                    min="0"
                    max="24"
                    step="0.5"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={calculate}
            disabled={!state}
            className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Calculate Overtime Pay
          </button>
        </div>

        {result && (
          <div className="mt-6 bg-white rounded-xl shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Your Pay Breakdown
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Regular Hours:</span>
                <span className="font-semibold">
                  {result.regularHours.toFixed(1)} hrs
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Overtime Hours (1.5x):</span>
                <span className="font-semibold">
                  {result.otHours.toFixed(1)} hrs
                </span>
              </div>
              {result.doubleOtHours > 0 && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Double OT Hours (2x):</span>
                  <span className="font-semibold">
                    {result.doubleOtHours.toFixed(1)} hrs
                  </span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Regular Pay:</span>
                <span className="font-semibold">
                  {formatCurrency(result.regularPay)}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Overtime Pay (1.5x):</span>
                <span className="font-semibold">
                  {formatCurrency(result.otPay)}
                </span>
              </div>
              {result.doubleOtPay > 0 && (
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Double OT Pay (2x):</span>
                  <span className="font-semibold">
                    {formatCurrency(result.doubleOtPay)}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-4 mt-2 bg-blue-50 px-4 rounded-lg">
                <span className="text-blue-900 font-bold text-lg">
                  Gross Pay:
                </span>
                <span className="text-blue-900 font-bold text-lg">
                  {formatCurrency(result.grossPay)}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-slate-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            How overtime is calculated
          </h3>
          <div className="prose prose-sm text-slate-600 space-y-2">
            <p>
              <strong>Federal FLSA (all states):</strong> Hours worked over 40
              in a workweek must be paid at 1.5x your regular rate.
            </p>
            <p>
              <strong>California:</strong> Daily overtime applies — over 8
              hours/day = 1.5x, over 12 hours/day = 2x.
            </p>
            <p>
              <strong>Alaska &amp; Nevada:</strong> Daily overtime applies —
              over 8 hours/day = 1.5x.
            </p>
            <p>
              <strong>All other states:</strong> Follow federal FLSA rules
              (weekly overtime only).
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-5">
            Browse Overtime Calculator by State
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {STATES.map((stateItem) => {
              const slug = stateItem.name.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link
                  key={stateItem.code}
                  href={`/overtime-calculator/${slug}`}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                >
                  {stateItem.code === "DC" ? "DC" : stateItem.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm mb-4">
            <Link href="/about" className="text-slate-600 hover:text-blue-900">
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="text-slate-600 hover:text-blue-900"
            >
              Privacy Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-slate-600 hover:text-blue-900"
            >
              Disclaimer
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-900">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-slate-500">
            © 2026 StateOvertime.com — Free overtime calculator for US workers.
          </p>
          <p className="text-xs text-slate-400 mt-2">
            This tool provides estimates only. Consult your HR department or
            state labor board for official calculations.
          </p>
        </div>
      </footer>
    </div>
  );
}
