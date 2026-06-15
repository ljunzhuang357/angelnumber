import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Number — Decode the numbers you keep seeing",
  description: "Enter any repeating number and discover its spiritual meaning across love, career, and life. Free, instant, no sign-up.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-['Inter',-apple-system,BlinkMacSystemFont,sans-serif] text-[#1a1a1a] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
