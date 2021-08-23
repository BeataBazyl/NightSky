import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";



export const SidebarData = [
    {
        title: "Home",
        path:"/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Moon",
        path:"/moon",
        icon: <FaIcons.FaMoon />,
        cName: "nav-text"
    },
    {
        title: "Essentials",
        path:"/essentials",
        icon: <GiIcons.GiPhotoCamera />,
        cName: "nav-text"
    },
    {
        title: "Gallery",
        path:"/slider",
        icon: <BsIcons.BsImageFill />,
        cName: "nav-text"
    },
    {
        title: "Contact us",
        path:"/contactUs",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },
]