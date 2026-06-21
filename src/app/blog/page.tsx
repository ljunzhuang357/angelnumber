import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Angel Number Meanings Blog — Guides & Interpretations",
  description:
    "Read our complete guides to angel numbers. Learn what 111, 222, 444, and every other repeating number means for love, career, and spiritual growth.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Angel Number Meanings Blog — Guides & Interpretations",
    description:
      "Read our complete guides to angel numbers. Learn what every repeating number means for love, career, and spiritual growth.",
    url: "https://angelnumber.space/blog",
    siteName: "Angel Number",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Number Meanings Blog — Guides & Interpretations",
    description:
      "Read our complete guides to angel numbers. Learn what every repeating number means for love, career, and spiritual growth.",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: "#fefcfb" }}>
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight no-underline text-[#1a1a1a]">
            <img src="/logo.png" alt="Angel Number" className="w-7 h-7 rounded-[7px] object-contain" />
            Angel Number
          </Link>
          <div className="flex gap-2">
            <Link href="/blog" className="btn-ghost">Blog</Link>
            <Link href="/#tool" className="btn-ghost">Decode</Link>
            <Link href="/#meanings" className="btn-primary">Try Now</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-5 pt-[120px] pb-16 sm:pb-24">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "#1a1a1a" }}>
          Angel Number Meanings
        </h1>
        <p className="text-base mb-12 leading-relaxed" style={{ color: "#666" }}>
          In-depth guides to help you understand the repeating numbers you keep seeing.
        </p>

        <div className="flex flex-col gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-5 sm:p-6 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: "#fff",
                border: "1px solid #eee",
              }}
            >
              <time className="text-xs font-medium uppercase tracking-wider mb-2 block" style={{ color: "#d97757" }}>
                {post.date}
              </time>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 leading-snug" style={{ color: "#1a1a1a" }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
