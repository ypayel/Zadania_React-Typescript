import React, { FC, PropsWithChildren, createContext, useEffect, useState } from "react";

type List = {
  name: string;
  id: number;
};

type ListContextType = {
  lists: List[];
  favList: List[];
  addFav: (list: List) => void;
  removeList: (id: number) => void;
};

export const ListContext = createContext<ListContextType>({} as ListContextType);

export const ListContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [lists, setLists] = useState<List[]>([]);
  const [favList, setFavList] = useState<List[]>([]);

  const addFav = (list: List) => {
    setFavList((prev) => [...prev, list]);
  };

  const removeList = (id: number) => {
    setLists((prev) => prev.filter((list) => list.id !== id));
  };

  const fetchLists = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");

      if (!res.ok) throw new Error("Nie udało się pobrać list");

      const { lists } = await res.json();

      if (lists) setLists(lists);
    } catch (error) {
      console.error("Błąd podczas pobierania list:", error);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <ListContext.Provider
      value={{
        lists,
        favList,
        addFav,
        removeList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
