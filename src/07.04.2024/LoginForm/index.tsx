import React from "react";
import { useState, useEffect, ChangeEvent } from "react";


type Props = {
    initPass: string;
    initLogin: string;
}



export const LoginForm = ({ initLogin, initPass} : Props) => {
    const [password, setPass] = useState (initPass);
    const [login, setLogin] = useState (initLogin);


    const updatePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value); 
    }
    const updateLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);    
        }

        useEffect (() => {
        console.log(`zamontowanie komponentu LoginForm`);
        

        return () => {
            console.log("odmotowanie komponentu LoginForm")
        };

    }, [])

        useEffect(() => {
            console.log(`stan login zostal zmieniony na ${login}`);
        }, [login])


        useEffect(() => {
            console.log(`stan password zostal zmieniony na: ${password}`);
        }, [password]);

    return (
        <div>
        <form>
            <label htmlFor="login">
            <input type="number" value={password} onChange={updatePassword} id="login"/>
            </label>
            <label htmlFor="password"> 
            <input type="text" value={login} onChange={updateLogin} id="password"/>
            </label>  
            <button type="submit">Wysli</button>
        </form>
        </div>
    )
}

