import React from "react";
import { useState } from "react";

export const FunctionCounter = () => {
const [count, setCount] = useState(0);


const increment = () => {
    // roznica miedzy setCount - FC, a this.setCount z Class component
    // w this.setCount wpisywalismy tylko to co chcemy zaktualizowac
    // w setCount gdy mamy obiekt musimy przekazac wszystkie wlasciwosci (do tego uzyjemy prev)
    // setCount jest niejako asynchroniczny - podobne działanie
    setCount((prev) => prev + 1);
    console.log(count);
  };

   const decrement = () => {
    setCount((prev) => prev -1);
   };





    return (
        <div>
            <span></span>
            <h1>Function counter</h1>
            <span>Count: {count}</span>
            <button onClick={increment}></button>
            <button onClick={decrement}></button>
        </div>
    )
}

export default FunctionCounter;