import { ChangeEvent, useState } from "react";

export const Fruits = () => {
  const [fruits, setFruits] = useState(["arbuz", "banan"]);
  const [fruit, setFruit] = useState("");

  const handleFruitName = (event: ChangeEvent<HTMLInputElement>) => {
    setFruit(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // prev jest to stan poprzedni - w tym wypadku lista owócow (linia 4)
    // [...prev] - kopiowanie listy
    setFruits((prev) => [...prev, fruit]);
  };

  return (
    <div>
      <h2>Lista owoców</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fruit">
          Nazwa owoca:{" "}
          <input
            type="text"
            id="fruit"
            value={fruit}
            onChange={handleFruitName}
          />
        </label>
        <button type="submit">Utwórz</button>
      </form>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};