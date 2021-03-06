import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/all";

export const StarsContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-top: -100px;
`;

export const StarsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: black;
`;

export const StarsContent = styled.div `
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const StarsH1 = styled.div `
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width : 768px) {
    font-size: 40px;
  }
  @media screen and (max-width : 480px) {
    font-size: 32px;
  }
`;

export const StarsP = styled.p `
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  
  @media screen and (max-width : 768px) {
    font-size: 24px;
  }
  @media screen and (max-width : 480px) {
    font-size: 18px;
  }
`;

export const StarsBtnWrapper = styled.div `
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;