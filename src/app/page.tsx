"use client"
import Image from "next/image";
import ArrowRihgt from '../../public/Deco-img-arrow.png';
import ArrowLeft from '../../public/Deco-img-arrow1.png';
import background from "../../public/BackgorundHeader.svg";
import seta from "../../public/ion_arrow-back-outline.svg";
import { Header } from "@/components/Header";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Slider } from "@/components/Slider";
import { SlidesContainer } from '../components/SlidesContainer';
import { MemberSession } from '../components/MemberSession';
import { Project } from '../components/Project';
import { Tecnologies } from "../components/Tecnologies";
import Gradient from "../../public/Gradient.png";


export default function Home() {
  const textH1Ref = useRef(null)
  const texPRef = useRef(null)
  const btnRef = useRef(null)


  useEffect(()=> {
     const textH1 =  textH1Ref.current
     const textP =  texPRef.current
     const btn =  btnRef.current
     const tl = gsap.timeline({ defaults: { duration: 1 } });

     tl.fromTo(
      textH1,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
      }
     ).fromTo(
      textP,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
     ).fromTo(
      btn,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
     )
  }, [])

  return (
    <>
     <div>
     <div className=" w-screen h-[100px] flex flex-col items-center ">
        <div className=" absolute z-[-2] w-auto h-auto overflow-hidden ">
          <Image src={background} alt="img background" />
        </div>
        <Header />
       <div className="translate-y-[100%]  flex justify-center items-center flex-col">
       <div className="mb-[20px]">
          <h1 ref={textH1Ref} className="text-center text-[55px] leading-[67px] font-semibold text-zinc-800 mb-[20px]">
            A <span className="text-violet-900">solução</span> <br />
            para os seus projetos
          </h1>
       
         <p ref={texPRef} className="text-gray-300 text-center text-[16px]">
          Com a <span className="text-rose-400 font-bold">Yhanko</span> o crescimento, a expansão <br />
          e a funcionalidade do seu projeto estará em outro nível
         </p>
         </div>
         <div ref={btnRef}  className="flex gap-[15px]">
          <button className="bg-violet-900 px-[40px] py-[12px] rounded-full text-[13px]">
            Contact
          </button>
          <button className="bg-white px-[40px] text-gray-400 font-medium shadow-[0_15px_45px_-12px_rgba(0,0,0,0.3)] py-[12px] rounded-full text-[13px] text-zinc-800">
            About me
          </button>
          
         </div>
       </div>
       <div className="seta absolute -mt-4 left-[5.5rem]">
        <Image 
           src={seta}
           alt="seta"
        />
       </div>
       
      </div>
     
      <section className="bg-slate-300 z-40 w-screen h-[600px] mt-[43rem] flex flex-col justify-center items-center">
      <Slider />
     </section>

     <section className="bg-white z-40 w-screen h-[600px]  flex flex-col justify-center items-center">
        <SlidesContainer />
     </section>

      <section className="bg-white z-40 w-screen h-[600px]  flex flex-col justify-center items-center">
        <div className="absolute z-0 bg-[#57007B] bg-gradient-to-r from-[#57007B] to-[#F76680]  w-[6rem] h-[0.4rem] -ml-[0rem] -mt-[30rem]"></div>
        <MemberSession />
        <Image src={ArrowLeft} height={250} width={250} alt='arrow' className="absolute mt-[30rem] left-[5rem]"/>
     </section>

     <section className="bg-white z-40 w-screen h-[1450px]  flex flex-col justify-center items-center">
     <div className="absolute z-0 bg-[#57007B] bg-gradient-to-r from-[#57007B] to-[#F76680]  w-[6rem] h-[0.4rem] -ml-[0rem] -mt-[90rem]"></div>
     <Image src={ArrowRihgt} height={200} width={200} alt='arrow' className="absolute -mt-[86rem] right-[10rem]"/>
      <Project />
     </section>
     
     <section className="bg-gradient-to-br from-blue-500 via-[#262629] to-[#262629] z-40 w-screen h-[600px]  flex flex-col items-center gap-20">
      <h2 className="mt-14 text-[30px] font-bold z-20">Tecnologias que fazemos uso</h2>
        <Tecnologies/>
     </section>

     </div>
    </>
  );
}
