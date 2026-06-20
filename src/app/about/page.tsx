import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Angel Number",
  description: "Angel Number is a free spiritual guidance tool. Learn about our mission, how the numbers work, and why we built this site.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16 sm:py-24">
      <Link href="/" className="inline-flex items-center gap-1 text-sm mb-10" style={{ color: "#999" }}>← Back to decoder</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Angel Number</h1>

      <div className="text-[#555] leading-relaxed space-y-4">
        <p>
          Angel numbers are repeating sequences of numbers—like 111, 444, or 1212—that many
          people believe carry messages from the universe, spirit guides, or higher consciousness.
          This site is a free tool that helps you understand what the numbers you keep seeing might mean.
        </p>
        <p>
          Unlike vague horoscopes or generic fortune-telling, angel number interpretations are
          grounded in numerology—an ancient system that assigns meaning to numbers based on their
          vibrational energy. Each number carries a specific message about love, career, personal
          growth, or spiritual direction.
        </p>
        <p>
          We built this site because most angel number resources are either buried in spiritual
          forums, locked behind paywalls, or written in dense esoteric language. Our goal is to
          make angel number meanings accessible, clear, and useful—no matter where you are in
          your spiritual journey.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#1a1a1a]">How It Works</h2>
        <p>
          Enter any number you've been seeing repeatedly—whether it's 111, 444, 1212, or a less
          common pattern—and our tool generates an interpretation across four areas: love, career,
          spiritual meaning, and practical guidance. The interpretations are based on established
          numerological principles and expanded with practical, actionable advice.
        </p>
        <p>
          Every number in our database has been hand-crafted by our team. For numbers we haven't
          pre-written, our system generates meaningful interpretations based on the number's
          component digits and pattern type (mirror, sequence, repetition, etc.).
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3 text-[#1a1a1a]">Disclaimer</h2>
        <p className="text-sm p-4 rounded-xl" style={{ background: "#fef6f3", border: "1px solid #e8d5c8" }}>
          <strong>For informational and entertainment purposes only.</strong> Angel number interpretations
          are meant for spiritual guidance and self-reflection. They are not predictions, psychic
          readings, or substitutes for professional advice—whether medical, legal, financial, or
          psychological. Always consult qualified professionals for serious life decisions.
        </p>
      </div>
    </main>
  );
}
