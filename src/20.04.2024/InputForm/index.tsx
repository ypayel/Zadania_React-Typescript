import { ChangeEvent, useEffect, useState } from "react";
import React from "react";

export const InputForm = () => {
  const [inputState, setInputState] = useState("");

  // I opcja na obsługe onChange - utworzonie handlera i przekazanie referencji do onChange={handleValue}
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    // co mozemy wyciagnac z obiektu event
    const { value } = event.target;
    setInputState(value);
  };

  // wykona się tylko raz na poczatku przy zamontowaniu komponentu
  useEffect(() => {
    console.log("utworzono input form");

    // odmontowanie komponentu
    return () => {
      console.log("Komponentu odmontowany");
    };
  }, []);

  // wykona się za każdym razem - niezależnie jaki stan się zmieni
  useEffect(() => {
    console.log(
      "coś się zmieniło w stanie komponentu - nie wiemy co, nie wazne"
    );
    // brak tablicy zależności powoduje odswiezanie za kazdym razem kiedy jest wykonany rerender
  });

  useEffect(() => {
    console.log("wartosc input state się zmieniła");
  }, [inputState]);

  return (
    <>
      <label htmlFor="input-id">
        Treść inputa:
        <input
          id="input-id"
          name="input-name"
          value={inputState}
          // II opcja - obsługa event onChange bezposrednio przy uzyciu funkcji anonimowej (callback)
          onChange={(e) => setInputState(e.target.value)}
        />
      </label>
      {/* jeżeli to jest true && to wypisz mi to */}
      {/* jeżeli nie to || to drugie */}
      {/* albo to albo to - na bazie warunku */}
      {/* ternery operator - condition ? true: false */}
      <p>
        {/* !(inputState.length === 0) */}
        {inputState.length > 0
          ? `dlugość input: ${inputState.length}`
          : "Input jest pusty"}
      </p>
      {/* ?? - sprawdza czy zapis po lewej stronie jest undefined lub null */}
      <p>cos tam {"tekst" ?? "Tak jest"}</p>
      {/* podobny przypadek do object?.name */}
    </>
  );
};