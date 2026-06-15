"use client";

import { useState, useRef, useEffect } from "react";
import { ALL_KEYS, findAngelNumber, isPopular, POPULAR_KEYS, getEntry, type AngelEntry } from "@/data/angels";

const ACCENT = "#d97757";

function normalize(v: string) { return v.replace(/[^0-9]/g, ""); }

function findClosest(v: string): string[] {
  const found = ALL_KEYS.filter(k => k.includes(v));
  return found.slice(0, 5);
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<AngelEntry | null>(null);
  const [resultKey, setResultKey] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [shake, setShake] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function handleSearch(v: string) {
    const clean = normalize(v);
    if (!clean) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    const entry = findAngelNumber(clean);
    setResultKey(clean);
    if (entry) {
      setResult(entry);
      setNotFound(false);
      setSuggestions([]);
    } else {
      setResult(null);
      setNotFound(true);
      setSuggestions(findClosest(clean));
    }
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  }

  function handleChip(n: string) {
    setQuery(n);
    handleSearch(n);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ─── Nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-[1280px] mx-auto px-10 max-md:px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 text-[17px] font-semibold tracking-tight no-underline text-[#1a1a1a]">
            <span className="inline-flex items-center justify-center w-7 h-7 bg-[#1a1a1a] text-white rounded-[7px] text-sm">✦</span>
            Angel Number
          </a>
          <div className="flex gap-2">
            <a href="#tool" className="btn-ghost">Decode</a>
            <a href="#meanings" className="btn-primary">Try Now</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="min-h-screen flex flex-col justify-center pt-[120px] pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,119,87,0.06),transparent)]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-10 max-md:px-6 text-center">
          <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-4">✦ Free Spiritual Tool</p>
          <h1 className="text-[clamp(40px,6.5vw,72px)] font-semibold tracking-[-0.035em] leading-[1.05] max-w-[800px] mx-auto mb-5">
            The numbers you keep seeing are not random.
          </h1>
          <p className="text-[17px] text-[#666] leading-relaxed max-w-[520px] mx-auto mb-10">
            Enter any repeating number and discover its spiritual meaning across love, career, and life. Free, instant, no sign-up.
          </p>

          {/* ─── Tool ─── */}
          <div className="max-w-[640px] mx-auto mt-10 w-full" id="tool">
            <div className="bg-[#fafafa] border border-[#eee] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
              {/* Browser bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#eee] bg-white/60">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[12px] text-[#999] bg-[#f0f0f0] px-3.5 py-1 rounded-md font-['JetBrains_Mono',monospace]">angelnumber.space</span>
                <div className="w-[52px]" />
              </div>
              {/* Tool body */}
              <div className="p-8 max-sm:p-6">
                <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-2">What number is following you?</p>
                <div className="flex gap-2.5 max-w-[400px] mx-auto flex-wrap justify-center">
                  <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch(query)}
                    inputMode="numeric" pattern="[0-9]*" placeholder="e.g. 111, 444, 1212" maxLength={6}
                    className={`flex-1 min-w-[160px] px-4 py-3.5 border border-[#eee] rounded-xl text-base outline-none transition-all bg-white
                      ${shake ? "shake" : ""} focus:border-[#d97757] focus:shadow-[0_0_0_4px_rgba(217,119,87,0.1)]`} />
                  <button onClick={() => handleSearch(query)}
                    className="btn-accent">Decode</button>
                </div>

                {/* Chips — only popular */}
                <div className="flex gap-2 flex-wrap justify-center mt-7">
                  {POPULAR_KEYS.slice(0, 16).map(n => {
                    const e = getEntry(n);
                    return (
                      <button key={n} onClick={() => handleChip(n)}
                        className="px-4 py-1.5 rounded-full border border-[#eee] bg-white text-[13px] text-[#666] cursor-pointer transition-all
                          hover:border-[#d97757] hover:text-[#d97757] hover:bg-[#fef6f3] font-['Inter']">
                        {n}
                      </button>
                    );
                  })}
                </div>

                {/* Result card */}
                {result && (
                  <div ref={resultRef} className="mt-8 border border-[#eee] rounded-xl overflow-hidden bg-white text-left">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[#eee]">
                      <span className="text-[28px] font-bold tracking-[-0.02em]">{resultKey}</span>
                      <span className="text-[11px] font-medium text-[#d97757] bg-[#fef6f3] px-3 py-1 rounded-md uppercase tracking-[0.04em]">{result.badge}</span>
                    </div>
                    <div className="px-6 pt-4 text-[18px] font-semibold">{result.title}</div>
                    <div className="px-6 pb-5 pt-2 text-[15px] text-[#666] leading-relaxed">{result.body}</div>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 border-t border-[#eee]">
                      {[
                        ["❤️ Love", result.love],
                        ["💼 Career", result.career],
                        ["✨ Spiritual", result.spiritual],
                        ["🌟 Guidance", result.guidance],
                      ].map(([label, text], i) => (
                        <div key={i}
                          className={`px-5 py-4.5 ${i % 2 === 0 ? "border-r border-[#eee] max-sm:border-r-0" : ""} ${i >= 2 ? "" : "border-b border-[#eee]"}`}>
                          <h4 className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#bbb] mb-1.5">{label}</h4>
                          <p className="text-[14px] text-[#666] leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Not found */}
                {notFound && (
                  <div ref={resultRef} className="mt-8 border border-[#eee] rounded-xl overflow-hidden bg-white text-left">
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[#eee] bg-[#fef6f3]">
                      <span className="text-[28px] font-bold tracking-[-0.02em] text-[#999]">{resultKey}</span>
                      <span className="text-[11px] font-medium text-[#d97757] bg-[#fef6f3] px-3 py-1 rounded-md uppercase tracking-[0.04em]">Not Found</span>
                    </div>
                    <div className="px-6 pt-4 text-[18px] font-semibold text-[#999]">We don't have this one yet</div>
                    <div className="px-6 pb-5 pt-2 text-[15px] text-[#666] leading-relaxed">
                      We're adding new numbers regularly. In the meantime, try one of these similar numbers:
                    </div>
                    {suggestions.length > 0 && (
                      <div className="px-6 pb-5">
                        <p className="text-[12px] text-[#999] mb-1 font-semibold">Try instead:</p>
                        <div className="flex gap-2 flex-wrap">
                          {suggestions.map(s => (
                            <button key={s} onClick={() => handleChip(s)}
                              className="px-3 py-1 rounded-xl border border-[#eee] text-[13px] cursor-pointer transition-all
                                hover:border-[#d97757] hover:text-[#d97757] hover:bg-[#fef6f3]">
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Popular Numbers Grid ─── */}
      <section className="bg-[#1a1a1a] text-white py-24 relative" id="meanings">
        <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0.06)_12px,transparent_12px,transparent_24px)]" />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6">
          <div className="text-center mb-12">
            <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-4">Meanings</p>
            <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold tracking-[-0.028em] leading-[1.12]">Common angel numbers</h2>
            <p className="text-[17px] text-white/55 leading-relaxed max-w-[480px] mx-auto mt-3">Each number carries a unique message. Here's what the most frequently seen ones mean.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-3 items-stretch">
            {POPULAR_KEYS.slice(0, 24).map(k => {
              const e = getEntry(k);
              if (!e) return null;
              return (
                <button key={k} onClick={() => { setQuery(k); handleSearch(k); }}
                  className="flex flex-col items-center text-center py-7 px-4 border border-white/[0.08] rounded-xl cursor-pointer transition-all
                    hover:border-[#d97757] hover:bg-[rgba(217,119,87,0.04)] hover:-translate-y-0.5">
                  <div className="text-[26px] font-bold tracking-[-0.02em] text-white mb-0.5">{k}</div>
                  <div className="text-[11px] text-[#d97757] font-medium uppercase tracking-[0.04em] min-h-[16px]">{e.badge}</div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-[13px] text-white/45 leading-relaxed">{e.title}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(90deg,#eee_0,#eee_12px,transparent_12px,transparent_24px)]" />
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6">
          <div className="text-center mb-12">
            <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-4">Why This Tool</p>
            <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold tracking-[-0.028em] leading-[1.12]">Clear meanings, not vague spiritual talk</h2>
            <p className="text-[17px] text-[#666] leading-relaxed max-w-[480px] mx-auto mt-3">We break down each number into four practical areas so you get real guidance you can use.</p>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[2px] border border-[#eee] rounded-2xl overflow-hidden bg-[#eee]">
            {[
              ["⚡ Free & Instant", "No sign-up, no paywall. Enter your number and get your answer immediately."],
              ["📊 Life-Area Breakdown", "Love, career, spiritual, and guidance — all in one clear view."],
              ["📖 Complete Coverage", "From 000 to 2121, we cover the most common angel numbers you'll encounter."],
              ["🌙 Beginner-Friendly", "Each result explains the meaning in plain language. No spiritual jargon."],
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-10 max-md:p-8">
                <h3 className="text-[18px] font-semibold mb-2.5 tracking-[-0.01em]">{title}</h3>
                <p className="text-[15px] text-[#666] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-[repeating-linear-gradient(90deg,#eee_0,#eee_12px,transparent_12px,transparent_24px)]" />
        <div className="max-w-[640px] mx-auto px-10 max-md:px-6">
          <div className="text-center mb-10">
            <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-4">FAQ</p>
            <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold tracking-[-0.028em] leading-[1.12]">Common questions</h2>
          </div>
          {[
            { q: "What are angel numbers?", a: "Angel numbers are repeating number sequences like 111, 444, or 1212 that carry spiritual meaning. Many believe they are messages from the universe, spirit guides, or your higher self." },
            { q: "How do I know if I'm seeing one?", a: "If the same number keeps appearing in unexpected places — clocks, receipts, license plates — and it feels meaningful rather than random, that is likely an angel number." },
            { q: "Is this completely free?", a: "Yes, it is completely free. No hidden charges, no credit card required. Every number meaning is fully accessible to everyone, always." },
            { q: "What if my number isn't listed?", a: `We cover ${ALL_KEYS.length} angel numbers across all common patterns. If yours isn't here, try a similar repeating pattern — for example, 2222 carries the same energy as 222.` },
            { q: "Why do I keep seeing the same number?", a: "Repetition is the universe's way of making sure you pay attention. When the same number appears across different contexts repeatedly, it means the message is important and timely." },
          ].map((faq, i) => (
            <div key={i} className="border-b border-[#eee] last:border-b-0">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex justify-between items-center w-full py-5 text-[16px] font-medium bg-none border-none cursor-pointer text-[#1a1a1a] text-left transition-colors hover:text-[#d97757]">
                {faq.q}
                <span className={`text-[13px] text-[#ccc] flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180 text-[#d97757]" : ""}`}>▾</span>
              </button>
              {openFaq === i && (
                <div className="pb-5 text-[15px] text-[#666] leading-relaxed">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#1a1a1a] text-white py-28 text-center">
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6">
          <p className="font-['JetBrains_Mono',monospace] text-[11px] font-medium uppercase tracking-[0.06em] text-[#d97757] mb-4">Try It</p>
          <h2 className="text-[clamp(28px,3.2vw,42px)] font-semibold tracking-[-0.028em] leading-[1.12]">What number is following you?</h2>
          <p className="text-[17px] text-white/55 leading-relaxed max-w-[480px] mx-auto mt-3 mb-8">Type it into the tool and discover the message the universe has been trying to send you.</p>
          <a href="#tool" className="inline-flex items-center justify-center gap-1.5 bg-white text-[#1a1a1a] px-8 py-3.5 rounded-xl font-medium no-underline transition-all hover:bg-gray-100">✦ Go to Tool</a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#eee] py-14">
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-6">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-8">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#bbb] mb-3.5">✦ Angel Number</h4>
              <p className="text-[14px] text-[#999] leading-relaxed max-w-[260px]">Decode the numbers the universe keeps showing you. Free spiritual guidance tool.</p>
            </div>
            {[
              ["Tool", ["Decode a Number", "All Meanings"]],
              ["Resources", ["What Are Angel Numbers", "How It Works"]],
              ["Legal", ["Privacy Policy", "Terms of Use"]],
            ].map(([title, links], i) => (
              <div key={i}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#bbb] mb-3.5">{title}</h4>
                {(links as string[]).map((link, j) => (
                  <a key={j} href="#" className="block text-[14px] text-[#666] no-underline py-1.5 transition-colors hover:text-[#1a1a1a]">{link}</a>
                ))}
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#ccc] mt-10 pt-6 border-t border-[#eee]">&copy; 2026 Angel Number. Free spiritual tool.</p>
        </div>
      </footer>

    </div>
  );
}
