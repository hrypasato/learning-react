import { useReducer } from "react";
import { types } from "../types";
import { AuthContext, authReducer } from "./";

/* const initialState = {
    logged: false,
}
 */
const init = () => {
    const user = JSON.parse( localStorage.getItem('user'));
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {
    
    const [ authState, dispatch ] = useReducer( authReducer, {}, init );
    
    const login = ( name = '' )=>{
        const user = {
            id:6,
            name,
        }

        const action = {
            type: types.login,
            payload: user, 
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        
        const action = {
            types:types.logout,
        }
        
        dispatch(action);
    }


    return (
        <AuthContext.Provider value={{ ...authState, login, logout}} >
            { children }
        </AuthContext.Provider>
    );
}
