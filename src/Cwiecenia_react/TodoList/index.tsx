import React, { ChangeEvent, useState } from "react"

// Utwórz komponent React o nazwie "TodoList",
//  który renderuje listę zadań do wykonania.
//   Komponent powinien mieć możliwość dodawania
//    nowych zadań poprzez wpisanie tekstu w pole tekstowe
//     i kliknięcie przycisku "Dodaj".
//      Dodane zadania powinny być wyświetlane na liście.



export const TodoList = () => {
    const [text, setText] = useState<string>('');
    const [tasks, setTasks] = useState<string[]>([]);
    

    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleAddTask = () => {
        if (text.trim() !== '') {    // trim usuwa spracje, tabulatory, nowe linii z poczatku i do konca ciaga znakow 
          setTasks([...tasks, text]);  // trzeba wpisac string w useState, bo wywala blad "Type 'string' is not assignable to type 'never'"
          setText('');
        }
      };
    return (
        <>
        <input type="text" value={text} onChange={handlerInput}/>
        <button onClick={handleAddTask}>Dodaj</button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>{task}</li>
            ))}
        </ul>
    
        </>
    )
}

export default TodoList;