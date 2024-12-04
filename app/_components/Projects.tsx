import { projects } from "@/data";
import Image from "next/image";

function Projects() {
  return (
    <section className=" pb-32" id="portfolio">
      <div className="container text-center center flex-col gap-4 max-w-7xl">
        <p className="text-primary">Our Projects</p>
        <h1 className="text-3xl lg:text-5xl font-bold max-w-3xl">
          Where Innovation Meets Excellence, Transforming Ideas into Reality
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-5 max-w-7xl">
          {projects.map(({ id, image, title, description }) => (
            <div
              key={id}
              className={`bg-muted relative min-h-72 2xl:h-96 rounded-xl shadow-lg flex flex-col items-center z-10 border-2 border-transparent hover:border-secondary soft`}
            >
              <div className="w-full h-52 2xl:h-[19rem] rounded-t-xl">
                <Image
                  src={image}
                  alt="preview"
                  className="w-full h-full rounded-t-xl"
                />
              </div>
              <div className="text-start w-full px-5 py-4 2xl:py-3">
                <h4 className="text-xl 2xl:text-2xl font-semibold text-white tracking-wide">
                  {title}
                </h4>
                <p className="text-[10px] 2xl:text-[13px] text-secondary">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
