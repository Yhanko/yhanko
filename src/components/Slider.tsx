import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import typecard1 from "../../public/Group 1.svg";

export const Slider = () => {
  return (
    <>
      <h1 className="text-[#1a1a1a] text-[30px] font-bold mb-[50px] z-20">
        Nossos Serviços
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[400px]"
      >
        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem] rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] font-semibold flex justify-start">
              Mobile
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Criação de aplicativos androids e IOS com tecnologias mais usadas
              e com melhor performance.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem]  rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] font-semibold flex justify-start">
              Web
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Prontos para a criação do template e logo marcas, logotipos,
              marcas e dar vida ao teu site,blog, portifolio, etc.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem] rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] w-[200px] font-semibold flex justify-start">
              Banco de dados
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Criação e gerenciamento de banco de dados, de maneira eficaz.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem] rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] font-semibold flex justify-start">
              Mobile
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Criação de aplicativos androids e IOS com tecnologias mais usadas
              e com melhor performance.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem] rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] font-semibold flex justify-start">
              Mobile
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Criação de aplicativos androids e IOS com tecnologias mais usadas
              e com melhor performance.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#FAFAFA] shadow-2xl pt-[3rem] rounded-md text-[#1a1a1a] flex flex-col ">
          <div className="w-20 mb-[30px]  ml-[20px]">
            <Image src={typecard1} alt="..." />
          </div>
          <div className=" w-[100px]  ml-[20px]">
            <h2 className="text-[19.5px] mb-[15px] font-semibold flex justify-start">
              Mobile
            </h2>
            <p className="text-[14px] text-[#718096] w-[270px] text-left">
              Criação de aplicativos androids e IOS com tecnologias mais usadas
              e com melhor performance.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
