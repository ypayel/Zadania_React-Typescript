import React, { ChangeEvent, useState } from "react";

// zadanie 3
// stwórz komponent SearchForm (sklada sie z input + button)
// input bedzie przyjmowal wartosc ze zmiennej searchTerm (przekazywana przez propsy w App.tsx)
// input bedzie oblugiwal event onChange z funkcja o nazwie handleSearchTerm (przekazywana przez propsy w App.tsx)
// skonczone zadanie to wpisanie wyszukiwanego "username" i przefiltrowania tablicy po wcisnieciu przycisku

type Data = {
    searchTern: string,
    handleSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Search = () => {
const [searchTern, setSearchTern] = useState("");


    const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTern(e.target.value);
    }


    
    return (
        <>
        <form>
            <input type="text" value={searchTern} onChange={handleSearchTerm}/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Search;