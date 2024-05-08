import React, {ChangeEvent, useEffect, useState } from 'react';
import './App.scss';
import './typescript.ts'
import { Post} from "./20.04.2024/PostList/PostList.tsx";
import { FilteredList } from './hooks/useMemo/index.tsx';
import { ListElement } from './21.04.2024/ListElement/index.tsx';
import Profile from './Cwiecenia_react/Profile/index.tsx';
import Search from './Cwiecenia_react/Search/index.tsx';
import { ProfileForm } from './07.04.2024/ProfileForm/index.tsx';
import UserForm from './06.04.2024/UserForm/index.tsx';
import { LoginForm } from './07.04.2024/LoginForm/index.tsx';
import { Form } from './Cwiecenia_react/Form/index.tsx';
import { CounterForm } from './Cwiecenia_react/CounterForm/index.tsx';
import { Button } from './Cwiecenia_react/Button/index.tsx';
import { InputField } from './Cwiecenia_react/InputField/index.tsx';
import { TodoList } from './Cwiecenia_react/TodoList/index.tsx';
import { List } from './07.04.2024/List/index.tsx';
import { Toggle } from './Cwiecenia_react/Toggle/index.tsx';
import { ListCw } from './Cwiecenia_react/ListCw/index.tsx';
import { Timer } from './Cwiecenia_react/Timer/index.tsx';
import { DropDown } from './Cwiecenia_react/DropDown/index.tsx';
import { Modal } from './Cwiecenia_react/Modal/index.tsx';
import { LoginFormCw } from './Cwiecenia_react/LoginFormCw/index.tsx';




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
      {/* <PostList list={postList} />
      <PostForm addPost={addPost} />
      <Counter />
      <ColoredBox />
      <FormName />
      <EffectList />
      <Modal />
      <Timer /> */}
      {/* <FilteredList />
      <ListElement /> */}
      {/* <Profile />
      <Search />
      <ProfileForm /> */}
      {/* <Form /> */}
      {/* <CounterForm />
      <Button /> */}
      {/* <InputField /> */} 
      {/* <TodoList/> */}
      {/* <List products={[]}/> */}
      {/* <Toggle/> */}
      {/* <Timer time={60}/>
      <DropDown/> */}
      <Modal/>
      <LoginFormCw/>
      </div>
    );
}

export default App;



