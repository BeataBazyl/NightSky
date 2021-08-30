import React, {useState, useEffect} from 'react';
import {NasaPictureContainer, TopLine, Heading, NasaPictureText, Title, Date, NasaPicture, PictureContentWrap} from "./NasaElements";

const Nasa = () => {
    const [picture, setPicture] = useState([]);

    const apiGet= () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=XPxcqdjRsRonuJqMg2IiQoQ9hDeMiZGeFVnLd8J4`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setPicture(json);
            });
    };

    useEffect(() => {
        apiGet();
    },[]);

        return (
            <NasaPictureContainer>
                    <TopLine>You need more insiration for your work? Let's see what the best of sky hunters catch in the sky. Just let us introduce You...</TopLine>
                        <Heading>NASA Picture of the Day</Heading>
                            <Date>{picture.date}</Date>
                                <Title>{picture.title}</Title>
                                    <PictureContentWrap>
                                        <NasaPictureText>
                                            {picture.explanation}
                                        </NasaPictureText>
                                        <NasaPicture>
                                            <img src={picture.url} alt="photo of the day NASA" width="700px" height="380px"/>
                                        </NasaPicture>
                                    </PictureContentWrap>
            </NasaPictureContainer>
        );
}

export default Nasa;