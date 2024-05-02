import React, { useState } from "react"

// Utwórz komponent React o nazwie "Dropdown",
//  który renderuje rozwijaną listę opcji.
//   Przekazuj tablicę opcji jako props do komponentu
//    i umożliwiaj użytkownikowi wybór jednej z dostępnych opcji.


export const DropDown = () => {
const [vision, setVision] = useState(false);

const handleVision = () => {
    setVision(!vision)
}
    return (
        <>
        <button onClick={handleVision}>{vision ? `Hide` : `Show`}</button>
        </>
    )
}