import { useState, FormEvent } from "react";
type Props = {
  products: string[];
};
  export const List = ({ products }: Props) => {
    const [productsItem, setProductsItem] = useState(products);
    const [newItem, setNewItem] = useState('');
    const addItem = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setProductsItem((prev) => [...prev, newItem]);
    }
    return(
      <div>
          <h1>Elementy</h1>
          <form onSubmit={addItem}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
          <ul>
              {productsItem.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
      </div>
    )
  }



