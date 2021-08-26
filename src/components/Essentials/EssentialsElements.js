import styled from "styled-components"

export const EssentialsContainer = styled.div `
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  margin-top: -60px;
  
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const EssentialsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const EssentialsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 700px;
  padding:30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    z-index: 1;
  }
`
export const EssentialsIcon = styled.img `
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const EssentialsH1 = styled.h1 `
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  
  @media screen and (max-width: 480px) {
  font-size: 2rem;
}
`

export const EssentialsH2 = styled.h1 `
  font-size: 1rem;
  margin-bottom: 10px;
`

export const EssentialsP = styled.p `
  font-size: 1rem;
  text-align: center;
  padding-bottom: 1rem;
`