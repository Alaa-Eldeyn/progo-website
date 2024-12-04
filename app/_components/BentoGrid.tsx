import Image from "next/image";
import uiux from "../assets/Frame 1410094139.svg";
import security from "../assets/Frame 1410094140.svg";
import follow from "../assets/Frame 1410094145.svg";
import achieve from "../assets/Frame 1410094141.svg";
import solution from "../assets/Frame 1410094144.svg";
import effortless from "../assets/Frame 1410094146.svg";
import reliable from "../assets/Frame 1410094147.svg";

function BentoGrid() {
  return (
    <section className="pt-24 pb-32">
      <div className="container text-center center flex-col gap-4 max-w-7xl">
        <p className="text-primary">
          Innovating Solutions, Delivering Excellence
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold max-w-3xl">
          Choose PROGO for Innovation and Excellence
        </h1>
        <h2 className="text-md lg:text-lg max-w-xl">
          We provide programming and design services that meet your needs
          efficiently and innovatively
        </h2>
        <div className="grid grid-cols-12 lg:grid-rows-3 gap-5 w-full">
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-8 bg-muted min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={uiux}
                alt={"Innovative and Unique Design UI&UX"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Innovative and Unique Design UI&UX
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                We provide unique and creative designs that reflect your brand’s
                identity and offer an exceptional user experience.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-4 bg-muted md:col-start-9 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={security}
                alt={"Thorough Security Analysis"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Thorough Security Analysis
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                We conduct in-depth checks to ensure your data and applications
                are protected from threats and vulnerabilities.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-4 bg-muted md:col-start-1 md:row-start-2 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={follow}
                alt={"Achieve a breakthrough in your project"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Continuous follow-up of the project
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                We provide a tailored system to track your project&apos;s
                progress and offer accurate, up-to-date reports.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-8 bg-muted md:col-start-5 md:row-start-2 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={achieve}
                alt={"Continuous follow-up of the project"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Achieve a breakthrough in your project
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                We help propel your project forward with innovative and advanced
                solutions, delivering outstanding results
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-4 bg-muted md:row-start-3 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={solution}
                alt={"Scalable Solutions"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Scalable Solutions</h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                Our custom solutions are scalable to accommodate growth and
                increase the capacity to handle a larger number of users or data
                without impacting the speed or stability of the system.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-4 bg-muted md:col-start-5 md:row-start-3 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={effortless}
                alt={"Effortless Maintenance, Maximum Performance"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Effortless Maintenance, Maximum Performance
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                Easily maintainable solutions, which means that the system or
                application we develop will be able to be flexibly updated and
                modified without affecting its performance.
              </p>
            </div>
          </div>
          <div className="rounded-lg p-5 flex flex-col gap-5 col-span-full md:col-span-4 bg-muted md:col-start-9 md:row-start-3 min-h-[350px]">
            <div className="h-[200px] mb-3">
              <Image
                src={reliable}
                alt={"Reliable Solutions, Uninterrupted Performance"}
                width={220}
                height={220}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Reliable Solutions, Uninterrupted Performance
              </h3>
              <p className="text-md sm:text-lg text-[#A9A9A9] max-w-md mx-auto">
                Highly reliable solutions, which means that the system or
                application we provide will always be available to operate
                continuously without interruptions or errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default BentoGrid;
