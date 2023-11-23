import Image from "next/image";
import foreground from "../../../public/Images/transactionforeground.png";
import transaction from "../../../public/Images/transaction final.png";
import fishmarket from "../../../public/Images/Fish Market refined.jpg";
import haku from "../../../public/Images/Haku final w signature.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const FirstSlide = () => {
  const images = [
    {
      src: "../../../public/The transaction website.png",
      alt: "The Transaction",
    },
    // ... more images
  ];

  const handleImageLoad = () => {
    console.log("Image loaded successfully");
  };

  return (
    <div className="box-border h-screen w-screen relative">
      <div className="relative">
        <div className="h-screen w-screen">
          <div className="flex z-30 pt-20 pr-40 h-full w-1/2 float-right items-center">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide> {slide1()}</SwiperSlide>
              <SwiperSlide> {slide2()}</SwiperSlide>
              <SwiperSlide>{slide3()}</SwiperSlide>
            </Swiper>
          </div>
          <div className="z-20 relative flex h-screen w-auto items-center">
            <h1 className="font-bebas text-[#212121] text-[300px] leading-[250px] font-bold">
              Dao <br />
              Ho
            </h1>
          </div>
          {/* <div className="absolute bottom-0 right-0">
            <Image
              src={foreground}
              quality={100}
              alt=""
              className="fill "
              onLoad={handleImageLoad}
              style={{ width: "40vw", height: "40vh" }}
            />
  </div> */}
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
        quality={100}
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
      quality={100}
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
    <div className="flex h-full w-full items-center translate-x-1/3">
    <button class="inline-flex p-3 text-xl font-bold font-bebas text-[#212121] transition-colors duration-150 border border-[#212121] rounded-lg focus:shadow-outline hover:bg-[#212121] hover:text-white">
      View more
      </button>
    </div>
    </div>
  );
}
