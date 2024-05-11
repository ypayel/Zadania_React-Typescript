// Utwórz komponent React o nazwie "RegistrationForm",
//  który renderuje formularz rejestracyjny.
//   Formularz powinien mieć pola tekstowe dla wprowadzenia adresu e-mail,
//    hasła oraz potwierdzenia hasła, oraz przycisk "Zarejestruj się".
//     Po kliknięciu przycisku,
//      komponent powinien przetworzyć dane z formularza,
//       sprawdzić czy hasła się zgadzają,
//        a następnie wyświetlić alert z danymi użytkownika,
//         jeśli wszystkie dane są poprawne.

import React, { ChangeEvent, FormEvent, useState } from "react"


export const RegistrationForm = () => {
 const [password, setPassword] = useState(" ");
 const [checkPassword, setCheckPassword] = useState(" ");
 const [email, setEmail] = useState(" ");

 const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
 }

 const handleCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckPassword(e.target.value)
 }
 const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
 }

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(password === checkPassword) {
        alert(`Haslo jest takie: ${password}`);
        alert(`Email jest taki: ${email}`);
    } else {
        alert(`Haslo sie rozni`)
    }
    
 }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <span>Email:</span><input type="text" onChange={handleEmail} value={email} id="email" />
            <span>Haslo:</span><input type="text" onChange={handlePassword} value={password} id="password" />
            <span>Powtorz haslo: </span><input type="text" onChange={handleCheckPassword} value={checkPassword} id="checkPass" />
            <button type="submit">Zarejstruje sie</button>
        </form>
        </>
    )
}