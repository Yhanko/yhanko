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
        <header className={`fixed  flex justify-around h-[6rem] transition-all duration-75 items-center z-10 w-screen ${scrolled && "backdrop-blur-md bg-white/30"}`}>
            <div className="translate-x-[20%] mt-[40px]">
            <Image src={logo} alt="logo" />
            </div>
            <nav >
              <ul className="flex justify-center font-medium items-center text-zinc-800 gap-[32px] translate-x-[-28%] ">
                <li className="text-violet-900 flex flex-col  gap-2 mt-[10px]">
                  <span>Home</span>
                  <div className="w-[45px] h-[5px] rounded-full bg-violet-900"></div>
                </li>
                <li>About me</li>
                <li>Gallery</li>
              </ul>
            </nav>
        </header>
    )
}