import Image from "next/image";
import Project1 from '../../public/Case-study__image.png';
import Project2 from '../../public/Case-study__image1.png';
import Project3 from '../../public/Case-study__image2.png';
import Link from "next/link";

export function Project(){
    return(
        <div className="flex flex-col w-screen h-[400px] -mt-[18rem] items-center">    
             <h1 className="text-[#1a1a1a] text-[30px] font-bold z-20 flex flex-col -mt-[23rem] text-center">
                    Nossos projetos mais <br/> recentes
            </h1>

            <div className="w-[70rem] flex flex-row bg-[#656ED3] mt-[6rem] rounded-lg">
                <div className="w-[30rem]">
                    <Image src={Project1} alt="project" />
                </div>

                <div className="w-[35rem] flex flex-col space-y-10 p-8">
                        <h2 className="text-center text-[1.5rem] text-[#2D3748]">Website Design for SCFC Canada</h2>
                        <p className="text-[#2D3748] text-center">
                            Born out of a vision, a single-minded objective 
                            that puts service before anything else, Swift Clearance 
                            and Forwarding Corp. surging forth to deliver the best 
                            services in the shipping and logistics scenario. Its meteoric 
                            rise stems out of a solid foundation. The management boasts of 
                            over 20 years of rich and varied experience in the shipping and 
                            freight forwarding industry.
                        </p>
                        <Link href="" className="flex items-end justify-end text-[#F76680]">
                            Reed more {">"} 
                        </Link>
                </div>
            </div>
            <div className="w-[70rem] flex flex-row bg-[#E7DAED] mt-[4rem] rounded-lg">
                <div className="w-[30rem]">
                    <Image src={Project2} alt="project" />
                </div>

                <div className="w-[35rem] flex flex-col space-y-10 p-8">
                        <h2 className="text-center text-[1.5rem] text-[#2D3748]">Website Design for SCFC Canada</h2>
                        <p className="text-[#2D3748] text-center">
                            Born out of a vision, a single-minded objective 
                            that puts service before anything else, Swift Clearance 
                            and Forwarding Corp. surging forth to deliver the best 
                            services in the shipping and logistics scenario. Its meteoric 
                            rise stems out of a solid foundation. The management boasts of 
                            over 20 years of rich and varied experience in the shipping and 
                            freight forwarding industry.
                        </p>
                        <Link href="" className="flex items-end justify-end text-[#F76680]">
                            Reed more {">"} 
                        </Link>
                </div>
            </div>
            <div className="w-[70rem] flex flex-row bg-[#E7DAED] mt-[4rem] rounded-lg">
                <div className="w-[30rem]">
                    <Image src={Project3} alt="project" />
                </div>

                <div className="w-[35rem] flex flex-col space-y-10 p-8">
                        <h2 className="text-center text-[1.5rem] text-[#2D3748]">Website Design for SCFC Canada</h2>
                        <p className="text-[#2D3748] text-center">
                            Born out of a vision, a single-minded objective 
                            that puts service before anything else, Swift Clearance 
                            and Forwarding Corp. surging forth to deliver the best 
                            services in the shipping and logistics scenario. Its meteoric 
                            rise stems out of a solid foundation. The management boasts of 
                            over 20 years of rich and varied experience in the shipping and 
                            freight forwarding industry.
                        </p>
                        <Link href="" className="flex items-end justify-end text-[#F76680]">
                            Reed more {">"} 
                        </Link>
                </div>
            </div>
        </div>
    )
}