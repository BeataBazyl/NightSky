import styled from 'styled-components';

export const WidgetContainer =  styled.div `
  padding: 40px 20px;
  background: url("https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?cs=srgb&dl=pexels-jacub-gomez-1142950.jpg&fm=jpg");
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size:  cover;
  -o-background-size: cover;
`
export const SearchBox =  styled.div `
  min-height: 400px;
  min-width: 400px;
  border-radius: 20px;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.8645833333333334) 33%, rgba(99,131,143,0.2959558823529411) 92%);
  background-size: cover;
  background-position: bottom;
  color: black;
  font-size: 14px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 5px 5px 11px 4px #000000;
`
export const Input =  styled.input`
  padding: 10px;
  font-size: 18px;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin: 0 0 25px;
  margin-top: 10px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
`
export const SearchBoxBar =  styled.div`
  display: block;
  width: 100%;
  padding: 15px;
  appearance: none;
  background: none;
  border:none;
  border-radius: 0 0 16px 16px;
`;

export const Location =  styled.div`
  font-size: 4rem;
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: 4px 3px 0 #000;
  padding: 10px 15px;
  border-bottom: 3px solid #fff ;
`
export const Date =  styled.div`
  font-size: 1rem;
  color: white;
  text-align: center;
  text-shadow: 4px 3px 0 #000;
`
export const WeatherBox =  styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;`

export const Temp =  styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  text-shadow: 4px 3px 0 #000;
  padding: 20px;
  margin: 20px 100px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
  border-radius: 100px;
`
export const Clouds =  styled.div`
  font-size: 1.5rem;
  color: white;
  font-weight: bolder;
`
export const CoordsAndClouds =  styled.div`
    color: #fff;
    font-weight: bolder;
    text-align: center;
    margin-bottom: 30px;
    font-size: 3rem;
`
export const Headline =  styled.h1`
  margin: 20px 50px 40px 50px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;
  text-shadow: 4px 3px 0 #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  };
`
export const Smallheader =  styled.p`
  color: #fff;
  font-size: 1.5rem;
  line-height: 28px;
  font-weight: lighter;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 25px auto;
  text-align: center;
  width: 600px;
`
export const SmallerContainer =  styled.section`
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 20px auto;
`
export const GeoTitle =  styled.h1`
  font-size: 1.5rem;
  color: white;
  font-weight: bolder;
`
export const Parameteres =  styled.p`
    font-size: 0.9rem;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 10px;
`
export const CloudIcon =  styled.p`
    font-size: 5rem;
    margin-bottom: -25px;
`