import React, { useState } from 'react';


// Komponent z dynamicznym stylem: Utwórz komponent ColoredBox,
//  którego tło zmienia kolor w zależności od wartości przekazanej przez props.
//  Przetestuj komponent, przekazując różne kolory.


function ColoredBox() {
  const [color, setColor] = useState("red");
  
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    
    <div style={{ width: '100px', height: '100px', backgroundColor: color, border: '1px solid #000' }}>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
      
    </div>
  );
}

export default ColoredBox;


