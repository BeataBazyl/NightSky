import React, {useState} from 'react';
import {Smallheader,
    Headline,
    SearchBox,
    Input,
    SearchBoxBar,
    Date,
    Clouds,
    Location,
    Temp,
    WeatherBox,
    SmallerContainer, CoordsAndClouds, GeoTitle, Parameteres, CloudIcon, WidgetContainer} from "./WeatherElements";
import * as WiIcons from "react-icons/wi";
import * as FaIcons from "react-icons/fa";

const api = {
    key: "fa53c1000ce55b3862fa4d4f16610eb1",
    base: "https://api.openweathermap.org/data/2.5/",
}

const Weather = () => {
    const [finding, setFinding] = useState("");
    const [weather, setWeather] = useState({});
    let date = String(new window.Date());
    date = date.slice(3,25);

    const search = evt => {
        if(evt.key === "Enter") {
            fetch(`${api.base}weather?q=${finding}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setFinding("");
                console.log(result);
        });
    }
    }

    return (
        <WidgetContainer>
            <Headline>Let see if today is clear sky and good weather condition for hunting stars!</Headline>
            <Smallheader>check out!</Smallheader>
            <SmallerContainer>
            <SearchBox>
                <SearchBoxBar>
                <Input
                    type="text"
                    placeholder="Search the City"
                    onChange={e => setFinding(e.target.value)}
                    value={finding}
                    onKeyPress={search}/>
                </SearchBoxBar>
                <WeatherBox>
                    {(typeof weather.main != "undefined") ? (
                    <>
                    <Date>{date}</Date>
                    <Location>{weather.name}, {weather.sys.country}</Location>
                    <Temp>{Math.round(weather.main.temp)}&#8451;</Temp>
                    <CoordsAndClouds>
                        <FaIcons.FaMapMarkedAlt/>
                        <GeoTitle> City geo location:</GeoTitle>
                        <Parameteres>longitude: {weather.coord.lon},  latitude: {weather.coord.lat}</Parameteres>
                        <CloudIcon><WiIcons.WiNightAltCloudy/></CloudIcon>
                        <Clouds>Cloudiness : {weather.clouds.all}%</Clouds>
                    </CoordsAndClouds>
                    </>
                    ) : ("")}
                </WeatherBox>
            </SearchBox>
            </SmallerContainer>
        </WidgetContainer>
    );
}

export default Weather;