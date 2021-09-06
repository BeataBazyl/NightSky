import React from 'react';
import ReactCompareImage from 'react-compare-image';
import {MagicContainer, MagicWrapper, MagicHeader, MagicText, MagicP} from "./magicElements";
import {MagicIconLink, MagicIcons} from "./magicElements";
import {SiAdobelightroomclassic, SiAdobephotoshop} from "react-icons/all";
import {Link} from "react-router-dom";

const Magic = () => {
    return (
        <MagicContainer>
            <MagicWrapper>
                <MagicHeader>Now it's time for a pinch of magic!</MagicHeader>
                    <MagicText>There is a lot of fantastic ways to pimp up your photo, try to find your individual style of editing.</MagicText>
                    <MagicP>Even professionals rarely manage to capture what their eyes see in photos, but there is a solution for that...
                    Check out below how wonderful effect you can expect in postproduction!</MagicP>
            </MagicWrapper>
            <div style={{ height: "700px", width: "1000px", margin: "auto"}}>
            <ReactCompareImage
                leftImage="../../images/skyBefore.jpeg"
                leftImageAlt="before"
                leftImageLabel="Before Edition"
                rightImage=".././images/skyAfter.jpeg"
                rightImageAlt="after"
                rightImageLabel="After Magic"/>
            </div>
            <MagicWrapper>
                <MagicText>If you wonder what kind of programs you can use to edit your photos, look below</MagicText>
                <MagicP>It's only a few most popular, if you know more apps which are worth knowing - let us know :)</MagicP>
                <MagicIcons>
                    <MagicIconLink href="//www.adobe.com/pl/products/photoshop-lightroom.html?skwcid=AL!3085!3!442252458714!e!!g!!lightroom&mv=search&sdid=L7NVTQ8Y&ef_id=CjwKCAjw4KyJBhAbEiwAaAQbE_MzNDeXJSOKtjDLzs3q2Yvo2mLW9olv0Wsla4XWfhe7MMRPMbuh4hoCSMAQAvD_BwE:G:s&s_kwcid=AL!3085!3!442252458714!e!!g!!lightroom!1471239338!56051174774&gclid=CjwKCAjw4KyJBhAbEiwAaAQbE_MzNDeXJSOKtjDLzs3q2Yvo2mLW9olv0Wsla4XWfhe7MMRPMbuh4hoCSMAQAvD_BwE" target="_blank" aria-label="Lightroom"><SiAdobelightroomclassic/></MagicIconLink>
                    <MagicIconLink href="//www.adobe.com/pl/products/photoshop.html?skwcid=AL!3085!3!442252458636!e!!g!!photoshop&mv=search&sdid=LZ32SYVR&ef_id=CjwKCAjw4KyJBhAbEiwAaAQbE-tn2j2HyB2TP_M7XZ_4L8AdJwn8DcfBKWI5RfndK3so5VjirDshDRoCqqUQAvD_BwE:G:s&s_kwcid=AL!3085!3!442252458636!e!!g!!photoshop!1471239101!57370854392&gclid=CjwKCAjw4KyJBhAbEiwAaAQbE-tn2j2HyB2TP_M7XZ_4L8AdJwn8DcfBKWI5RfndK3so5VjirDshDRoCqqUQAvD_BwE" target="_blank"><SiAdobephotoshop/></MagicIconLink>
                    <MagicIconLink href="//sites.google.com/site/sequatorglobal/" target="_blank">Sequator</MagicIconLink>
                </MagicIcons>
            </MagicWrapper>
        </MagicContainer>
    );
};

export default Magic;