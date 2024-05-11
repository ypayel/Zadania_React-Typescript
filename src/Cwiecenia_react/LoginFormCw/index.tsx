// Utwórz komponent React o nazwie "LoginForm",
//  który renderuje formularz logowania.
//   Formularz powinien mieć pola tekstowe
//    dla wprowadzenia nazwy użytkownika i hasła,
//     oraz przycisk "Zaloguj się". Po kliknięciu przycisku,
//      komponent powinien przetworzyć dane z formularza
//       i wyświetlić alert z danymi użytkownika.

import React, { ChangeEvent, FormEvent, useState } from "react"


export const LoginFormCw = () => {
const [password, setPassword] = useState(" ");
const [last, setLast] = useState(" ");

const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
}

const handleLast = (e: ChangeEvent<HTMLInputElement>) => {
    setLast(e.target.value)
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`Zostalo zmienione haslo: ${password}` );
    alert (`Zostal zmieniony login: ${last}`);
}
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={password} onChange={handlePassword}/>
            <input type="text" value={last} onChange={handleLast}/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}