import React, {useState} from 'react';
import {useForm } from 'react-hook-form';
import FadeIn from 'react-fade-in';
import svgContact from '../../images/svg-11.svg';
import {FormField, ContactContainer, Input, FormContent} from "./ContactUsElements";
import {Button} from "../ButtonElements";
import {Headline} from "../Weather/WeatherElements";
import * as GrIcons from "react-icons/gr";

const Contact = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const [show, setShow]=useState(true)

    return (
        <ContactContainer>
            <FadeIn>
                {show?<FormField>
                <GrIcons.GrClose style={{
                    position: "relative",
                    float: "right",
                    color: "white",
                    fontSize: "2rem"}} onClick={()=> setShow(false)}/>
                <Headline style={{
                    color:"#fff",
                    textShadow: "2px 0px 9px rgba(1, 1, 1, 1)",
                    fontWeight: "700"}
                    }>
                    Suscribe to our newsletter</Headline>
                <FormContent>
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
                            <Input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
                            <Input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                            <Button type="submit" style={{
                                width:"200px",
                                margin: "10px auto"}}
                            >Send</Button>
                        </form>
                    </>
                    <>
                        <img src={svgContact} alt="contact" style={{
                            margin: "10px auto 0",
                            width: "400px",
                        }}/>
                    </>
                </FormContent>
            </FormField>: null }
            </FadeIn>
        </ContactContainer>
    );
};

export default Contact;