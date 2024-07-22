//Importação do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import {  Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
//Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {User, dataYhanko} from './memberSlide/data';

register();

/**
 * @returns 
 */

export function MemberSession(){
  return (
    <>
      <h1 className="text-[#1a1a1a] text-[30px] font-bold mb-[50px] z-20 flex flex-col">
        Os membros da
        <span className="text-[#491D8B] text-center">Yhanco</span>
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-[400px]"
      >
      {
        dataYhanko.Users.map((user: User, index) => (
        <SwiperSlide key={index}>
            <div className='flex flex-row w-screen pt-[70px]'>
                  <div className="flex gap-5 mb-5 flex-col w-screen h-screen " key={index}>
                    <Image src={user.img} alt="foto perfil" width={70} height={70}  className='ml-[80px]'/>
                    <div className="flex flex-col gap-1 ">
                    <span className="text-[16px] font-semibold text-slate-700">
                      {user.name}
                    </span>
                    <span className="text-[12px] font-semibold text-zinc-600">
                      {user.devType}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            )) }
      </Swiper>
    </>
  );

}