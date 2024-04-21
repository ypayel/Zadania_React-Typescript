// 1. Stwórz komponent "ListaElementów", który renderuje listę elementów. Wykorzystaj hook useCallback do zdefiniowania funkcji obsługującej kliknięcie na każdy element listy,
//  aby uniknąć ponownego tworzenia funkcji przy każdym renderowaniu komponentu.

import React, { useCallback, useState } from "react"


export const ListElement = () => {
const [item, setItem] = useState(0)

const handleClick = useCallback(() => {
    setItem((prev) => prev + 1);
}, []);



    return (
        <>
        <h2>Item {item}</h2>
        <button type="submit" onClick={handleClick}>Klik +1</button>
       
        </>
    )
}