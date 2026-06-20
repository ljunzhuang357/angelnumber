import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Angel Number",
  description: "Get in touch with the Angel Number team. Suggestions, questions, or number meanings you think we missed?",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16 sm:py-24">
      <Link href="/" className="inline-flex items-center gap-1 text-sm mb-10" style={{ color: "#999" }}>← Back to decoder</Link>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h1>

      <div className="text-[#555] leading-relaxed space-y-4">
        <p>
          Have a question about a number meaning? A suggestion for a number we haven't covered?
          Or just want to share your experience with angel numbers? We'd love to hear from you.
        </p>
        <p>
          We're also open to collaboration, guest post ideas, and feedback about how we can
          make the tool more useful.
        </p>
        <p className="mt-6">
          Email: <a href="mailto:support@angelnumber.space" className="text-[#d97757] underline font-medium">support@angelnumber.space</a>
        </p>
        <p className="text-sm mt-8 p-4 rounded-xl" style={{ background: "#fafafa", border: "1px solid #eee" }}>
          Response time: usually within 24–48 hours. We read every message.
        </p>
      </div>
    </main>
  );
}
