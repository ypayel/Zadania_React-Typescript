import React, { useContext} from 'react';
import './App.scss';
import './typescript.ts'
import { ListContext } from './Cwiecenia_react/ListContext/ListContext.tsx';
import { ProductContext } from './Cwiecenia_react/ProductContext/productContext.tsx';




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

// const {lists, addFav, removeList } = useContext(ListContext) (1)
const {products, addProduct, deleteProduct} = useContext(ProductContext);
   return (
      <div className="App">
         {/* <h2>Lista receptow</h2>
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
      </button>  (1)*/}



      {/* inne zadanie  (2)*/}
        <h1>Lista productow</h1>
        {products.length > 0 ? (
          <ul>
            {products.map(({ id, title, price}) => (
              <li key={id}>
                Nazwa: {title} - cena: {price}
              </li>
            ))}
          </ul>
        ) : null}
        <button onClick={() => deleteProduct(3)}>Usun 3 element</button>
        <button onClick={() => addProduct({
          id: 11231321313,
          title: "nowy produkt",
          price: 10000,
        })
        }
        >
          Dodaj nowy product
        </button>
      </div>
    );
}

export default App;



