// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.scss';
// import App from './App.scss';

// export {};

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




export {}

// const name: string = "Jan Pawel";
// let age: number = 35;
// console.log(name);
// console.log(age);

// type Person = {
//     age: number
//     firstName: string
//     lastName: string
// }

// const person: Person = {age: 36, firstName: 'Al black', lastName: 'Abibi'}
// console.log(person);


//union
// zapis szymona            albo | albo, or
// type PersoneNumberType = string | number;

// const ID: PersoneNumberType = 10;
// const stringID: PersoneNumberType = "10";

// // druga versia

// const anyID: string | number = 10;


// // intersection = "&"
// type Person = {
//     firstName: string;
//     age: number;
//     lastName: string;
// }

// type Hero = Person & { mana: number };
// odpowiednik zapisu Hero ponizej
// type Hero = {
//   firstName: string;
//   age: number;
//   lastName: string;
// } & { mana: number }

// const hero: Hero = {
//   firstName: "name",
//   age: 0,
//   lastName: "last name",
//   mana: 100,
// };

// // ---- Pick -> Pick<typ, wlasciwosc | wlasciwosc ...>

// type PeronLastName = Pick<Person, "lastName">;

// wyglad typu po Pick
// type PersonLastName = {
//   lastName: string;
// }

// ---- Omit -> Omit<typ, wlasciwosc | wlasciwosc ...>

// type PersonWithoutName = Omit<Person, "firstName" | "lastName">;
// // type PersonWithoutName = {
// //   lastName: string;
// //   age: number;
// // }


// type People = {
//     name: string;
//     age: number; 
// }

// type Animal = People & {mana: number};

// const animal: Animal = {
//     name: "bobik",
//     age: 43,
//     mana: 100,
// };

// ---- typowanie parametrow funkcji
// type GetItemProps = {
//     id: string;
//     text: string;
//     isVibile: boolean;
//   };
  
//   // typowanie parametrow jako typy proste
//   const getItem = (id: string, text: string, isVisible: boolean) => {};
//   getItem("10", "text", true);
  
//   // destrukturyzujemy parametry obiektu o typie GetItemProps
//   // typowanie parametrow jako obiekt typu GetItemProps
//   const getAnotherItem = ({ id, text, isVibile }: GetItemProps) => {
//     // const { id, text, isVibile } = params;
//     console.log(id, text, isVibile);
//   };
//   getAnotherItem({ id: "id 312321", text: "textdsadas", isVibile: true });
  
  // ---- typowanie wartosci zwracanej z funkcji (): typ => {}
  // nasza funkcja nic nie zwraca > void
  // const getData = (): void => {}
  
  // getData zwraca nam z funkcji dane typu string
//   const getData = (): string => {
//     return `text`;
//   };

  
//   type BigHero = {
//     name: string;
//     strength: number;
    
//   };

//   const getBigHero = (): BigHero => {
//     return {
//         name: `Ber`,
//         strength: 10,
//     };
//   };

// console.log(getBigHero);
