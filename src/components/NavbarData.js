import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const NavbarData = [
    {
        title: "Home",
        path:"/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
        id: "home"
    },
    {
        title: "Moon",
        path:"/moon",
        icon: <FaIcons.FaMoon />,
        cName: "nav-text",
        id: "moon"
    },
    {
        title: "Essentials",
        path:"/essentials",
        icon: <GiIcons.GiPhotoCamera />,
        cName: "nav-text",
        id: "essentials"
    },
    {
        title: "Gallery",
        path:"/slider",
        icon: <BsIcons.BsImageFill />,
        cName: "nav-text",
        id: "slider"
    },
    {
        title: "Add Some Magic",
        path:"/magic",
        icon: <RiIcons.RiMagicLine />,
        cName: "nav-text"
    },
    {
        title: "Contact us",
        path:"/footer",
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: "nav-text"
    },
]