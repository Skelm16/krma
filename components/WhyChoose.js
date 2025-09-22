export default function WhyChoose() {
  const items = [
    {
      title: "Personal, one-on-one",
      desc: "You deal directly with Krish—no handoffs or layers.",
    },
    {
      title: "Affordable monthly",
      desc: "Simple plans aligned to outcomes—not billable hours.",
    },
    {
      title: "Cutting-edge stack",
      desc: "Voice AI, ElevenLabs, and automation workflows built-in.",
    },
    {
      title: "Proven impact",
      desc: "Save time, increase leads, and boost revenue within weeks.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container-tight">
        <h2 className="text-3xl sm:text-4xl font-bold">Why Choose KRMA</h2>
        <p className="mt-2 text-muted max-w-2xl">Work directly with Krish for fast, personal delivery using cutting-edge tools.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
