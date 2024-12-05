import SectionTitle from "./ui/SectionTitle";
import { Marquee } from "./ui/Marquee";
import { firstRow, ReviewCard, secondRow } from "./ui/MarqueeCard";

function Reviews() {
  return (
    <div className="py-20">
      <div className="container max-w-7xl">
        <SectionTitle
          title="What client says"
          subtitle="Your Opinion Matters, Our Success Depends on It"
        />
        <div className="relative mt-10 w-full flex-col overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
