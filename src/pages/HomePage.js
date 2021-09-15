import React from 'react';
import {homeObject, homeObjectFour, homeObjectThree, homeObjectTwo} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection";
import Footer from "../components/Footer";
import StarsIntro from "../components/StarsIntro";
import {BrowserRouter as Router} from "react-router-dom";

const HomePage = () => {

    return (
        <div id="home">
            <StarsIntro/>
            <InfoSection {...homeObject}/>
            <InfoSection {...homeObjectTwo}/>
            <InfoSection {...homeObjectThree}/>
            <InfoSection {...homeObjectFour}/>
            <Footer/>
        </div>
    );
};

export default HomePage;