import Link from "next/link";

type SiteHeaderProps = {
  activePage?: "calculator" | "state-laws" | "california-overtime-laws" | "about" | "contact";
};

const defaultLinkClass = "pb-2 text-slate-200 transition-colors hover:text-white";
const activeLinkClass = "border-b-2 border-blue-400 pb-2 text-white";

export function SiteHeader({ activePage }: SiteHeaderProps) {
  const lawsMenuIsActive = activePage === "state-laws" || activePage === "california-overtime-laws";

  return (
    <header className="bg-[#071b35] text-white shadow-sm">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-5">
          <Link href="/" className="shrink-0 text-xl font-extrabold tracking-tight sm:text-2xl">
            STATE OVERTIME
          </Link>
          <span className="hidden border-l border-white/20 pl-5 text-sm text-slate-200 lg:block">
            Overtime pay calculator &amp; state laws
          </span>
        </div>

        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold sm:gap-x-8">
          <a
            href="/#calculator"
            aria-current={activePage === "calculator" ? "page" : undefined}
            className={activePage === "calculator" ? activeLinkClass : defaultLinkClass}
          >
            Calculator
          </a>

          <details className="group relative">
            <summary
              className={`flex cursor-pointer list-none items-center gap-1 rounded-sm pb-2 transition-colors marker:content-none focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071b35] [&::-webkit-details-marker]:hidden ${
                lawsMenuIsActive
                  ? "border-b-2 border-blue-400 text-white"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              State Laws
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <div className="absolute left-0 z-20 mt-2 w-60 overflow-hidden rounded-md border border-slate-200 bg-white py-1 text-sm font-semibold text-[#071b35] shadow-lg">
              <Link
                href="/state-laws"
                aria-current={activePage === "state-laws" ? "page" : undefined}
                className={`block px-4 py-3 transition-colors hover:bg-blue-50 hover:text-blue-800 focus:bg-blue-50 focus:text-blue-800 focus:outline-none ${
                  activePage === "state-laws" ? "bg-blue-50 text-blue-800" : ""
                }`}
              >
                All State Laws
              </Link>
              <Link
                href="/california-overtime-laws"
                aria-current={activePage === "california-overtime-laws" ? "page" : undefined}
                className={`block border-t border-slate-100 px-4 py-3 transition-colors hover:bg-blue-50 hover:text-blue-800 focus:bg-blue-50 focus:text-blue-800 focus:outline-none ${
                  activePage === "california-overtime-laws" ? "bg-blue-50 text-blue-800" : ""
                }`}
              >
                California Overtime Laws
              </Link>
            </div>
          </details>

          <Link
            href="/about"
            aria-current={activePage === "about" ? "page" : undefined}
            className={activePage === "about" ? activeLinkClass : defaultLinkClass}
          >
            About
          </Link>
          <Link
            href="/contact"
            aria-current={activePage === "contact" ? "page" : undefined}
            className={activePage === "contact" ? activeLinkClass : defaultLinkClass}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
