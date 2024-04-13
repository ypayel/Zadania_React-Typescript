import React from "react";
import { ChangeEvent, useState } from "react";


export const ToggleButton = () => {
    const [buttonOn, setOn] = useState("");
    const [buttonOF, setOf] = useState("");

    const handlerOn = (event: ChangeEvent<HTMLButtonElement>) => {
        setOn(event.target.value);
    }

    const handlerOf = (event: ChangeEvent<HTMLButtonElement>) => {
        setOf(event.target.value);
    }


    return (
        <div>
            <button value={buttonOn} onChange={handlerOn}>Show</button>
            <button value={buttonOF} onChange={handlerOf}>Hide</button>
        </div>
    )
}

export default ToggleButton;