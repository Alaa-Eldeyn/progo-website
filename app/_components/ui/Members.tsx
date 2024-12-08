"use client";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from "@/data";
import { useRef } from "react";
import left from "@/app/assets/left.svg";
import right from "@/app/assets/right.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";


function Members() {
  const swiperRef = useRef<SwiperClass | null>(null);
  const t = useTranslations();

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="select-none relative max-w-7xl center"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col ">
              <Image
                src={member.image.src}
                alt={t(member.name)}
                className="rounded-lg mb-4 object-cover md:max-h-[370px]"
                width={400}
                height={450}
              />
              <h3 className="text-white text-lg font-bold">{t(member.name)}</h3>
              <p className="text-[#C8C8C8] text-sm">{t(member.role)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-5 gap-5 lg:hidden rtl:flex-row-reverse">
        <button onClick={() => swiperRef.current?.slidePrev()} className="w-14">
          <Image src={left} alt="Left" width={100} height={100} />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="w-14">
          <Image src={right.src} alt="Right" width={100} height={100} />
        </button>
      </div>
    </div>
  );
}
export default Members;
