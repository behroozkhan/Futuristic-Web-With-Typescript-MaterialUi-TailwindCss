
import Logo from '../assets/logo.svg';

import IconCart from '../assets/iconCart.svg'



interface NavbarObj {
    img: string;
    head: string;
    items:string[];
    icon: string;
}


export const navbarItems:NavbarObj[] = [
    {
        img: Logo,
        head:'board',
        items: ["Products","Apps & Games","Features","Support","About"],
        icon:IconCart

    }
]