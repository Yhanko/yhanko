import Logo from "../../../public/logo.svg";
import Image from "next/image";
import { FacebookLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";

export default function Footer(){
    return(
        <footer className="bg-white z-40 w-screen h-[400px] flex flex-col">
            <div className="w-screen h-[18rem] flex flex-row items-center">
                <div className="flex flex-col w-[28rem] h-[18rem] pl-4 pt-2">
                    <Image src={Logo} alt="logo"/>
                    <span className="text-[#858585]">
                        Ser uma empresa de tecnologia de referência <br/> reconhecida pela qualidade,
                        profissionalismo, <br/> proficiência, entrega e inovação.
                    </span>
                    <div className="flex flex-row mt-8 space-x-4">
                        <FacebookLogo className="text-[#858585]" size={23}/>
                        <InstagramLogo className="text-[#858585]" size={23}/>
                        <YoutubeLogo className="text-[#858585]" size={23}/>
                        <LinkedinLogo className="text-[#858585]" size={23}/>
                    </div>
                </div>
                <div className="w-[25rem] h-[18rem] flex flex-col pl-4 pt-2">
                    <span className="text-black font-bold pt-4">Localização</span>
                    <span className="text-[#858585] pt-20">
                        Rua direita da cuca, bairro alguma cena,<br/>
                        de frente ao hospital da siga.
                    </span>
                </div>

                <div className="w-[25rem] h-[18rem] flex flex-col pl-4 pt-2 ">
                <span className="text-black font-bold pt-4 pl-20">Contactos</span>
                    <span className="text-[#858585] pt-20 pl-20">
                        +244 943 558 106<br/> 
                        +244 950 455 513<br/>
                        secretaria@cafangola.com
                    </span>
                </div>
            </div>

            <div className="w-[72rem] h-[8rem] pt-2 flex items-center justify-between border-t border-t-[#DEDEE6] ml-[2rem]">
                <span className="text-[#858585]">
                    ©2024 Yhanko. Todos os direitos reservados
                </span>
                <span className="text-[#858585]">
                    Politicas e privacidade
                </span>
            </div>
        </footer>
    )
}