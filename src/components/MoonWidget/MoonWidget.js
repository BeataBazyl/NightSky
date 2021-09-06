import React, {useState} from 'react';
import {Input2, SearchBox2, WeatherBox, Location2} from "./MoonWidgetElements";

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
        <>
            <SearchBox2>
                <Input2
                    type="text"
                    placeholder="Search the City"
                    onChange={e => setFinding2(e.target.value)}
                    value={finding2}
                    onKeyPress={search2}/>
            </SearchBox2>
            <WeatherBox>
                {(typeof moon.location.city != "undefined") ? (
                    <>
                        <Location2>{moon.sunset}</Location2>
                    </>
                ) : ("")}
            </WeatherBox>
        </>
    );
}

export default MoonWidget;