import React, {useEffect, useState} from 'react';
import {MoonWidgetContainer, SearchBox, Input, SearchBoxBar, Date, Clouds, LocationBox, MoonBox, MoonLight, MoonPhase, Temp, WeatherBox} from "./MoonElements";

const Api = {
    key: "fa53c1000ce55b3862fa4d4f16610eb1",
    base: "api.openweathermap.org/data/2.5/"
}

const Moon = () => {
    const [moon, setMoon] = useState([]);

    const apiGet= () => {
        fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid=fa53c1000ce55b3862fa4d4f16610eb1`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setMoon(json);
            });
    };

    useEffect(() => {
        apiGet();
    },[]);

    return (
        <MoonWidgetContainer>
            <SearchBox>
                <SearchBoxBar>
                <Input
                    type="text"
                    placeholder="Search..."/>
                </SearchBoxBar>
                <LocationBox>Warsaw</LocationBox>
                <Date></Date>
                <WeatherBox>
                    <Temp>asdd</Temp>
                    <Clouds>dcs</Clouds>
                </WeatherBox>
                <MoonBox>
                    <MoonPhase>dscds</MoonPhase>
                    <MoonLight>dscsd</MoonLight>
                </MoonBox>
            </SearchBox>
        </MoonWidgetContainer>
    );
}

export default Moon;