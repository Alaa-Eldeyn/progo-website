import Image from "next/image";
import squares from "@/app/assets/gridsq.svg";
import SectionTitle from "./ui/SectionTitle";
import { roadmapSteps } from "@/data";
import { TracingBeam } from "./ui/TrackingBeam";
import { useTranslations } from "next-intl";

function Roadmap() {
  const t = useTranslations();
  return (
    <>
      <div className="container max-w-7xl mx-auto my-5 lg:my-10">
        <SectionTitle
          title="The project timeline"
          subtitle="Your Roadmap to Success, Step by Step"
        />
      </div>
      <section className="relative text-white">
        <TracingBeam>
          <div className="container max-w-7xl mx-auto gap-5 flex flex-col items-center md:items-start py-0 lg:py-16">
            <Image
              src={squares}
              width={400}
              height={1080}
              alt="Roadmap"
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
            />
            <Image
              src={squares}
              width={400}
              height={1080}
              alt="Roadmap"
              className="absolute bottom-[77px] left-1/2 -translate-x-1/2 z-0"
            />
            {roadmapSteps.map((step, index) => (
              <div
                key={index}
                className={`max-w-md lg:max-w-lg z-10 border border-neutral-800 hover:border-primary group soft rounded-xl
            ${index % 2 === 0 ? "md:self-end" : ""}    
            `}
              >
                <div
                  className={`space-y-4 max-w-md lg:max-w-lg bg-muted p-7 rounded-xl`}
                >
                  <h2 className="text-xl lg:text-2xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-tr from-white to-white soft group-hover:from-[#242B37] group-hover:to-[#EA4054]">
                      #{index + 1}{" "}
                    </span>
                    {t(step.title)}
                  </h2>
                  <p className=" text-[#718096]">{t(step.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </section>
    </>
  );
}

export default Roadmap;
