import { useSwiper } from "swiper/react";
import {ArrowRight, ArrowLeft} from 'phosphor-react';




export  function SwiperNavBottons(){

    const swiper = useSwiper()
  
    return(
      <div className="flex flex-row w-[100px] h-[40px] space-x-4 z-30 left-[65px] absolute -mt-[3.5rem] ml-[70rem]">
      <button className="bg-white w-[2.5rem]  h-[2.5rem] border-2 border-[#57007B] hover:border-white hover:bg-[#57007B] text-[#57007B] hover:text-white p-2 rounded-full flex justify-center items-center"
        onClick={() => swiper.slidePrev()}
      >
        <ArrowLeft size={40} />
      </button>
      <button className="bg-white w-[2.5rem] h-[2.5rem] text-[#57007B] border-2 border-[#57007B] hover:border-white hover:bg-[#57007B] hover:text-white p-2 rounded-full flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <ArrowRight size={40} />
      </button>
    </div>
  )}