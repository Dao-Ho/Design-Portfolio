import Image from "next/image";
import transaction from "../../../public/Images/transaction final.png";
import haku from "../../../public/Images/haku final refined.png";
import fishmarket from "../../../public/Images/Fish Market refined.jpg";
import holdingon from "../../../public/Images/holding on.png";
import duality from "../../../public/Images/FINAL selected 2.png";
import held from "../../../public/Images/Held final refined.jpg";
import engulfed from "../../../public/Images/engulfed final refined.jpg";
import { useState } from "react";
import { Container } from "postcss";

import { useRef, useEffect } from 'react';

import { createPortal } from 'react-dom';

function Modal({ src, alt, onClose }) {
    const modalRef = useRef(null);
  
    const handleOverlayClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleOverlayClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOverlayClick);
      };
    }, []);
  
    return createPortal(
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
        <div ref={modalRef} className="relative modal-content">
          <Image src={src} quality={100} alt={alt} placeholder="blur" className="w-auto h-[90vh] max-w-full max-h-full" />
        </div>
      </div>,
      document.body
    );
  }
  
  function ImageCaption({ src, alt, title, caption, award, award2, award3 }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleImageClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div className="cursor-pointer inline-flex flex flex-col" onClick={handleImageClick}>
        <Image
          src={src}
          quality={50}
          alt={alt}
          placeholder="blur"
          className="fill w-auto h-full max-w-[80vw] transition ease-in-out delay-50 hover:scale-105"
        />
        <h1 className="font-libre pt-[2.5vh] text-[2.5vh]">{title} <br/>
                            {caption} <br/>
                            {award} <br/> 
                            {award2} <br/>
                            {award3} <br/></h1>
  
        {isModalOpen && <Modal src={src} alt={alt} onClose={handleCloseModal} />}
      </div>
    );
  }
  

export const Artworks = () => {
    
  return (
    <div className="box-border w-screen overflow-y">
      <div className="w-full translate-y-24">
        <div className="inline-flex w-screen">
          <div className="inline-flex span translate-x-[8.5vw]">
            <h1 className="font-roboto font-bold text-[6vw]">Works</h1>
          </div>
        </div>
        <div className="flex w-screen h-[80vh] justify-center">
          <div className="flex w-[85vw] h-full pt-[3vh] justify-center justify-between">
          <ImageCaption src={transaction} alt="" title="The Transaction" caption="11x14, 2023" award="Best in Show: James Laubheimer's Award" award2="Baltimore Watercolor Society Award for Excellence in Water-Media" award3="Schwab Lipowitz & Solter 1st Place award"/> 
          <ImageCaption src={haku} alt="" title="Haku" caption="8.5x11, 2023"/>
          </div>
        </div>
        <div className="pt-[25vh]">
          <div className="flex w-screen h-[50vh] justify-center">
            <div className="flex w-[85vw] h-full pt-[3vh] justify-center justify-between">
            <ImageCaption src={fishmarket} alt="" title="Fish Market" caption="10x12, 2023" award="Featured at the Baltimore Museum of Art" />  
            <ImageCaption src={holdingon} alt="" title="Holding On" caption="10x8, 2022" />   
            <ImageCaption src={duality} alt="" title="Duality" caption="22x17, 2022" /> 
            </div>
          </div>
          <div className="pt-[17vh] pb-[40vh]">
          <div className="flex w-screen h-[75vh] justify-center">
            <div className="flex w-[85vw] h-full pt-[3vh] justify-center justify-between">
            <ImageCaption src={held} alt="" title="Held" caption="2022" /> 
            <ImageCaption src={engulfed} alt="" title="Engulfed" caption="2022"/> 
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};