// nadpisanie nazwy importowanej wartosci za pomocą słówka kluczowego "as"
import React from "react";
import { Post as PostType } from "../PostList/PostList";

type Props = Omit<PostType, "id">;

export const Post = ({ title, body }: Props) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
};
