import React, { ChangeEvent, useState } from "react"

// stwórz komponent funkcyjny przechowujący formularz oraz stan formularza (imie oraz numer buta )
// formularz składa sie z 2 inputów + przycisk button type submit



export const FuncForm = () => {
    const [name, setName] = useState(" ");
    const [shoeNumber, setShoe] = useState(0);


    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        e.preventDefault();
        console.log(name);

    }

    const handShoe =(e: ChangeEvent<HTMLInputElement>) => {
        setShoe(e.target.value);
        e.preventDefault();
        console.log(shoeNumber);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Imie: ${name} zostalo zmienione oraz Nazwisko: ${shoeNumber}`)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                <input type="number" value={shoeNumber} onChange={handShoe}/>
            </label>
            <label>
                <input type="text" value={name} onChange={handleName}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}