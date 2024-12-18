import { navItems } from "@/data";
import Hero from "../_components/Hero";
import { FloatingNav } from "../_components/ui/FloatingNav";
import Companies from "../_components/Companies";
import About from "../_components/About";
import Values from "../_components/Values";
import Services from "../_components/Services";
import NumberAndDetails from "../_components/NumberAndDetails";
import BentoGrid from "../_components/BentoGrid";
import Projects from "../_components/Projects";
import Roadmap from "../_components/Roadmap";
import Reviews from "../_components/Reviews";
import Faq from "../_components/Faq";
import ContactUs from "../_components/ContactUs";
import Footer from "../_components/Footer";
import TeamMembers from "../_components/TeamMembers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
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
        <TeamMembers />
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
