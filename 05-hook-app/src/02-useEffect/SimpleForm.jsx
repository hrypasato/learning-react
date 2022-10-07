import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username:'username',
        email:'user@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(()=>{
        console.log('Username changed!!');
    }, [username])

    useEffect(()=>{
        console.log('Email changed!!');
    }, [email])

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
            />
            { username === 'miguel' && <Message/> }
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="user@mail.com"
                name="email"
                onChange={onInputChange}
            />
        </>
    );
}
