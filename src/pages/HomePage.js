import React from 'react';
import InfoSection from "../components/InfoSection";
import {homeObject, homeObjectFour, homeObjectThree, homeObjectTwo} from "../components/InfoSection/Data";
import StarsIntro from "../components/StarsIntro";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
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