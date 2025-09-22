export default function Contact() {
  return (
    <section className="py-12">
      <div className="container-tight">
        <div className="card p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted">Get in touch</p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold">Let&apos;s talk about your AI automation</h1>
              <p className="mt-2 text-muted">Share a few details and Krish will follow up for a quick consultation. Typically within 1 business day.</p>

              <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Name</span>
                  <input className="mt-1 w-full rounded-md bg-white/5 border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Krish Sriram" />
                </label>
                <label className="block">
                  <span className="text-sm">Business Name</span>
                  <input className="mt-1 w-full rounded-md bg-white/5 border border-border px-3 py-2" placeholder="KRMA — Krish&apos;s AI Agency" />
                </label>
                <label className="block">
                  <span className="text-sm">Email</span>
                  <input type="email" className="mt-1 w-full rounded-md bg-white/5 border border-border px-3 py-2" placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className="text-sm">Phone / WhatsApp</span>
                  <input className="mt-1 w-full rounded-md bg-white/5 border border-border px-3 py-2" placeholder="+1 (000) 000-0000" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm">Message</span>
                  <textarea rows={4} className="mt-1 w-full rounded-md bg-white/5 border border-border px-3 py-2" placeholder="Tell us about your goals and timeline." />
                </label>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <p className="text-xs text-muted">By submitting, you agree to our privacy policy. We&apos;ll never share your info.</p>
                  <button type="button" className="btn-primary">Send message</button>
                </div>
              </form>
            </div>
            <div className="w-full lg:max-w-sm">
              <div className="card p-5">
                <h3 className="font-semibold">Contact information</h3>
                <ul className="mt-3 space-y-3 text-sm">
                  <li><span className="text-muted">EMAIL</span><br />krishgobindsriram16@gmail.com</li>
                  <li><span className="text-muted">WHATSAPP</span><br />+91 9445582870</li>
                  <li><span className="text-muted">LOCATION</span><br />Chennai, India (IST)</li>
                  <li><span className="text-muted">BUSINESS HOURS</span><br />Mon–Fri, 9:00–18:00 IST</li>
                </ul>
              </div>
              <div className="card p-5 mt-4">
                <h3 className="font-semibold">What happens next</h3>
                <p className="mt-2 text-sm text-muted">After you submit the form, Krish will reach out to schedule a 20–30 minute consultation and outline next steps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
