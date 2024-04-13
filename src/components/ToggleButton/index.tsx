import React from "react";
import { useState } from "react";

// Toggle Button: Zbuduj komponent ToggleButton,
//  który zmienia swój stan (włączony/wyłączony) za każdym kliknięciem w przycisk.
//   Stan komponentu powinien przechowywać informację,
//    czy przycisk jest aktualnie włączony.


export const ToggleButton = () => {
    const [handleVision, setVision] = useState(false)

   

    const handlerOn = () => {
        setVision(!handleVision);
    }

    return (
        <div>
            <button onClick={handlerOn}>{handleVision ? `Hide` : `Show`}</button>
        </div>
    )
}

export default ToggleButton;