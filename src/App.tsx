import React, { useContext} from 'react';
import './App.scss';
import './typescript.ts'
import { ListContext } from './Cwiecenia_react/ListContext/ListContext.tsx';




// zajecia 20.04.2024


const getItem = (text: string) => {};

getItem("text");


const App = () => {
//   // updateWelcomeText('nowy tekst welcome')
//   const [postList, setPostList] = useState<Post[]>([]);

//   const fetchPost = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/posts");

//       if (!res.ok) throw new Error("Cannot fetch post data");

//       const { posts } = await res.json();
//       setPostList(posts);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const addPost = (post: Post) => setPostList((prev) => [...prev, post]);

//   useEffect(() => {
//     fetchPost();
//   }, []);


const {lists, addFav, removeList } = useContext(ListContext)

   return (
      <div className="App">
         <h2>Lista receptow</h2>
      {lists.length > 0 ? (
        <ul>
          {lists.map(({ id, name, }) => (
            <li key={id}>
              Nazwa: {name} - id: {id}
            </li>
          ))}
        </ul>
      ) : null}
        <button onClick={() => removeList(1)}>Usuń elemenet</button>
      <button
        onClick={() =>
          addFav({
            id: 1,
            name: "Classic Margherita Pizza",
          })
        }
      >
        Dodaj nowy recept 
      </button>
      </div>
    );
}

export default App;



