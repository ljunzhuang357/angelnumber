import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getRelatedPosts, linkifyParagraph, numberFromSlug } from "@/data/blog";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const currentNum = numberFromSlug(slug);
  const renderPara = (text: string) => linkifyParagraph(text, currentNum);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Angel Number",
      url: "https://angelnumber.space",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://angelnumber.space/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen" style={{ background: "#fefcfb" }}>
        <article className="mx-auto max-w-2xl px-5 py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm mb-10"
            style={{ color: "#999" }}
          >
            ← Back to blog
          </Link>

          <time className="text-xs font-medium uppercase tracking-wider mb-3 block" style={{ color: "#d97757" }}>
            {post.date}
          </time>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight" style={{ color: "#1a1a1a" }}>
            {post.title}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed mb-12" style={{ color: "#5a5a5a" }}>
            {post.description}
          </p>

          <div className="prose-container max-w-none">
            {post.sections.map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 leading-snug" style={{ color: "#1a1a1a" }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed mb-4 last:mb-0"
                    style={{ color: "#444" }}
                  >
                    {renderPara(p)}
                  </p>
                ))}
                {section.faq && (
                  <div className="mt-8 space-y-4">
                    {section.faq.map((item, k) => (
                      <details
                        key={k}
                        className="rounded-xl overflow-hidden"
                        style={{ background: "#fff", border: "1px solid #eee" }}
                      >
                        <summary
                          className="cursor-pointer font-medium px-5 py-4 text-sm leading-snug"
                          style={{ color: "#1a1a1a" }}
                        >
                          {item.question}
                        </summary>
                        <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#666" }}>
                          {renderPara(item.answer)}
                        </p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Related posts */}
          {(() => {
            const related = getRelatedPosts(post.slug);
            if (related.length === 0) return null;
            return (
              <div className="mt-12 pt-8 border-t" style={{ borderColor: "#eee" }}>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#999" }}>
                  Related Articles
                </h3>
                <div className="flex flex-col gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="block p-4 rounded-lg transition-all hover:-translate-y-0.5"
                      style={{ background: "#fafafa", border: "1px solid #eee" }}
                    >
                      <span className="text-sm font-medium leading-snug block" style={{ color: "#1a1a1a" }}>
                        {r.title}
                      </span>
                      <span className="text-xs mt-1 block" style={{ color: "#999" }}>
                        {r.description.slice(0, 100)}…
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          <div className="mt-8 pt-6 border-t" style={{ borderColor: "#eee" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-sm"
              style={{ color: "#d97757" }}
            >
              ← Back to free angel number decoder
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://angelnumber.space/blog/${post.slug}`,
      siteName: "Angel Number",
      type: "article",
      locale: "en_US",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}
