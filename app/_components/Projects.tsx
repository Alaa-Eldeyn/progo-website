import { projects } from "@/data";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";

function Projects() {
  return (
    <section className=" pb-20" id="portfolio">
      <div className="container max-w-7xl">
        <SectionTitle
          title="Our Projects"
          subtitle="Where Innovation Meets Excellence, Transforming Ideas into Reality"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 mt-5 max-w-7xl w-full ">
          {projects.map(
            ({ id, image, fullImg, title, description, isPrivate }) => (
              <ProjectCard
                key={id}
                image={image}
                fullImg={fullImg ?? ""}
                title={title}
                description={description}
                isPrivate={isPrivate ?? false}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
export default Projects;
