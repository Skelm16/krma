import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";
import Founder from "../components/Founder";
import Testimonials from "../components/Testimonials";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Founder />
        <Testimonials />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
