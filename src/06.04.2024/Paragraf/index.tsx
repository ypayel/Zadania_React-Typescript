import { useState } from "react";

export const Paragraf = () => {
    const [text, setText] = useState("Text powitalny");



    const updateText = () => {
        setText("Tekst2")
        }


    return (
        <div>
    <p>{text}</p>
    <button onClick={updateText}>Update</button>
    </div>
    );
}
