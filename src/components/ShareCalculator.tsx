"use client";

import { useState } from "react";

const DEFAULT_SHARE_URL = "https://stateovertime.com/";
const DEFAULT_SHARE_TEXT = "Like this free overtime calculator? Share StateOvertime.com with someone who could use it.";

const buttonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-800 shadow-sm transition-colors hover:border-blue-400 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";

export default function ShareCalculator({
  shareUrl = DEFAULT_SHARE_URL,
  shareText = DEFAULT_SHARE_TEXT,
  shareTitle = "State Overtime Calculator",
}: {
  shareUrl?: string;
  shareText?: string;
  shareTitle?: string;
}) {
  const [copyStatus, setCopyStatus] = useState("");

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("Link copied!");
    } catch {
      setCopyStatus("Copy failed. Please copy stateovertime.com manually.");
    }
  };

  const shareMore = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    await copyLink();
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(shareText);

  return (
    <aside className="mt-5 rounded-lg border border-slate-200 bg-white px-5 py-4 shadow-sm sm:px-6 sm:py-5" aria-label="Share calculator">
      <p className="text-base leading-relaxed text-slate-700">
        If you like this calculator, please share it with friends, coworkers, or anyone who may find it useful.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a className={buttonClass} href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="Share on X">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.82l4.72 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" /></svg>
        </a>
        <a className={buttonClass} href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Share on Facebook">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.59-1.56h1.7V3.34c-.29-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23V9.8H7.45V13h2.76v8h3.29Z" /></svg>
        </a>
        <a className={buttonClass} href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="Share on LinkedIn">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M5.34 3.5a1.84 1.84 0 1 1 0 3.68 1.84 1.84 0 0 1 0-3.68ZM3.75 8.5h3.18V20H3.75V8.5Zm5.35 0h3.05v1.57h.04c.43-.8 1.46-1.94 3.01-1.94 3.22 0 3.82 2.12 3.82 4.88V20h-3.18v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27V20H9.1V8.5Z" /></svg>
        </a>
        <a className={buttonClass} href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="Share on WhatsApp">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7l-4.2 1.3 1.4-4A8 8 0 1 1 20 11.5Z" /><path d="M8.5 8.5c.8 3 2 4.2 5 5" /><path d="m8.4 8.3 1-1.1M13.7 13.6l1.1-1" /></svg>
        </a>
        <a className={buttonClass} href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`} aria-label="Share by email" title="Share by email">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
        </a>
        <button type="button" className={buttonClass} onClick={copyLink} aria-label="Copy page link" title="Copy link">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" /></svg>
        </button>
        <button type="button" className={buttonClass} onClick={shareMore} aria-label="Open more sharing options" title="More sharing options">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
        </button>
      </div>

      {copyStatus && (
        <p className="mt-2 text-sm font-semibold text-blue-800" role="status" aria-live="polite">
          {copyStatus}
        </p>
      )}
    </aside>
  );
}
