"use client";

import { useState } from "react";

const SHARE_URL = "https://stateovertime.com/";
const SHARE_TEXT = "Like this free overtime calculator? Share StateOvertime.com with someone who could use it.";

const buttonClass =
  "inline-flex min-h-10 items-center justify-center rounded-lg border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 transition-colors hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

export default function ShareCalculator() {
  const [copyStatus, setCopyStatus] = useState("");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(SHARE_URL);
      setCopyStatus("Link copied!");
    } catch {
      setCopyStatus("Copy failed. Please copy stateovertime.com manually.");
    }
  };

  const shareMore = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "State Overtime Calculator", text: SHARE_TEXT, url: SHARE_URL });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    await copyLink();
  };

  const encodedUrl = encodeURIComponent(SHARE_URL);
  const encodedText = encodeURIComponent(SHARE_TEXT);

  return (
    <aside className="mt-8 rounded-xl border border-blue-100 bg-blue-50 p-6 md:p-8" aria-labelledby="share-calculator-heading">
      <h2 id="share-calculator-heading" className="text-xl font-semibold text-slate-900">
        Share this free overtime calculator
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        If you like this free overtime calculator, please share it with friends, coworkers, or anyone who may find it useful.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <a className={buttonClass} href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer">X</a>
        <a className={buttonClass} href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className={buttonClass} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className={buttonClass} href={`https://wa.me/?text=${encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className={buttonClass} href={`mailto:?subject=${encodeURIComponent("Free State Overtime Calculator")}&body=${encodeURIComponent(`${SHARE_TEXT}\n\n${SHARE_URL}`)}`}>Email</a>
        <button type="button" className={buttonClass} onClick={copyLink}>Copy Link</button>
        <button type="button" className={buttonClass} onClick={shareMore} aria-describedby="instagram-share-note">Instagram / More</button>
      </div>

      <p id="instagram-share-note" className="mt-3 text-xs text-slate-500">
        On supported phones, “Instagram / More” opens your device&apos;s share menu, including Instagram and other installed apps.
      </p>
      <p className="mt-2 min-h-5 text-sm font-semibold text-blue-800" role="status" aria-live="polite">{copyStatus}</p>
    </aside>
  );
}
