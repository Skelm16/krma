export default function Services() {
  const items = [
    {
      title: "AI Voice Assistant (Phone Calls)",
      desc: "Automate customer calls with lifelike AI agents that sound human, answer FAQs, collect leads, and set appointments.",
      bullets: [
        "Natural, human-like voice",
        "Lead capture & qualification",
        "Calendar booking & CRM notes",
      ],
    },
    {
      title: "WhatsApp Automation",
      desc: "Smart bots that reply instantly, handle customer queries, send updates, and increase conversions.",
      bullets: ["Instant replies 24/7", "Broadcast updates & reminders", "Seamless handoff to human"],
    },
    {
      title: "Instagram & Facebook Automation",
      desc: "AI-powered chatbots that engage followers, boost sales, and handle DMs automatically.",
      bullets: ["Auto-reply to DMs", "Product Q&A & sales flows", "Giveaways & lead magnets"],
    },
    {
      title: "Website AI Chatbot",
      desc: "A 24/7 intelligent assistant on your site that answers questions, captures leads, and improves customer experience.",
      bullets: ["Site search & FAQs", "Lead forms & email capture", "Analytics & improvement loops"],
    },
    {
      title: "Custom AI Projects",
      desc: "Need something unique? We build tailored AI solutions for your business workflow.",
      bullets: ["Bespoke workflows", "System integrations", "Security & guardrails"],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container-tight">
        <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
        <p className="mt-2 text-muted max-w-2xl">Practical automations that save time, capture leads, and boost revenue.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
              <div className="mt-4">
                <p className="text-xs text-muted font-semibold">KEY BENEFITS</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent inline-block" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(3).map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.desc}</p>
              <div className="mt-4">
                <p className="text-xs text-muted font-semibold">KEY BENEFITS</p>
                <ul className="mt-2 space-y-1 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent inline-block" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
