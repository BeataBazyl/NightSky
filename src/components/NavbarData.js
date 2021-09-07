import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as TiIcons from "react-icons/ti";

export const NavbarData = [
    {
        title: "Home",
        path:"/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
        id: "home"
    },
    {
        title: "Weather",
        path:"/weather",
        icon: <TiIcons.TiWeatherCloudy />,
        cName: "nav-text",
        id: "weather"
    },
    {
        title: "Moon",
        path:"/moon",
        icon: <RiIcons.RiMoonClearLine />,
        cName: "nav-text",
        id: "moon"
    },
    {
        title: "Essentials",
        path:"/essentials",
        icon: <GiIcons.GiBackpack />,
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
        title: "NASA Inspo",
        path:"/nasa",
        icon: <GiIcons.GiPhotoCamera />,
        cName: "nav-text",
        id: "nasa"
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