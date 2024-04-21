// - SENS ZADANIA - wyciagniecie logiki do customowego hooka - useSearchForm -> przykład w hooks/useCallback/Form
// - stwórz komponent SearchForm (sklada sie z input + button)
// - input bedzie przyjmowal wartosc ze zmiennej searchTerm (przekazywana przez propsy w App.tsx)
// - input bedzie oblugiwal event onChange z funkcja o nazwie handleSearchTerm (przekazywana przez propsy w App.tsx)
// - skonczone zadanie to wpisanie wyszukiwanego "username" i przefiltrowania tablicy po wcisnieciu przycisku

import React from "react";
import { useSearchForm } from "./useSearchForm";

export const SearchForm = () => {
  const { searchTerm, handleSearchTerm } = useSearchForm();

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      <button>Utwórz</button>
    </form>
  );
};
