import Image from "next/image";
import { React } from "react";
import sideprofile from "../../../public/Images/website pfp.png";

const pfp = () => {
  return (
    <Image
      src={sideprofile}
      quality={100}
      alt=""
      className="fill w-[29vw] h-auto max-w-[64vh]"
      style={{ width: "29vw", height: "auto" }}
    />
  );
};


export const SecondSlide = () => {
  return (
    <div className="box-border h-screen w-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className="box-border w-[95vw] h-[90vh] bg-gradient-to-r from-[#050505]  to-[#383e43] via-[#161a1c] rounded-[5vw]">
          <div className="w-[40vw] float-right -translate-x-[5vw] translate-y-[5vh]">
            <h1 className="pt-24 font-libre font-bold text-[2vw] text-white">
              Dao Ho is an 18-year-old self-taught artist studying at
              Northeastern University. With a focus on ink, he combines various
              mark-making techniques to emphasize values hidden in ordinary
              everyday life.
            </h1>
          </div>
          <div className="absolute flex w-1/2 h-[90vh] items-end translate-x-[5vw]">
            {pfp()}
          </div>
        </div>
      </div>
    </div>
  );
};
