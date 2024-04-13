import React from 'react';
import './App.scss';
import './typescript.ts'
import Welcome from './components/Welcome/index.tsx';
import { Counter } from './components/Counter/index.tsx';
import ToggleButton from './components/ToggleButton/index.tsx';

function App() {

 {/* zadanie 1
 Deklaracja zmiennych: Zadeklaruj zmienną message typu string
  i przypisz do niej dowolny tekst. Wyświetl wartość zmiennej
   w konsoli. */}


  const message = `Aboba`;
  console.log(message);


{/* zadanie 2
 Typy podstawowe: Utwórz zmienne dla każdego z podstawowych
  typów w TypeScript: boolean, number, string.
 Przypisz im odpowiednie wartości i wyświetl je w konsoli. */}



  const number = 22;
  console.log(number);
  const string = "bla bka vbla";
  console.log(string)
  const boolean = true;
  console.log(boolean);
  

  //zadanie 3 
  // Tablice i typy: Zdefiniuj tablicę numbers, która będzie przechowywać tylko wartości typu number.
  //  Dodaj do niej kilka liczb, a następnie użyj pętli,
  //   aby wyświetlić każdy element w konsoli.
const tab = [4,7,8,4,2]

for(let i = 0; i < tab.length; i++){
  console.log(tab[i]);
}



//zadanie 4 
// Interfejsy: Zdefiniuj interfejs User z polami: id typu number i username typu string.
//  Utwórz obiekt user typu User i przypisz do niego wartości.

const User = {
  id: 1,
  username: `Alex`,
  email: `alexbob@gmail.com`,
  age: 24,
  sex: `male`,
  birthday: `02.12.1999`,
  greet: " ",
};
console.log(User);

//zadanie 5 
// Funkcje: Napisz funkcję add, która przyjmuje dwa argumenty typu number i zwraca ich sumę.
//  Sprawdź działanie funkcji, wywołując ją z różnymi argumentami.


const getSum = (a,b)=> {
let sum = 0;
sum = b + a;

return console.log(sum);
}
getSum(78,4);


//zadanie 6 
// Typy Unii: Utwórz zmienną id, która może przechowywać wartości typu number lub string.
//  Przypisz do niej kilka różnych wartości, sprawdzając,
//   jak TypeScript obsługuje typy unii.

let stringNumber: string | number;

stringNumber = 11;
stringNumber = "baf";
console.log(stringNumber);


//zadanie 7
// Typy Literalne: Zdefiniuj typ Direction,
//  który może przyjmować jedną z czterech wartości: 'up', 'down', 'left', 'right'.
//   Utwórz zmienną typu Direction i przypisz do niej jedną z tych wartości.


const Direction = {
  UP: `up`,
  DOWN: `down`,
  LEFT: `left`,
  RIGHT: `right`,
};

let myDirection = Direction.DOWN
console.log(myDirection);



//zadanie 8 
// Interfejsy i opcjonalne pola: Rozszerz interfejs User o opcjonalne pole email typu string.
//  Utwórz obiekty typu User, z których niektóre zawierają pole email,
//   a inne nie.

// email: `alexbob@gmail.com`,
//   age: 24,
//   sex: `male`,
//   birthday: `02.12.1999`,


//zadanie 10 
// Funkcje i typy zwrotne: Napisz funkcję getUserInfo,
//  która przyjmuje obiekt User jako argument i zwraca string zawierający
//   informacje o użytkowniku. Na przykład, dla użytkownika z id 1 i username 'Alice',
//    funkcja powinna zwrócić 'User Alice has ID 1'.

const getUserInfo = (User) => {
if (User.id === 1) {
  console.log(`User ${User.username} has ID ${User.id}`)
}

}
getUserInfo(User);


//zadanie 11 
// Interfejsy i metody: Dodaj do interfejsu User metodę greet,
//  która nie przyjmuje argumentów i zwraca string.
//   Implementacja metody powinna zwracać powitanie,
//    np. "Hello, [username]".
//    Utwórz obiekt User z implementacją tej metody i wywołaj ją.
    

const handleUser = (User) => {
  console.log(`Hello ${User.username}`);
}
 handleUser(User); 
   



 
   return (
      <div className="App">
        <Welcome  welcomeText="Witam na stronie"/>
        <Counter />
        <ToggleButton />


       
      </div>
    );
}

export default App;



