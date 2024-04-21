import { FormEvent, useCallback, useEffect, useState } from "react";

type Data = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const useForm = (): Data => {
  const [text, setText] = useState("");

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit form");
  }, []);

  useEffect(() => {
    console.log("utworzenie nowej referencji funkcji handleSubmit");
  }, [handleSubmit]);

  return {
    text,
    setText,
    handleSubmit,
  };
};