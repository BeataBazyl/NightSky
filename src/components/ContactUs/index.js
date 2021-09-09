import React, {useState} from 'react';
import {useForm } from 'react-hook-form';
import FadeIn from 'react-fade-in';
import svgContact from '../../images/svg-11.svg';
import {FormField, ContactContainer, Input, FormContent, leftSide, rightSide} from "./ContactUsElements";
import {Button} from "../ButtonElements";
import {Headline} from "../Weather/WeatherElements";


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <ContactContainer>
            <FadeIn>
            <FormField>
                <Headline style={{
                    color:"#fff",
                    textShadow: "2px 0px 9px rgba(1, 1, 1, 1)",
                    fontWeight: "700"}
                    }>
                    Suscribe to our newsletter</Headline>
                <FormContent>
                    <rightSide>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                            <Input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                            <Input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            <Button type="submit" style={{
                                width:"200px",
                                margin: "10px auto"}}
                            >Send</Button>
                        </form>
                    </rightSide>
                    <leftSide>
                        <img src={svgContact} alt="contact" style={{
                            margin: "10px auto 0",
                            width: "400px",
                        }}/>
                    </leftSide>
                </FormContent>
            </FormField>
            </FadeIn>
        </ContactContainer>
    );
};

export default Contact;