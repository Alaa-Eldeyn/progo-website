import { navItems } from "@/data";
import Hero from "./_components/Hero";
import { FloatingNav } from "./_components/ui/FloatingNav";
import Companies from "./_components/Companies";
import About from "./_components/About";
import Values from "./_components/Values";
import Services from "./_components/Services";
import NumberAndDetails from "./_components/NumberAndDetails";
import BentoGrid from "./_components/BentoGrid";
import Projects from "./_components/Projects";
import Head from "next/head";
import Roadmap from "./_components/Roadmap";
import Reviews from "./_components/Reviews";
import Faq from "./_components/Faq";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Progo</title>
        <meta name="description" content="Progo" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Progo" />
        <link rel="icon" href="/Progo.svg" />
      </Head>
      <main className="overflow-x-clip">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Companies />
        <About />
        <Values />
        <Services />
        <NumberAndDetails />
        <BentoGrid />
        <Projects />
        <Roadmap />
        <Reviews />
        <Faq />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
