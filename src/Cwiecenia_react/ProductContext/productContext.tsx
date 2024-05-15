

// tworzymy typ dla naszego product

import React, { useEffect, useState } from "react";
import { FC, PropsWithChildren, createContext } from "react";

// id, title, price bo takie sa w https://dummyjson.com/products
type Product = {
    id: number;
    title: string;
    price: number
}

// tworzymy ContextType dla naszego product
// tutaj rowniez wpisujemy nasze funkcje co beda nizej w kodzie 
type ProductContextType = {
    products: Product[];
    addProduct: (product: Product) => void;
    deleteProduct: (id: number) => void;
}


// przekazujemy wszystkie danne z providera tutaj zeby poznie moc skorzystac z tych dannych
export const  ProductContext = createContext<ProductContextType>(
    {} as ProductContextType
);

// tutaj uzywamy FC, dla tego zeby nie tworzyc dodatkoy stan child
export const ProductContextProvider: FC<PropsWithChildren> = ({children})=> {
const [products, setProducts] = useState<Product[]>([]);

const addProduct = (product: Product) => {
setProducts((prev) => [...prev, product]);
}

const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
};

const fetchProducts = async () => {
    try {
    const res = await fetch("https://dummyjson.com/products");

    if(!res.ok) throw new Error("Cannot fetch products");

    const { products } = await res.json();

    if (products) setProducts(products);
} catch (e) {
    console.log(e)
}
};

useEffect(() => {
    fetchProducts();
}, []);

  
    return (
    <ProductContext.Provider value={{
        products,
        addProduct,
        deleteProduct,
    }}>
        {children}
    </ProductContext.Provider>
)
}