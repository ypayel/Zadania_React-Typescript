import React from "react";
import { ChangeEvent, FormEvent, useState } from "react";

export const ProfileForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    phone: "",
  });
  // tworzymy stan komponentu

  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormState((prev) => ({
      ...prev,
      // odczyt danych i ustawianie danych z obiektu formState formState[firstName] = "imie" === formState.firstName = "imie"
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { firstName, lastName, age, phone } = formState;
    console.log(firstName, lastName, age, phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        Imie:{" "}
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formState.firstName}
          onChange={handleValue}
        />
      </label>
      <label htmlFor="lastName">
        Nazwisko:{" "}
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formState.lastName}
          onChange={handleValue}
        />
      </label>
      <label htmlFor="age">
        Wiek:{" "}
        <input
          type="number"
          name="age"
          id="age"
          value={formState.age}
          onChange={handleValue}
        />
      </label>
      <label htmlFor="phone">
        Telefon:{" "}
        <input
          type="text"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleValue}
        />
      </label>
      <button type="submit">Utwórz</button>
    </form>
  );
};