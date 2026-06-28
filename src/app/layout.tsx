import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State Overtime Calculator | Free OT Pay Calculator",
  description: "Free overtime calculator with state-specific rules for all 50 US states plus Washington DC. Calculate your overtime pay based on federal FLSA and state labor laws.",
  verification: {
    google: "ca-pub-8738292939862414",
    other: {
      "msvalidate.01": "F46C57B6472F56041E049856E3333943",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8738292939862414"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
