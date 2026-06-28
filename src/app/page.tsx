"use client";

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
  const [hourlyRate, setHourlyRate] = useState<string>("20");
  const [state, setState] = useState<string>("CA");
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

  const calculate = () => {
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
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

      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-6">
            Enter your work hours
          </h2>

          {/* Hourly Rate */}
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

          {/* State Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              State
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
            >
              {STATES.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* Daily Hours Inputs */}
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

          {/* Calculate Button */}
          <button
            onClick={calculate}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Calculate Overtime Pay
          </button>
        </div>

        {/* Results */}
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

        {/* Info Section */}
                <div className="mt-8 bg-slate-50 rounded-xl p-6 md:p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">How overtime is calculated</h3>
          <div className="prose prose-sm text-slate-600 space-y-2">
            <p><strong>Federal FLSA (all states):</strong> Hours worked over 40 in a workweek must be paid at 1.5x your regular rate.</p>
            <p><strong>California:</strong> Daily overtime applies — over 8 hours/day = 1.5x, over 12 hours/day = 2x.</p>
            <p><strong>Alaska &amp; Nevada:</strong> Daily overtime applies — over 8 hours/day = 1.5x.</p>
            <p><strong>All other states:</strong> Follow federal FLSA rules (weekly overtime only).</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6 md:p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Browse Overtime Calculator by State</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <a href="/overtime-calculator/alabama" className="text-blue-600 hover:underline">Alabama</a>
            <a href="/overtime-calculator/alaska" className="text-blue-600 hover:underline">Alaska</a>
            <a href="/overtime-calculator/arizona" className="text-blue-600 hover:underline">Arizona</a>
            <a href="/overtime-calculator/arkansas" className="text-blue-600 hover:underline">Arkansas</a>
            <a href="/overtime-calculator/california" className="text-blue-600 hover:underline">California</a>
            <a href="/overtime-calculator/colorado" className="text-blue-600 hover:underline">Colorado</a>
            <a href="/overtime-calculator/connecticut" className="text-blue-600 hover:underline">Connecticut</a>
            <a href="/overtime-calculator/delaware" className="text-blue-600 hover:underline">Delaware</a>
            <a href="/overtime-calculator/district-of-columbia" className="text-blue-600 hover:underline">DC</a>
            <a href="/overtime-calculator/florida" className="text-blue-600 hover:underline">Florida</a>
            <a href="/overtime-calculator/georgia" className="text-blue-600 hover:underline">Georgia</a>
            <a href="/overtime-calculator/hawaii" className="text-blue-600 hover:underline">Hawaii</a>
            <a href="/overtime-calculator/idaho" className="text-blue-600 hover:underline">Idaho</a>
            <a href="/overtime-calculator/illinois" className="text-blue-600 hover:underline">Illinois</a>
            <a href="/overtime-calculator/indiana" className="text-blue-600 hover:underline">Indiana</a>
            <a href="/overtime-calculator/iowa" className="text-blue-600 hover:underline">Iowa</a>
            <a href="/overtime-calculator/kansas" className="text-blue-600 hover:underline">Kansas</a>
            <a href="/overtime-calculator/kentucky" className="text-blue-600 hover:underline">Kentucky</a>
            <a href="/overtime-calculator/louisiana" className="text-blue-600 hover:underline">Louisiana</a>
            <a href="/overtime-calculator/maine" className="text-blue-600 hover:underline">Maine</a>
            <a href="/overtime-calculator/maryland" className="text-blue-600 hover:underline">Maryland</a>
            <a href="/overtime-calculator/massachusetts" className="text-blue-600 hover:underline">Massachusetts</a>
            <a href="/overtime-calculator/michigan" className="text-blue-600 hover:underline">Michigan</a>
            <a href="/overtime-calculator/minnesota" className="text-blue-600 hover:underline">Minnesota</a>
            <a href="/overtime-calculator/mississippi" className="text-blue-600 hover:underline">Mississippi</a>
            <a href="/overtime-calculator/missouri" className="text-blue-600 hover:underline">Missouri</a>
            <a href="/overtime-calculator/montana" className="text-blue-600 hover:underline">Montana</a>
            <a href="/overtime-calculator/nebraska" className="text-blue-600 hover:underline">Nebraska</a>
            <a href="/overtime-calculator/nevada" className="text-blue-600 hover:underline">Nevada</a>
            <a href="/overtime-calculator/new-hampshire" className="text-blue-600 hover:underline">New Hampshire</a>
            <a href="/overtime-calculator/new-jersey" className="text-blue-600 hover:underline">New Jersey</a>
            <a href="/overtime-calculator/new-mexico" className="text-blue-600 hover:underline">New Mexico</a>
            <a href="/overtime-calculator/new-york" className="text-blue-600 hover:underline">New York</a>
            <a href="/overtime-calculator/north-carolina" className="text-blue-600 hover:underline">North Carolina</a>
            <a href="/overtime-calculator/north-dakota" className="text-blue-600 hover:underline">North Dakota</a>
            <a href="/overtime-calculator/ohio" className="text-blue-600 hover:underline">Ohio</a>
            <a href="/overtime-calculator/oklahoma" className="text-blue-600 hover:underline">Oklahoma</a>
            <a href="/overtime-calculator/oregon" className="text-blue-600 hover:underline">Oregon</a>
            <a href="/overtime-calculator/pennsylvania" className="text-blue-600 hover:underline">Pennsylvania</a>
            <a href="/overtime-calculator/rhode-island" className="text-blue-600 hover:underline">Rhode Island</a>
            <a href="/overtime-calculator/south-carolina" className="text-blue-600 hover:underline">South Carolina</a>
            <a href="/overtime-calculator/south-dakota" className="text-blue-600 hover:underline">South Dakota</a>
            <a href="/overtime-calculator/tennessee" className="text-blue-600 hover:underline">Tennessee</a>
            <a href="/overtime-calculator/texas" className="text-blue-600 hover:underline">Texas</a>
            <a href="/overtime-calculator/utah" className="text-blue-600 hover:underline">Utah</a>
            <a href="/overtime-calculator/vermont" className="text-blue-600 hover:underline">Vermont</a>
            <a href="/overtime-calculator/virginia" className="text-blue-600 hover:underline">Virginia</a>
            <a href="/overtime-calculator/washington" className="text-blue-600 hover:underline">Washington</a>
            <a href="/overtime-calculator/west-virginia" className="text-blue-600 hover:underline">West Virginia</a>
            <a href="/overtime-calculator/wisconsin" className="text-blue-600 hover:underline">Wisconsin</a>
            <a href="/overtime-calculator/wyoming" className="text-blue-600 hover:underline">Wyoming</a>
          </div>
        </div>
      </section>
 <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
  <div className="max-w-4xl mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
      <a href="/about" className="text-slate-300 hover:text-white transition-colors">About</a>
      <a href="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
      <a href="/disclaimer" className="text-slate-300 hover:text-white transition-colors">Disclaimer</a>
      <a href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
    </div>
    <p className="text-center text-sm">&copy; {new Date().getFullYear()} StateOvertime.com — Free overtime calculator for US workers.</p>
    <p className="text-center mt-2 text-xs">This tool provides estimates only. Consult your HR department or state labor board for official calculations.</p>
  </div>
</footer>
    </main>
  );
}
