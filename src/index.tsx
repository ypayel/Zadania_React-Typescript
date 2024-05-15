import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { ListContextProvider } from './Cwiecenia_react/ListContext/ListContext.tsx';
import { ProductContextProvider } from './Cwiecenia_react/ProductContext/productContext.tsx';


export {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ListContextProvider>
    <ProductContextProvider>
    <App />
    </ProductContextProvider>
    </ListContextProvider>
  </React.StrictMode>
);


