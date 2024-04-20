import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "../PostList/PostList";

type PostFormType = Omit<Post, "id">;

type Props = {
  addPost: (post: Post) => void;
};

export const PostForm = ({ addPost }: Props) => {
  const [formState, setFormState] = useState<PostFormType>({
    title: "",
    body: "",
  });
  const { title, body } = formState;

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const postData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Cannot post data, something goes wrong!");

      const post = await res.json();
      addPost(post);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (title.length > 3 && body.length > 9) {
      postData();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Tytul:
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleInputValue}
          minLength={4}
          required
        />
      </label>
      <label htmlFor="body">
        Treść:
        <input
          type="text"
          id="body"
          name="body"
          value={body}
          onChange={handleInputValue}
          minLength={10}
          required
        />
      </label>
      <button type="submit">Utwórz</button>
    </form>
  );
};
