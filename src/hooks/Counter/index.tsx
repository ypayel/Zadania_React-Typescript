import React from "react";
import { useState } from "react";



// Licznik kliknięć: Zbuduj komponent Counter, który zawiera przycisk i wyświetla liczbę kliknięć w przycisku.
//  Liczba kliknięć powinna być przechowywana w stanie komponentu.



export const Counter = () => {
const [count, countState] = useState(0);

const counterUp = () => {
    countState((prev) =>prev + 1);
    console.log(count)
};

const counterDown = () => {
    countState((prev) => prev - 1);
};


return (
    <div>
        <h2> Counter {count}</h2>
        <button onClick={counterUp}>+1</button>
        <button onClick={counterDown}>-1</button>
    </div>
)

}


export default Counter;