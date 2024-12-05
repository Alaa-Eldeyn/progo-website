import Image from "next/image";
import { Timeline } from "./ui/Timeline";

function Roadmap() {
  const data = [
    {
      title: "#1",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Define Needs and Details
          </p>
          <p className="text-[#718096]">
            Identify the project's needs and outline all necessary details to
            ensure tasks are executed clearly and systematically, achieving
            objectives efficiently.
          </p>
        </div>
      ),
    },
    {
      title: "#2",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Research and study the project
          </p>
          <p className="text-[#718096]">
            This phase involves gathering and analyzing information to
            understand all aspects of the project, define its goals, and
            identify the requirements needed to achieve it efficiently and
            effectively.
          </p>
        </div>
      ),
    },
    {
      title: "#3",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Start planning and defining tasks
          </p>
          <p className="text-[#718096]">
            In this phase, a comprehensive project plan is developed, outlining
            the key tasks and assigning them clearly to ensure organized
            workflow and timely achievement of objectives.
          </p>
        </div>
      ),
    },
    {
      title: "#4",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Start Design (UI/UX)
          </p>
          <p className="text-[#718096]">
            This stage focuses on creating user-friendly and visually appealing
            interfaces. It includes designing layouts, selecting styles, and
            ensuring the best user experience that aligns with the project's
            goals.
          </p>
        </div>
      ),
    },
    {
      title: "#5",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Start Programming
          </p>
          <p className="text-[#718096]">
            This phase involves turning designs into functional systems by
            writing clean, efficient, and scalable code to build the
            application's core features and functionalities.
          </p>
        </div>
      ),
    },
    {
      title: "#6",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Problem solving and testing stages
          </p>
          <p className="text-[#718096]">
            In this phase, the project undergoes thorough testing to identify
            and resolve potential bugs and issues. The goal is to ensure the
            system operates efficiently and reliably before launch.
          </p>
        </div>
      ),
    },
    {
      title: "#7",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Testing the Project for Vulnerabilities
          </p>
          <p className="text-[#718096]">
            This phase involves a detailed examination of the system to identify
            and address security vulnerabilities, ensuring data protection and
            system stability.
          </p>
        </div>
      ),
    },
    {
      title: "#8",
      content: (
        <div className="flex flex-col rounded-lg bg-muted border border-transparent p-5">
          <p className="text-white text-lg font-normal mb-2">
            Project launch and management
          </p>
          <p className="text-[#718096]">
            In this phase, the project is officially launched and monitored to
            ensure smooth and stable operation. This includes performance
            management, addressing any urgent issues, and providing continuous
            support.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default Roadmap;
