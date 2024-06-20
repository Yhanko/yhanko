import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import perfil from "../../public/perfil.jpg";
import Image from "next/image";


export function Header(){

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScroll() {
          const isScrolled = window.scrollY > 0
          setScrolled(isScrolled)
        }
    
        window.addEventListener("scroll", handleScroll)
    
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
      }, [])
    
  
    return(
        <header className={`fixed  flex justify-around h-[6rem] transition-all duration-75 items-center z-10 w-screen ${scrolled && "backdrop-blur-md bg-white/30"}`}>
            <div className="translate-x-[20%] mt-[40px]">
            <Image src={logo} alt="img background" />
            </div>
            <ul className="flex justify-center font-medium items-center text-zinc-800 gap-[32px] translate-x-[-28%] ">
                <li className="text-violet-900 flex flex-col  gap-2 mt-[10px]">
                  <span>Home</span>
                <div className="w-[45px] h-[5px] rounded-full bg-violet-900"></div>
                </li>
                <li>About me</li>
                <li>Gallery</li>
            </ul>
            <div>
                <div className="flex translate-x-[-5%] gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={perfil} alt="img background" 
                 className="w-[50px] h-[50px] object-cover"
                />  
                </div>
                <div className="flex flex-col text-red-400">
                    <h1 className="text-zinc-800 font-semibold">Lorrys Code</h1>
                    <p className="text-gray-400 text-[13px]">lourencocardoso007@gmail.com</p>
                </div>
                </div>
            </div>
        </header>
    )
}