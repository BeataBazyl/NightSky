import React from 'react';
import {EssentialsContainer, EssentialsCard, EssentialsH2, EssentialsH1, EssentialsIcon,EssentialsP, EssentialsWrapper} from "./EssentialsElements";
import Icon1 from "../../images/svg-6.svg"
import Icon2 from "../../images/svg-4.svg"
import Icon3 from "../../images/svg-9.svg"
import {Button} from "../../components/ButtonElements.js";

const Essentials = () => {
    return (
        <EssentialsContainer id="essentials">
            <EssentialsH1>What will you need to start?</EssentialsH1>
            <EssentialsWrapper>
                <EssentialsCard>
                    <EssentialsIcon src={Icon1}/>
                    <EssentialsH2>Did you know that you can make great photos even with your smartphone?</EssentialsH2>
                    <EssentialsP>Just remember to use manual setting of lightning and to disable autofocus,
                        you need to find appropriate settings manualy - your efford will be seen so soon! </EssentialsP>
                    <Button>Learn more</Button>
                </EssentialsCard>
                <EssentialsCard>
                    <EssentialsIcon src={Icon2}/>
                    <EssentialsH2>Do you have SLR camera? Good for you!</EssentialsH2>
                    <EssentialsP>Remember to create RAW photos so you will be able easily work at perfect photo at postproduction. Use manual focuse and don't ever forget to take your tripod for nights photos adventure!  </EssentialsP>
                    <Button>Learn more</Button>
                </EssentialsCard>
                <EssentialsCard>
                    <EssentialsIcon src={Icon3}/>
                    <EssentialsH2>Are you in possession of a telescope? </EssentialsH2>
                    <EssentialsP>Great! You can become a professional night sky hunter! You are able to photograph planets, nebulae and much more. Check what else equipment a professional needs!</EssentialsP>
                    <Button>Learn more</Button>
                </EssentialsCard>
            </EssentialsWrapper>
        </EssentialsContainer>
    );
};

export default Essentials;