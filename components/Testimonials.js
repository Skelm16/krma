export default function Testimonials() {
  const items = [
    {
      quote:
        "Their team shipped a compliant, production-grade LLM workflow in weeks. The assessment rigor and UX polish stood out.",
      person: "Elena Rossi · VP Product at FinEdge",
    },
    {
      quote:
        "A rare blend of research depth and engineering execution. They helped us reduce inference costs by 42% while improving quality.",
      person: "David Kim · CTO at NovaHealth",
    },
  ];

  return (
    <section className="py-16">
      <div className="container-tight">
        <h3 className="text-xl font-semibold">What clients say</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {items.map((t) => (
            <figure key={t.person} className="card p-6">
              <blockquote className="text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-muted">{t.person}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
