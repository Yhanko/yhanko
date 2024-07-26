import Image from "next/image";
import {Imge, dataYhanko} from "./tecnoliesData/data";
import Yhanko from "../../../public/yhankoIcon.png";



export default function Tecnologies(){
    return( 
        <div>
            <div className="flex flex-row">
                {
                    dataYhanko.Imge.map((user: Imge, index) => (
                        <div className="flex flex-row gap-4 " key={index}>
                            <Image src={user.img} alt="tecnologias" width={40} height={40}  className='ml-[70px]'/>
                        </div>
                    ))
                }

            </div>
            <Image src={Yhanko} alt="logo" width={400} height={400} className="ml-80 mt-8"/>
        </div>
    )
}