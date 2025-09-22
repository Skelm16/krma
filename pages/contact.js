import Head from "next/head";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact - KRMA • Krish&apos;s AI Agency</title>
      </Head>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
