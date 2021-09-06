import React, {useState} from 'react';
import {WeatherWidgetContainer,
    Smallheader,
    Headline,
    SearchBox,
    Input,
    SearchBoxBar,
    Date,
    Clouds,
    Location,
    Temp,
    WeatherBox,
    SmallerContainer, CoordsAndClouds, GeoTitle, Parameteres, MoonBox, CloudIcon} from "./MoonElements";
import * as WiIcons from "react-icons/wi";
import * as FaIcons from "react-icons/fa";
import MoonWidget from "../MoonWidget/MoonWidget";

const api = {
    key: "fa53c1000ce55b3862fa4d4f16610eb1",
    base: "https://api.openweathermap.org/data/2.5/",
}

const Moon = () => {
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
        <WeatherWidgetContainer>
            <Headline>Is it today good weather for hunting stars and explore sky?</Headline>
            <Smallheader>Let's check out!</Smallheader>
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
                <Date>{date}</Date>
                <WeatherBox>
                    {(typeof weather.main != "undefined") ? (
                    <>
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
            <SearchBox>
                <MoonBox>
                    <MoonWidget/>
                </MoonBox>
            </SearchBox>
            </SmallerContainer>
        </WeatherWidgetContainer>
    );
}

export default Moon;