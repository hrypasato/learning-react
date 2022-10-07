import { useForm } from "../hooks";
import { Message } from "./Message";

export const CustomSimpleForm = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        username:'',
        email:'',
        password:'',
    });

    const { username, email, password } = formState;
    

    return (
        <>
            <h1>Custom Simple Form</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            { username === 'miguel' && <Message/> }
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="user@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button 
                className="btn btn-primary mt-2"
                onClick={ onResetForm }
            >Borrar</button>
        </>
    );
}
