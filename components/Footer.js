import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border/60">
      <div className="container-tight py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <p className="font-semibold">KRMA AI Agency</p>
            <p className="mt-2 text-sm text-muted">Practical AI automations delivered fast by founder Krish Sriram.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-accent">About</a></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>AI Voice Assistant (Phone Calls)</li>
              <li>WhatsApp Automation</li>
              <li>Instagram & Facebook Automation</li>
              <li>Website AI Chatbot</li>
              <li>Custom AI Projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>krishgobindsriram16@gmail.com</li>
              <li>+91 9445582870</li>
              <li>Chennai, India (IST)</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6 text-xs text-muted">
          <p>© 2025 KRMA AI Agency. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-accent" href="#">Privacy Policy</a>
            <a className="hover:text-accent" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
