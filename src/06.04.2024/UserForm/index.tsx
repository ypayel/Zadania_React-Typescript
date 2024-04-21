import React from "react";
import {ChangeEvent, useState} from "react";

export const UserForm = () => {
    const [name, setName] = useState("");
    const [lastname, setLast] = useState("")


    const updateName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        }
        const updateLast = (event: ChangeEvent<HTMLInputElement>) => {
        setLast(event.target.value);    
        }

    return (
        <form>
    <input type="text" value={name} onChange={updateName} />
    <input type="text" value={lastname} onChange={updateLast} />
    </form>

    );
}

export default UserForm;