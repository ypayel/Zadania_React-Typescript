import { ChangeEvent, useState } from "react";

type Data = {
  searchTerm: string;
  handleSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useSearchForm = (): Data => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return {
    searchTerm,
    handleSearchTerm,
  };
};
