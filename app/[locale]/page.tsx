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

export default function Home() {
  return (
    <>
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
