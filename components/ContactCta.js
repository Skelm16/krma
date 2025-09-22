import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="py-16">
      <div className="container-tight">
        <div className="card p-8 text-center">
          <h3 className="text-3xl font-bold">Ready to Automate Your Business?</h3>
          <p className="mt-2 text-muted">Book a free demo call and see what KRMA can do for you.</p>
          <div className="mt-6">
            <Link href="/contact" className="btn-primary">Book a Free Demo Call</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
