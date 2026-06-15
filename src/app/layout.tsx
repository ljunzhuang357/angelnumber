import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://angelnumber.space";

export const metadata: Metadata = {
  title: "Angel Number — Decode the numbers you keep seeing",
  description: "Enter any repeating number and discover its spiritual meaning across love, career, and life. Free, instant, no sign-up.",
  metadataBase: new URL(SITE),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Angel Number — Decode the numbers you keep seeing",
    description: "Enter any repeating number and discover its spiritual meaning across love, career, and life. Free, instant, no sign-up.",
    url: SITE,
    siteName: "Angel Number",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Number — Decode the numbers you keep seeing",
    description: "Enter any repeating number and discover its spiritual meaning across love, career, and life. Free, instant, no sign-up.",
  },
  robots: { index: true, follow: true },
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
