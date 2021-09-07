import React, {useState} from 'react';
import {WeatherBox, Text, MoonParameters, MoonFlex, MoonContainer, MoonWidgetContainer} from "./MoonWidgetElements";
import {
    Date,
    Headline, Input, Location,
    SearchBoxBar,
    SmallerContainer,
    Smallheader,
    WeatherWidgetContainer,
    SearchBox
} from "../Weather/WeatherElements";

const api2 = {
    key2: "c197cc54ce6340edadacd0890b38da83"
}

const MoonWidget = () => {
    const [finding2, setFinding2] = useState("");
    const [moon, setMoon] = useState({});

    const search2 = evt => {
        if(evt.key === "Enter") {
            fetch(`https://api.ipgeolocation.io/astronomy?apiKey=${api2.key2}&location=${finding2}`)
                .then(res => res.json())
                .then(result => {
                    setMoon(result);
                    setFinding2("");
                    console.log(result);
                });
        }
    }

    return (
        <MoonWidgetContainer>
            <Headline>Do you want to give it a try to photograph the moon?</Headline>
            <Smallheader>Check the parameters of the Moon to choose the best settings tonight!</Smallheader>
            <SmallerContainer>
                <SearchBox>
                    <SearchBoxBar>
                        <Input
                            type="text"
                            placeholder="Search the area"
                            onChange={e => setFinding2(e.target.value)}
                            value={finding2}
                            onKeyPress={search2}/>
                    </SearchBoxBar>
                    <WeatherBox>
                        {(typeof moon.location != "undefined") ? (
                            <MoonContainer>
                                <Date>{moon.date}, {moon.current_time}</Date>
                                <Location>{moon.location.state}</Location>
                                <MoonFlex>
                                <MoonParameters>
                                    <Text>Day lenght: {moon.day_length}</Text>
                                    <Text>Moon rise: {moon.moonrise}</Text>
                                    <Text>Moon set: {moon.moonset}</Text>
                                    <Text>Moon distance: {moon.moon_distance}</Text>
                                    <Text>Moon altitude: {moon.moon_altitude}</Text>
                                    <Text>Azimuth: {moon.moon_azimuth}</Text>
                                </MoonParameters>
                                <img src="images/moon.png" alt="moon"
                                                style={{
                                                    width:"250px",
                                                    borderRadius:"50%",
                                                    margin:"20px"
                                                }}/>
                                </MoonFlex>
                            </MoonContainer>
                        ) : ("")}
                    </WeatherBox>
                </SearchBox>
            </SmallerContainer>
        </MoonWidgetContainer>
    );
}

export default MoonWidget;