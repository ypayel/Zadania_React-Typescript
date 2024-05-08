// Utwórz komponent React o nazwie "Modal",
//  który renderuje modal (okno dialogowe) na stronie.
//   Komponent powinien mieć przycisk "Otwórz modal",
//    który po kliknięciu wyświetla modal z dowolną treścią.
//     Modal powinien mieć również przycisk "Zamknij", który zamyka modal.

import React, { useState } from "react"

export const Modal = () => {
const [vision, setVision] = useState(false);

const handleVision = () => {
    setVision(!vision)
}

return (
    <>
    <button onClick={handleVision}>{vision ? `Zamknij` : `Otwórz modal`}</button>
    {vision && <p>Komunnikat wyswietlony</p>}
    </>
)
}