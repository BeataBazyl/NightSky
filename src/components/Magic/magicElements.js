import styled from "styled-components";

export const MagicContainer = styled.div`
  background: #000000;
  color: #fff;
  width: 100vw;
  padding: 10px 20px;
`

export const MagicWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 10px;
  
  @media screen and (max-width: 768px) {
    width: 400px;

  @media screen and (max-width: 460px) {
    width: 200px;
`
export const MagicHeader = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
`

export const MagicText = styled.div`
  color: #63838F;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const MagicP = styled.div`
  max-width: 440px;
  margin: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`

export const MagicIcons = styled.div`
  display: flex;`

export const MagicIconLink = styled.a`
  padding-right: 20px;
  margin: auto;
  font-size: 60px;
  color: #fff;
  text-decoration: none;
`