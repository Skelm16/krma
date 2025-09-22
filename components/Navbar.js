import Link from "next/link";
import { useRouter } from "next/router";

const navItems = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container-tight h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">KRMA<span className="text-accent">•</span></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`hover:text-accent transition-colors ${router.pathname === item.href ? "text-accent" : "text-white"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary hidden sm:inline-flex">Book a Free Demo Call →</Link>
      </div>
    </header>
  );
}
