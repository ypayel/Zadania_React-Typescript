import React, { ChangeEvent, useState } from "react";


type FormType = {
    firstName: string;
    lastName: string;
  };


export const FormName = () => {
    const [formState, setFormState] = useState<FormType>({
        firstName: "",
        lastName: "",
      });

const { firstName, lastName } = formState;

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form>
        <label htmlFor="firstName">
          Imie:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleInputValue}
          />
        </label>
        <label htmlFor="lastName">
          Nazwisko:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleInputValue}
          />
        </label>
        <button type="submit">Utwórz</button>
      </form>
      <p>
        Imie: {firstName} i nazwisko: {lastName}
      </p>
    </>
  );
};

export default FormName;