import React, {useState} from 'react';
import { NavbarData} from "./NavbarData";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import ".././Styles/elements/_navbar.scss";
import * as WiIcons from "react-icons/wi";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import StarsIntro from "./StarsIntro";

function Navbar () {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{color:"#fff"}}>
            <div className="navbarWrapper">
                    <div className="navbar">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </Link>
                    </div>
                    <div className="sideLogo">
                        <WiIcons.WiMoonAltWaxingGibbous3 fontSize="2rem"/>
                        <div className="logo">
                            Night Sky
                        </div>
                    </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
    );
}

export default Navbar;


