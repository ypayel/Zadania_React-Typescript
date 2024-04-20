import { ChangeEvent, FormEvent, useState } from "react"

export const Form = () => {
    const [people , setProperty] = useState([""])
    const [firstName, setName] = useState("");
    const [lastName, setLast] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhone] = useState("");


    const handlerName= (event: ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
    }

    const handlerLast = (event: ChangeEvent<HTMLInputElement>) => {
        setLast(event.target.value);
    }

    const handlerAge = (event: ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value);
    }

    const handlerPhone = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    }

    const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setProperty((prev) => [...prev, firstName]);
        setProperty((prev) => [...prev, lastName]);
        setProperty((prev) => [...prev, age]);
        setProperty((prev) => [...prev, phoneNumber]);
    }

    return (
        <div>
            <h2>Form</h2>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="name">
                    <input type="text" value={firstName} onChange={handlerName} id="name" />
                </label>
                <label htmlFor="lastName">
                    <input type="text" value={lastName} onChange={handlerLast} id="lastName" />
                </label>
                <label htmlFor="age">
                    <input type="number" value={age} onChange={handlerAge} id="age"/>
                </label>
                <label htmlFor="phoneNumber">
                    <input type="text" value={phoneNumber} onChange={handlerPhone} id="phoneNumber" />
                </label>
                <button type="submit">Wysli</button>
            </form>
            <ul>
        {people.map((firstName, index) => (
          <li key={index}>{firstName}</li>
        ))}
      </ul>
        </div>
    )
}