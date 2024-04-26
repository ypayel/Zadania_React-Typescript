import React, { ChangeEvent, useState } from "react"

// Utwórz komponent React o nazwie "InputField",
//  który renderuje pole tekstowe na stronie.
//   Komponent powinien mieć możliwość wpisywania tekstu przez użytkownika,
//    a wpisany tekst powinien być wyświetlany na bieżąco
//     pod polem tekstowym.

export const InputField = () => {

const [text, setText] = useState(" ");
    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <>
        <label>
            <input type="text" value={text} onChange={handlerInput} />
        </label>
        <p>Wprowadzony tekst: {text}</p>
        </>
    )
}