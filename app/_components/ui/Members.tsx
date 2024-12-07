"use client";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { teamMembers } from "@/data";
import { useRef } from "react";
import left from "@/app/assets/left.svg";
import right from "@/app/assets/right.svg";

function Members() {
  const swiperRef = useRef<SwiperClass | null>(null);

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
            <div className="flex flex-col h-full">
              <img
                src={member.image.src}
                alt={member.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-white text-lg font-bold">{member.name}</h3>
              <p className="text-[#C8C8C8] text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-5 gap-5 lg:hidden">
        <button onClick={() => swiperRef.current?.slidePrev()} className="w-14">
          <img src={left.src} alt="Left" />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="w-14">
          <img src={right.src} alt="Right" />
        </button>
      </div>
    </div>
  );
}
export default Members;
