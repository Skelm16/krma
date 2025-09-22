import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-tight pt-32 pb-16 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          KRMA – Krish's AI Agency
        </div>
        <h1 className="mx-auto max-w-3xl text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Future-Proof Your
          <br />
          Business with AI
          <br />
          Automation
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted">
          From voice assistants to chatbots, we help businesses scale faster, smarter,
          and 24/7.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary">Let's Talk</Link>
          <a href="#services" className="btn-secondary">View Services</a>
        </div>
        <p className="mt-6 text-xs text-muted">Work directly with Krish — no handoffs, just results in weeks.</p>
      </div>
    </section>
  );
}
