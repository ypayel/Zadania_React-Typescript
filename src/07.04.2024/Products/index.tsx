import { ok } from "assert";
import { useEffect, useState } from "react"

type Posts = {
    id: string,
    title: string,
    body: string,
    userID: number,
    reactions: number,
}



export const Porducts = () => {
    const [posts, setPosts] = useState<Posts[]>([]);


    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/posts')
    
            if (!res.ok) {
                throw new Error("Something went wrong!");
              }
    
            const { posts } = await res.json();
            setPosts(posts);
    
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
          <h2>Lista produktow</h2>
          {posts.length > 0 && (
            <ul>
              {posts.map((posts, index) => (
                <li key={index}>{posts.id}</li>
              ))}
            </ul>
          )}
        </div>
    );
}



