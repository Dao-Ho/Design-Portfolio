import Image from "next/image";
import { React } from "react";
import transaction from "../../../public/Images/transaction final.png";
import fishmarket from "../../../public/Images/Fish Market refined.jpg";
import backelement from "../../../public/Images/website background.png";
import haku from "../../../public/Images/Haku final w signature.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

export const ViewButton = () => {
  return (
    <a
      href="#_"
      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
    >
      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg
          className="w-5 h-5 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="relative w-full text-left text-[1vw] transition-colors duration-200 ease-in-out group-hover:text-white">
        View All
      </span>
    </a>
  );
};

export const FirstSlide = () => {
  const handleImageLoad = () => {
    console.log("Image loaded successfully");
  };

  return (
    <div className="box-border h-screen w-screen relative">
      <div className="relative">
        <div className="h-screen w-screen">
          <div className="flex z-30 pt-20 pr-[2vw] -translate-x-[10vw] h-full w-[45vw] float-right items-center">
            <Swiper
              id={"showcase"}
              modules={[Navigation, Pagination, Scrollbar, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => {
                console.log("Swiper initialized", swiper);
              }}
            >
              <SwiperSlide> {slide1()}</SwiperSlide>
              <SwiperSlide> {slide2()}</SwiperSlide>
              <SwiperSlide>{slide3()}</SwiperSlide>
            </Swiper>
            <div className="pl-[1vw]"></div>
          </div>

          <div className="h-screen w-1/2 absolute items-center">
            <div className="flex-inline translate-y-[20vh]">
              <h1 className="font-inter font-bold text-[#212121] text-[15vw] leading-[12vw] ">
                DAO <br />
                HO
              </h1>
              <p className="pt-5 pl-3 font-bebas italic text-[#212121] text-[2vw] font-bold">
                &lt;Developer + Artist + Designer/&gt;
              </p>
            </div>
          </div>
          <div className="px-[3vw] absolute flex w-auto translate-y-[45vh] right-0">
            <ViewButton />
          </div>
        </div>
      </div>
    </div>
  );
};

function slide1() {
  return (
    <div>
      <Image
        src={transaction}
        quality={50}
        alt=""
        className="fill rounded-xl"
        style={{ width: "50wh", height: "auto" }}
      />
    </div>
  );
}

function slide2() {
  return (
    <Image
      src={fishmarket}
      quality={50}
      alt=""
      className="fill rounded-xl"
      style={{ width: "50wh", height: "auto" }}
    />
  );
}

function slide3() {
  return (
    <div className="flex w-auto h-[70vh] span">
      <Image
        src={haku}
        quality={100}
        alt=""
        className="fill rounded-xl"
        style={{ width: "auto", height: "70vh" }}
      />
      <div className="flex h-full w-full items-center translate-x-[1vw]"></div>
    </div>
  );
}
