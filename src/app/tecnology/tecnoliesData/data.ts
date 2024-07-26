import ReactJs from "../../../../public/recatjs.svg";
import  C from "../../../../public/C++.svg";
import CSS from "../../../../public/css3.svg";
import Javscript from "../../../../public/javascript.svg";
import Electron from "../../../../public/electronjs.svg";
import Figma from "../../../../public/Figma.svg";
import NextJs from "../../../../public/nextjs.svg";
import MongoDB from "../../../../public/mongodb.svg";
import NodeJS from "../../../../public/nodejs.svg";

export type Imge = {
    img: string;
};

export type dataType = {
    Imge: Imge[]
}

export const dataYhanko: dataType = {
    Imge: [
        {   
            img: ReactJs
        },
        {  
            img: C
        },
        {
            img: CSS
        },
        {
            img: Javscript
        },
        {
            img: Electron
        },
        {
            img: Figma
        },
        {
            img: NextJs
        },
        {
            img: MongoDB
        },
        {
            img: NodeJS
        }

    ],
}