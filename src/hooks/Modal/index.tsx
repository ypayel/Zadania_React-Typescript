import React from "react";
import { useEffect, useState } from "react";

export const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  useEffect(() => {
    const timerRef = setTimeout(() => {
      openModal();
    }, 5000);

    return () => {
      clearTimeout(timerRef);
    };
  }, []);

  return isVisible ? (
    <div>
      <h1>NASZE POWIADOMINIE</h1>
      <button onClick={closeModal}>Zamknij</button>
    </div>
  ) : null;
};