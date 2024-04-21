// Filtrowanie listy: Utwórz komponent, który renderuje listę elementów,
// a użytkownik może wprowadzić frazę do filtrowania. Wykorzystaj hook useMemo,
// aby zapamiętać przefiltrowaną listę i uniknąć ponownego filtrowania przy każdej zmianie wprowadzanej frazy.

import React from "react";
import { useMemo, useState } from "react";

type Item = {
  id: number;
  title: string;
  content: string;
};

const list = [
  { id: 1, title: "Element nr 1", content: "lorem ipsum..." },
  { id: 2, title: "Element nr 2", content: "lorem ipsum..." },
  { id: 3, title: "Element nr 3", content: "lorem ipsum..." },
];

export const FilteredList = () => {
  const [currList, setCurrList] = useState<Item[]>(list);
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const filteredList = useMemo(() => {
    console.log("działa memo");
    return currList.filter(({ title }) => title.includes(searchText));
  }, [searchText, currList]);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <h2>Nasza przefiltrowana lista</h2>
      <ul>
        {filteredList.map(({ id, title, content }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};

