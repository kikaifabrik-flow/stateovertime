"use client";

import { useState } from "react";

const STATES = [
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

const DAYS = [
  { key: "mon", label: "Monday" }, { key: "tue", label: "Tuesday" },
  { key: "wed", label: "Wednesday" }, { key: "thu", label: "Thursday" },
  { key: "fri", label: "Friday" }, { key: "sat", label: "Saturday" },
  { key: "sun", label: "Sunday" },
];

const DAILY_OT_STATES = ["CA", "AK", "NV"];

export default function Calculator({ defaultState = "CA" }: { defaultState?: string }) {
  const [hourlyRate, setHourlyRate] = useState("20");
  const [state, setState] = useState(defaultState);
  const [hours, setHours] = useState({
    mon: 8, tue: 8, wed: 8, thu: 8, fri: 8, sat: 0, sun: 0,
  });
  const [result, setResult] = useState<any>(null);

  const handleHourChange = (day: string, value: string) => {
    setHours({ ...hours, [day]: parseFloat(value) || 0 });
  };

  const calculate = () => {
    const rate = parseFloat(hourlyRate) || 0;
    const dayHoursArr = DAYS.map((d) => hours[d.key as keyof typeof hours]);
    const totalHours = dayHoursArr.reduce((a, b) => a + b, 0);

    let regularHours = 0;
    let otHours = 0;
    let doubleOtHours = 0;

    if (DAILY_OT_STATES.includes(state)) {
      for (const dh of dayHoursArr) {
        if (state === "CA") {
          if (dh > 12) { regularHours += 8; otHours += 4; doubleOtHours += dh - 12; }
          else if (dh > 8) { regularHours += 8; otHours += dh - 8; }
          else { regularHours += dh; }
        } else {
          if (dh > 8) { regularHours += 8; otHours += dh - 8; }
          else { regularHours += dh; }
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

    setResult({ regularHours, otHours, doubleOtHours, regularPay, otPay, doubleOtPay, grossPay });
  };

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Enter your work hours</h2>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Hourly Rate ($)</label>
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
        <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
        >
          {STATES.map((s) => (
            <option key={s.code} value={s.code}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Hours worked per day</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DAYS.map((day) => (
            <div key={day.key}>
              <label className="block text-xs text-slate-500 mb-1">{day.label}</label>
              <input
                type="number"
                value={hours[day.key as keyof typeof hours]}
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
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Calculate Overtime Pay
      </button>

      {result && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Pay Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">Regular Hours:</span>
              <span className="font-semibold">{result.regularHours.toFixed(1)} hrs</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">Overtime Hours (1.5x):</span>
              <span className="font-semibold">{result.otHours.toFixed(1)} hrs</span>
            </div>
            {result.doubleOtHours > 0 && (
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Double OT Hours (2x):</span>
                <span className="font-semibold">{result.doubleOtHours.toFixed(1)} hrs</span>
              </div>
            )}
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">Regular Pay:</span>
              <span className="font-semibold">{formatCurrency(result.regularPay)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-600">Overtime Pay (1.5x):</span>
              <span className="font-semibold">{formatCurrency(result.otPay)}</span>
            </div>
            {result.doubleOtPay > 0 && (
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-600">Double OT Pay (2x):</span>
                <span className="font-semibold">{formatCurrency(result.doubleOtPay)}</span>
              </div>
            )}
            <div className="flex justify-between py-4 mt-2 bg-blue-50 px-4 rounded-lg">
              <span className="text-blue-900 font-bold text-lg">Gross Pay:</span>
              <span className="text-blue-900 font-bold text-lg">{formatCurrency(result.grossPay)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
