import React, {useState} from 'react';
import Video from "../../videos/video.mp4";
import {
    StarsContainer,
    StarsBg,
    VideoBg,
    StarsContent,
    StarsH1,
    StarsBtnWrapper,
    StarsP,
    ArrowForward,
    ArrowRight } from "./StarsIntro";
import {Button} from "../ButtonElements";

const StarsIntro = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
        <main>
        <StarsContainer id="home">
            <StarsBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </StarsBg>
            <StarsContent>
                <StarsH1>Are you redy to be inspired?</StarsH1>
                <StarsP>Explore night sky and start making amazing photoshoots</StarsP>
            <StarsBtnWrapper>
                <Button to="home"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true">
                    Read more and get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </StarsBtnWrapper>
            </StarsContent>
        </StarsContainer>
        </main>
        </>
    );
};

export default StarsIntro;