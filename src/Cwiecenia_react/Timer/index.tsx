// Utwórz komponent React o nazwie "Timer",
//  który wyświetla aktualny czas na stronie i odlicza sekundy w dół.
//   Początkowa wartość czasu powinna być ustalona jako props
//    i komponent powinien wyświetlać komunikat "Czas minął!"
//     po zakończeniu odliczania.

import React, { useEffect, useState } from "react"

export const Timer = ({time} ) => {
    const [seconds, setSeconds] = useState(time);

    useEffect(() => {
        const handleTime = setInterval(() => {
                setSeconds((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(handleTime);
    },[]);

   
    return (

        <>
        {seconds > 0 ? (
            <span> Sekundy {seconds}</span>
        ) : (
            <span>Czas Minal</span>
        )}
        
        </>
    )
}