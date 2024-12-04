import Image from "next/image";
import dots from "../assets/dots.svg";
import about from "../assets/about.svg";

function About() {
  return (
    <section id="about" className="relative center pt-10 pb-20">
      <div className="absolute left-10 lg:top-96 w-80 z-0 hidden ">
        <Image src={dots} alt="dots" width={500} height={500} />
      </div>
      <div className="container center gap-14 flex-col lg:flex-row">
        <div className="z-10">
          <Image src={about} alt="about" width={600} height={600} />
        </div>
        <div className="space-y-3 flex-1 max-w-md lg:mt-32">
          <p className=" bg-[rgba(234,64,84,0.1)] px-4 py-1 rounded-full text-primary w-fit">
            About Us
          </p>
          <h1 className="text-4xl font-bold">Freelance team software</h1>
          <p className="text-[#C8C8C8] text-justify">
            Progo is a team of experienced software engineers specializing in
            designing and developing custom software solutions, including
            websites, mobile applications, and enterprise management systems.
            The team excels in delivering innovative and advanced software
            solutions tailored to meet clients&apos; needs and help them achieve
            their goals efficiently and effectively.
          </p>
          <h2 className=" text-3xl font-bold">
            Your Vision, <span className="text-primary">Our Expertise</span>
          </h2>
          <button className="px-8 py-3 rounded-full bg-primary">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}
export default About;
