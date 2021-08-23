import React, {useState} from 'react';
import Video from "../../videos/video.mp4";
import {StarsContainer, StarsBg, VideoBg, StarsContent, StarsH1, StarsBtnWrapper, StarsP, ArrowForward, ArrowRight } from "./StarsIntro";
import {Button} from "../ButtonElement";

const StarsIntro = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <StarsContainer id="home">
            <StarsBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </StarsBg>
            <StarsContent>
                <StarsH1>Are you redy to be inspired?</StarsH1>
                <StarsP>Explore night sky and start making amazing photoshoots</StarsP>
            <StarsBtnWrapper>
                <Button to="signup" onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                    Read more and get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </StarsBtnWrapper>
            </StarsContent>
        </StarsContainer>
    );
};

export default StarsIntro;