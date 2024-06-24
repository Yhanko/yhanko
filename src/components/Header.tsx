import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
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
        <header className={`fixed  flex justify-around h-[6rem] transition-all duration-75 items-center z-30 w-screen ${scrolled && "backdrop-blur-md bg-white/30"}`}>
            <div className="translate-x-[25%] mt-[40px] hover:cursor-pointer">
            <Image src={logo} alt="logo" />
            </div>
            <nav className="w-[40rem] translate-x-[-20%]">
              <ul className="flex justify-center font-medium items-center text-zinc-800 gap-[32px]">
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Home</li>
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Serviços</li>
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Membros</li>
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Projectos</li>
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Tecnologias</li>
                <li className="hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold">Contactos</li>
              </ul>
            </nav>
        </header>
    )
}