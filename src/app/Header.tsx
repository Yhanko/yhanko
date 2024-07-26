import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Serviços',
        path: '/services'
    },
    {
        name: 'Membros',
        path: '/members'
    },
    {
        name: 'Projectos',
        path: '/project'
    },
    {
        name: 'Tecnologias',
        path: '/tecnology'
    },
    {
      name: 'Contactos',
      path: '/contact'
    },
];

export function Header(){
  const pathname = usePathname();

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
            <Link href="/" className="translate-x-[25%] mt-[40px] hover:cursor-pointer">
            <Image src={logo} alt="logo" />
            </Link>

            <nav className="w-[40rem] translate-x-[-20%]">
              <ul className="flex justify-center font-medium items-center text-zinc-800 gap-[32px]">
                  {links.map((link, index) => {
                    return (
                      <Link href={link.path} key={index} className={`${link.path === pathname && "hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold"} hover:cursor-pointer mt-[10px] hover:text-violet-900 font-semibold`}>
                            {link.name}
                      </Link>
                  );
                })}
              </ul>
            </nav>
        </header>
    )
}