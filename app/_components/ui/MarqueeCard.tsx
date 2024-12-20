import { reviews } from "@/data";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const firstRow = reviews.slice(0, reviews.length / 2);
export const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  const t = useTranslations();
  return (
    <figure
      className={cn(
        "relative w-[500px] cursor-pointer overflow-hidden rounded-xl border p-7",
        "border-gray-700 bg-muted hover:bg-[#32313c] soft"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 leading-relaxed text-[16px] line-clamp-[7]">
        {t(body)}
      </blockquote>
    </figure>
  );
};
