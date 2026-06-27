import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "State Overtime Calculator | Free OT Pay Calculator",
  description:
    "Free overtime calculator with state-specific rules for California, Alaska, Nevada, and federal FLSA. Calculate your overtime pay in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
