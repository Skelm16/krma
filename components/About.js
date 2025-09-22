export default function About() {
  const values = [
    {
      title: "Human-centered",
      desc: "We design for clarity, control, and consent—prioritizing operator experience and end-user trust.",
    },
    {
      title: "Evidence-driven",
      desc: "We benchmark, evaluate, and iterate. Decisions are guided by data, not hype.",
    },
    {
      title: "Secure-by-default",
      desc: "Privacy, governance, and safety reviews are embedded in our delivery lifecycle.",
    },
    {
      title: "Production-first",
      desc: "From infra to interfaces, we build with reliability, observability, and maintainability in mind.",
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container-tight">
        <h2 className="text-3xl sm:text-4xl font-bold">About KRMA</h2>
        <p className="mt-4 text-muted max-w-3xl">
          Hi, I'm Krish — the founder and sole operator of KRMA. I help businesses unlock growth with powerful AI tools that save time, capture leads, and convert customers automatically.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold">Our Story & Mission</h3>
          <div className="mt-4 space-y-4 text-muted max-w-3xl">
            <p>
              KRMA delivers practical AI automation—from voice assistants to chatbots—that helps small and mid-sized businesses scale faster, smarter, and 24/7.
            </p>
            <p>
              Personal, one-on-one delivery. You work directly with Krish—from scoping to deployment—so there are no handoffs or delays.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold">Values & Approach</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="card p-6">
                <h4 className="font-semibold text-lg">{value.title}</h4>
                <p className="mt-2 text-sm text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
