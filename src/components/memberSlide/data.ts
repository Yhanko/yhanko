import img1 from '../../../public/Ellipse 3.svg';
import img2 from '../../../public/Ellipse 4.svg';
import img3 from '../../../public/Ellipse 5.svg';
import img4 from '../../../public/Group 1.svg';
import img5 from '../../../public/Ellipse 5.svg';
import img6 from '../../../public/Ellipse 5.svg';

export type User = {
    name: string;
    devType: string;
    img: string;
};

export type dataType = {
    Users: User[]
}

export const dataYhanko: dataType = {
    Users: [
        {
            name: 'Aguinaldo Quissanga',
            devType: 'Front-end Developer',
            img:  img1
        },
        {
            name: 'Romeu Cajamba',
            devType: 'Backend Developer',
            img: img2
        },
        {
            name: 'Joel Germano da Silva',
            devType: 'Front-end Developer',
            img:  img3
        },
        {
            name: 'Seniamara',
            devType: 'Mobile Developer',
            img:  img4
        },
        {
            name: 'Amilcar',
            devType: 'Designer UI/UX and Designer Graphic',
            img:  img5
        },
        {
            name: 'Bruno Paulo',
            devType: 'Designer Graphic',
            img:  img6
        },
        {
            name: 'Mario Varela',
            devType: 'Software Developer',
            img:  img6
        }

    ],
}