import Members from "./ui/Members";
import { useTranslations } from "next-intl";

function TeamMembers() {
  const t = useTranslations();
  return (
    <div id="team" className="bg-muted mb-10 md:mb-20">
      <div className="container py-12 max-w-7xl center flex-col gap-10">
        <div className="space-y-3 text-center max-w-3xl">
          <p className="text-primary w-fit mx-auto">{t("Our Team")}</p>
          <h1 className="text-4xl font-bold">
            {t("Innovating Together, Delivering Success")}
          </h1>
          <p className="text-[#C8C8C8]">
            {t(
              "The Progo team consists of a group of skilled professionals specializing in designing and developing innovative software solutions, We work closely together to deliver the best services to our clients, with each team member bringing their expertise and skills to achieve the highest level of performance and quality, We believe in the power of teamwork and place innovation and excellence at the core of every project we undertake"
            )}
          </p>
        </div>
        <Members />
      </div>
    </div>
  );
}
export default TeamMembers;
