// Stwórz komponent, który będzie odliczał czas w formacie HH:MM:SS,
// wykorzystując hook useEffect do aktualizacji czasu co sekundę.

import React from "react";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      if (seconds < 59) {
        setSeconds((prev) => prev + 1);
      }
      if (seconds === 59) {
        setSeconds(0);
        setMinutes((prev) => prev + 1);
      }
      if (minutes === 60) {
        setMinutes(0);
        setHours((prev) => prev + 1);
      }
    }, 1);

    return () => clearInterval(timerID);
  }, [seconds, minutes]);

  return (
    <h1>
      {hours < 10 ? `0${hours}` : hours}:
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </h1>
  );
};