import Image from "next/image";
import { React, useEffect, useState } from "react";
import sideprofile from "../../../public/Images/website pfp.png";






export const SecondSlide = () => {

  const pfp = () => {
    return (
      <Image
        src={sideprofile}
        quality={100}
        alt=""
        className={isMobile? 'w-auto h-full max-h-[60vh] max-w-[90vw]' 
        : ' w-full h-auto max-h-[70vh] max-w-[50vw]'}
      />
    );
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= window.innerHeight); 
    };
  
    // Set initial screen size
    handleResize();
  
    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <div className="box-border h-screen w-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className={isMobile? 'box-border w-[95vw] h-[80vh] bg-gradient-to-r from-[#050505]  to-[#383e43] via-[#161a1c] rounded-[5vw]'
          : 'box-border w-[95vw] h-[90vh] bg-gradient-to-r from-[#050505]  to-[#383e43] via-[#161a1c] rounded-[5vw]'}>
          
          


            <div className={isMobile? ' absolute flex w-auto h-[80vh] items-end translate-x-[5vw]' 
          : 'absolute flex h-[90vh] translate-x-[5vw] items-end translate'}>
            {pfp()}
          </div>

          <div className={isMobile? ''
          : 'float-right w-[50vw]'}>
          <div className={isMobile? 'absolute w-[40vw] pl-[5vw]'
            : 'absolute w-[40vw] float-right translate-y-[5vh]'}>
            <h1 className={isMobile? 'pt-24 font-libre font-bold text-[2.5vh] text-white' 
            : 'pt-24 font-libre font-bold text-[2vw] text-white'}>
              Dao Ho is an 18-year-old self-taught artist studying at
              Northeastern University. With a focus on ink, he combines various
              mark-making techniques to emphasize values hidden in ordinary
              everyday life.
            </h1>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
};
