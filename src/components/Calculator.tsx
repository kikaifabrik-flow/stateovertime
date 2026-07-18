"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStateOvertimeRule } from "../data/overtimeRules";
import { calculateOvertimePay, type CalcResult } from "../lib/overtime";

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

export default function Calculator({ defaultState = "CA" }: { defaultState?: string }) {
  const router = useRouter();
  const [hourlyRate, setHourlyRate] = useState("20");
  const [hours, setHours] = useState({
    mon: 8, tue: 8, wed: 8, thu: 8, fri: 8, sat: 0, sun: 0,
  });
  const [result, setResult] = useState<CalcResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [consecutiveOvertimeHours, setConsecutiveOvertimeHours] = useState("0");
  const [useOregonIndustryRule, setUseOregonIndustryRule] = useState(false);
  const state = defaultState;
  const rule = getStateOvertimeRule(state);
  const rateIsInvalid =
    hourlyRate !== "" &&
    (!Number.isFinite(Number(hourlyRate)) || Number(hourlyRate) < 0);
  const hoursAreInvalid = DAYS.some((day) => {
    const value = hours[day.key as keyof typeof hours];
    return value < 0 || value > 24;
  });
  const consecutiveHoursAreInvalid =
    consecutiveOvertimeHours !== "" &&
    (!Number.isFinite(Number(consecutiveOvertimeHours)) ||
      Number(consecutiveOvertimeHours) < 0 ||
      Number(consecutiveOvertimeHours) > 168);

  useEffect(() => {
    const savedDraft = sessionStorage.getItem("stateovertime-calculator-draft");

    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft) as {
          hourlyRate?: unknown;
          hours?: Record<string, unknown>;
        };
        const validHours = Object.fromEntries(
          DAYS.flatMap((day) => {
            const value = draft.hours?.[day.key];
            return typeof value === "number" && value >= 0 && value <= 24
              ? [[day.key, value]]
              : [];
          }),
        );

        if (typeof draft.hourlyRate === "string") setHourlyRate(draft.hourlyRate);
        setHours((currentHours) => ({ ...currentHours, ...validHours }));
      } catch {
        // Ignore malformed navigation data and keep the calculator defaults.
      }

      sessionStorage.removeItem("stateovertime-calculator-draft");
    }
    setResult(null);
    setError(null);
    setConsecutiveOvertimeHours("0");
    setUseOregonIndustryRule(false);
  }, [defaultState]);

  const handleHourChange = (day: string, value: string) => {
    setHours({ ...hours, [day]: parseFloat(value) || 0 });
    setResult(null);
    setError(null);
  };

  const handleRateChange = (value: string) => {
    setHourlyRate(value);
    setResult(null);
    setError(null);
  };

  const handleStateChange = (stateCode: string) => {
    const selectedState = STATES.find((stateItem) => stateItem.code === stateCode);

    if (!selectedState) return;

    setResult(null);
    setError(null);
    const slug = selectedState.name.toLowerCase().replace(/\s+/g, "-");
    sessionStorage.setItem(
      "stateovertime-calculator-draft",
      JSON.stringify({ hourlyRate, hours }),
    );
    router.push(`/overtime-calculator/${slug}`);
  };

  const calculate = () => {
    const rate = Number(hourlyRate);
    const dayHoursArr = DAYS.map((d) => hours[d.key as keyof typeof hours]);

    const consecutiveHours = Number(consecutiveOvertimeHours);

    if (hourlyRate.trim() === "" || !Number.isFinite(rate) || rate < 0) {
      setResult(null);
      setError("Enter an hourly rate of $0 or more.");
      return;
    }

    if (
      state === "CO" &&
      (consecutiveOvertimeHours.trim() === "" ||
        !Number.isFinite(consecutiveHours) ||
        consecutiveHours < 0 ||
        consecutiveHours > 168 ||
        consecutiveHours > dayHoursArr.reduce((sum, hoursWorked) => sum + hoursWorked, 0))
    ) {
      setResult(null);
      setError("Enter Colorado consecutive overtime hours between 0 and the total hours worked.");
      return;
    }

    if (dayHoursArr.some((dayHours) => dayHours < 0 || dayHours > 24)) {
      setResult(null);
      setError("Enter between 0 and 24 hours for each day.");
      return;
    }

    setError(null);
    setResult(
      calculateOvertimePay({
        stateCode: state,
        hourlyRate: rate,
        dayHours: dayHoursArr,
        consecutiveOvertimeHours: state === "CO" ? consecutiveHours : 0,
        useOregonIndustryRule: state === "OR" && useOregonIndustryRule,
      }),
    );
  };

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        calculate();
      }}
      noValidate
    >
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Enter your work hours</h2>

      <div className="mb-6">
        <label htmlFor="calculator-state" className="block text-sm font-medium text-slate-700 mb-2">State</label>
        <select
          id="calculator-state"
          value={state}
          onChange={(e) => handleStateChange(e.target.value)}
          className={`w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white ${
            state ? "font-normal text-slate-900" : "font-semibold text-blue-700"
          }`}
        >
          {!state && (
            <option value="" disabled className="font-semibold text-blue-700">
              Select State
            </option>
          )}
          {STATES.map((s) => (
            <option key={s.code} value={s.code} className="font-normal text-slate-900">{s.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="calculator-hourly-rate" className="block text-sm font-medium text-slate-700 mb-2">Hourly Rate ($)</label>
        <input
          id="calculator-hourly-rate"
          type="number"
          value={hourlyRate}
          onChange={(e) => handleRateChange(e.target.value)}
          min="0"
          step="0.01"
          aria-invalid={rateIsInvalid}
          aria-describedby={error ? "calculator-error" : undefined}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="20.00"
        />
      </div>

      <fieldset className="mb-6">
        <legend className="block text-sm font-medium text-slate-700 mb-2">Hours worked per day</legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {DAYS.map((day) => (
            <div key={day.key}>
              <label htmlFor={`calculator-${day.key}`} className="block text-xs text-slate-500 mb-1">{day.label}</label>
              <input
                id={`calculator-${day.key}`}
                type="number"
                value={hours[day.key as keyof typeof hours]}
                onChange={(e) => handleHourChange(day.key, e.target.value)}
                min="0"
                max="24"
                step="0.5"
                aria-invalid={hoursAreInvalid && (hours[day.key as keyof typeof hours] < 0 || hours[day.key as keyof typeof hours] > 24)}
                aria-describedby={error ? "calculator-error" : undefined}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          ))}
        </div>
      </fieldset>

      {state === "CO" && (
        <div className="mb-6">
          <label htmlFor="calculator-consecutive-overtime" className="block text-sm font-medium text-slate-700 mb-2">
            Hours beyond 12 consecutive hours this week
          </label>
          <input
            id="calculator-consecutive-overtime"
            type="number"
            value={consecutiveOvertimeHours}
            onChange={(event) => {
              setConsecutiveOvertimeHours(event.target.value);
              setResult(null);
              setError(null);
            }}
            min="0"
            max="168"
            step="0.5"
            aria-invalid={consecutiveHoursAreInvalid}
            aria-describedby="calculator-consecutive-help"
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <p id="calculator-consecutive-help" className="mt-2 text-xs text-slate-500">
            Only include overtime caused by shifts that continued across workday boundaries.
          </p>
        </div>
      )}

      {state === "OR" && (
        <div className="mb-6 rounded-md border border-slate-200 bg-slate-50 p-4">
          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={useOregonIndustryRule}
              onChange={(event) => {
                setUseOregonIndustryRule(event.target.checked);
                setResult(null);
                setError(null);
              }}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-900 focus:ring-blue-500"
            />
            <span>
              Apply Oregon&apos;s manufacturing, cannery, drier, or packing-plant rule (overtime after 10 hours per day or 40 hours per week, whichever is greater).
            </span>
          </label>
        </div>
      )}

      {error && (
        <p id="calculator-error" role="alert" className="mb-4 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!state}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md transition-colors disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Calculate Overtime Pay
      </button>

      {rule.calculatorNote && (
        <p className="mt-3 text-xs text-slate-500">{rule.calculatorNote}</p>
      )}

      {result && (
        <div className="mt-6 pt-6 border-t border-slate-200" aria-live="polite">
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
            <div className="flex justify-between py-4 mt-2 bg-blue-50 px-4 rounded-md">
              <span className="text-blue-900 font-bold text-lg">Gross Pay:</span>
              <span className="text-blue-900 font-bold text-lg">{formatCurrency(result.grossPay)}</span>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
