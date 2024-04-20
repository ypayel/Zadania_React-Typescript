import React, { useEffect, useState } from 'react';
import './App.scss';
import './typescript.ts'
import { Post, PostList } from "./20.04.2024/PostList/PostList.tsx";
import { PostForm } from "./20.04.2024/PostForm/PostForm.tsx";
import FormName from './components/FormName/index.tsx';
import Counter from './components/Counter/index.tsx';
import ColoredBox from './components/ColoredBox/index.tsx';




// zajecia 20.04.2024


const getItem = (text: string) => {};

getItem("text");


const App = () => {
  // updateWelcomeText('nowy tekst welcome')
  const [postList, setPostList] = useState<Post[]>([]);

  const fetchPost = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch post data");

      const { posts } = await res.json();
      setPostList(posts);
    } catch (e) {
      console.log(e);
    }
  };

  const addPost = (post: Post) => setPostList((prev) => [...prev, post]);

  useEffect(() => {
    fetchPost();
  }, []);

 
   return (
      <div className="App">
      <PostList list={postList} />
      <PostForm addPost={addPost} />
      <Counter />
      <ColoredBox />
      <FormName />
      </div>
    );
}

export default App;



