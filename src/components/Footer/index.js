import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    FooterLinksContainer
} from "./FooterElements";
import {SocialMedia, SocialIconLink, SocialLogo, SocialMediaWrap, WebsiteRights, SocialIcons} from "./FooterElements";
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from "react-icons/all";
import * as FiIcons from "react-icons/fi";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to="about"><RiIcons.RiMessage2Line/> Contact form</FooterLink>
                        <FooterLink to="#"><AiIcons.AiOutlineHome/> Adress Poland, Warsaw, street Suwak 14</FooterLink>
                        <FooterLink to="#"><GoIcons.GoMail/> via e-mail adress</FooterLink>
                        <FooterLink to="#"><FiIcons.FiPhoneCall/> +48 XXX XXX XXX </FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>More About Us</FooterLinkTitle>
                        <FooterLink to="#">About Project</FooterLink>
                        <FooterLink to="#">Partners</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Quick Links</FooterLinkTitle>
                        <ul>
                        <li><FooterLink to="home" >Home</FooterLink></li>
                        <li><FooterLink to="moon">Moon</FooterLink></li>
                        <li><FooterLink to="essentials">Essentials</FooterLink></li>
                        <li><FooterLink to="slider">Gallery</FooterLink></li>
                        <li><FooterLink to="magic">Postproduction</FooterLink></li>
                        </ul>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            Night&#160;Sky
                        </SocialLogo>
                        <WebsiteRights>Night Sky &#174; {new Date().getFullYear()}
                        All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.pl" target="_blank"
                                            aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank"
                                            aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href="//www.pinterest.com" target="_blank"
                                            aria-label="Pinterest"><FaPinterest/></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank"
                                            aria-label="twitter"><FaTwitter/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;