// Utwórz formularz, który zawiera pole tekstowe i przycisk "Wyślij".
// Zastosuj hook useCallback do zdefiniowania funkcji obsługującej wysłanie formularza,
// aby uniknąć ponownego tworzenia funkcji podczas ponownego renderowania komponentu.

import React from "react";
import { useForm } from "./useForm";

export const Form = () => {
  const { text, setText, handleSubmit } = useForm();

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Wyślij</button>
    </form>
  );
};