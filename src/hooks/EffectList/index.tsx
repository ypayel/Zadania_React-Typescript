// Utwórz komponent, który pobiera
// i wyświetla listę postów z zewnętrznego API przy użyciu hooka useEffect do pobrania danych po załadowaniu komponentu.

import React from "react";
import { useEffect } from "react";

export const EffectList = () => {
  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) throw new Error("Cannot fetch products!");

      const resJson = await res.json();

      // mozna przypisac wynik do stanu - useState
      // ale nie trzeba

      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h1>lista postów</h1>;
};