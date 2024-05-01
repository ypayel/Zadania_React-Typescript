// Utwórz komponent React o nazwie "Toggle",
//  który renderuje przycisk przełącznika na stronie.
//   Przycisk powinien mieć dwa stany: "Włączone" i "Wyłączone".
//    Po kliknięciu przycisku, stan powinien się zmieniać.

import React, { useState } from "react"

export const Toggle = ()=> {
    const [on, setOn] = useState(true);

    const handleButton = (e) => {
        e.preventDefault();
         setOn(prev => !prev )
    }
    return (
        <>
        <button onClick={handleButton}>
            {on ? `Wlaczony` : `Wylaczony`}
            </button>
        </>
    )
}