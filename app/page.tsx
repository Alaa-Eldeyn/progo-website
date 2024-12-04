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
      </main>
    </>
  );
}
