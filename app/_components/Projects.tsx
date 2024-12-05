import { projects } from "@/data";
import Image from "next/image";
import lock from "@/app/assets/private.svg";
import SectionTitle from "./ui/SectionTitle";

function Projects() {
  return (
    <section className=" pb-14" id="portfolio">
      <div className="container max-w-7xl">
        <SectionTitle
          title="Our Projects"
          subtitle="Where Innovation Meets Excellence, Transforming Ideas into Reality"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-5 max-w-7xl w-full ">
          {projects.map(({ id, image, title, description, isPrivate }) => (
            <div
              key={id}
              className={`bg-muted relative rounded-xl group shadow-lg flex flex-col w-full items-center z-10 border-2 border-transparent hover:border-primary soft`}
            >
              <div className="w-full h-52 lg:h-64 rounded-t-xl relative overflow-hidden">
                <Image
                  src={image}
                  alt="preview"
                  className="w-full h-full rounded-t-xl group-hover:scale-105 soft"
                />
                {isPrivate && (
                  <div className="w-full h-full center rounded-t-xl soft bg-black/50 absolute top-0 left-0">
                    <button className="px-5 py-2 bg-[#23293A] rounded-xl center gap-2 border border-gray-500 text-sm">
                      <Image
                        src={lock}
                        alt="lock"
                        width={15}
                        height={15}
                        className="soft"
                      />
                      <span>Project</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="text-start w-full p-4">
                <h4 className="text-xl 2xl:text-2xl font-semibold text-white tracking-wide group-hover:text-primary soft">
                  {title}
                </h4>
                <p className="text-[10px] 2xl:text-[13px] text-[#868490] soft group-hover:text-white">
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
