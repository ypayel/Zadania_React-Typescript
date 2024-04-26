import React from "react"

// Utwórz komponent React o nazwie "Button",
//  który renderuje prosty przycisk na stronie.
//   Przycisk powinien mieć tekst "Kliknij mnie"
//    i po kliknięciu powinien wyświetlić alert
//     z komunikatem "Przycisk został kliknięty!".


export const  Button = () => {
    const handlerButton = ()=> {
       alert(`Przycisk został kliknięty!`);
    }

    return (
        <>
        <button type="submit" onClick={handlerButton}>Klikni mnie</button>
        </>
    )
}