// Utwórz komponent React o nazwie "List",
//  który renderuje listę elementów na stronie.
//   Przekazuj tablicę z elementami jako
//    props do komponentu i wyrenderuj każdy element listy
//     w postaci punktu lub numeru.

import React from "react"


type Posts = {
    id: number;
    title: string;
    body: string;
    
  };

type Props = {
    list: Posts[];
}



export const ListCw = ({ list }: Props) => {
    return (
        <>
        <h2>Lista elementow </h2>
        {list.length > 0 ? (
            <ul>
                {list.map(({ id, title, body,}) => (
                    <Posts key={id} title={title} body={body}/>
                ))}
            </ul>
        ) : (
            <span>Lista jes pusta</span>
        )}
        </>
    )
}

export default ListCw;