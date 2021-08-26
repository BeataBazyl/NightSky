import React from 'react';
import InfoSection from "../components/InfoSection";
import {homeObject, homeObjectFour, homeObjectThree, homeObjectTwo} from "../components/InfoSection/Data";
import Essentials from "../components/Essentials";
import StarsIntro from "../components/StarsIntro";

const HomePage = () => {
    return (
        <div>
            <StarsIntro/>
            <InfoSection {...homeObject}/>
            <InfoSection {...homeObjectTwo}/>
            <InfoSection {...homeObjectThree}/>
            <Essentials/>
            <InfoSection {...homeObjectFour}/>
        </div>
    );
};

export default HomePage;