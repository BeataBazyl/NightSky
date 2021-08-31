import styled from 'styled-components'

export const NasaPictureContainer =  styled.div `
  padding: 40px 80px;
  background: black;
`
export const TopLine =  styled.div `
  color: #63838F;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading =  styled.h1 `
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Title =  styled.div `
    color: cornflowerblue;
`
export const Date =  styled.div `
  font-size: 12px;
  color: #fff;
`

export const NasaPictureText =  styled.div `
  margin: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`

export const PictureContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const NasaPicture = styled.div`
  `