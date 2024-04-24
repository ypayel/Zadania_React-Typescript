import React, { ChangeEvent, useState } from "react"

// zadanie 5
// stworz licznik kliknięć co 5
// oraz formularz składający się z imienia i telefonu który posiada podgląd live


export const CounterForm = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState(" ");
    const [phone, setPhone] = useState(" ");


    const addCount = () => {
        setCount((prev) => prev + 5);
        console.log(count);
    }
    
    const minusCount = () => {
        setCount((prev) => prev - 5);
        console.log(count)
    }
    
    const nameHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        e.preventDefault();
        console.log(name);
        
    }

    const phoneHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
        e.preventDefault();
        console.log(phone);
    }


    const submitHandle = (e) => {
        e.preventDefault();
        alert(`Data was submited, ${name}, ${phone}` );
    }   
    
    return (
        <>
        <h2>Counter: {count}</h2>
        <button value={count} onClick={addCount}>Add</button>
        <button value={count} onClick={minusCount}>Minus</button>
        <form onSubmit={submitHandle}>
            <label>
            <input type="text" value={name} onChange={nameHandle}/>
            </label>
            <label htmlFor="">
            <input type="text" value={phone} onChange={phoneHandle}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}