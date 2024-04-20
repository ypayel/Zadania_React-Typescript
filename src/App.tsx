import React, { useEffect, useState } from 'react';
import './App.scss';
import './typescript.ts'
import { Post, PostList } from "./20.04.2024/PostList/PostList.tsx";
import { PostForm } from "./20.04.2024/PostForm/PostForm.tsx";
import FormName from './hooks/FormName/index.tsx';
import Counter from './hooks/Counter/index.tsx';
import ColoredBox from './hooks/ColoredBox/index.tsx';
import { Timer } from './hooks/Timer/index.tsx';
import { EffectList } from './hooks/EffectList/index.tsx';
import { Modal } from './hooks/Modal/index.tsx';




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
      <EffectList />
      <Modal />
      <Timer />

      </div>
    );
}

export default App;



