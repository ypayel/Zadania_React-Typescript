import React from "react";
import { Post } from "../Post/Post";


 type Post = {
  id: number;
  title: string;
  body: string;
};

type Props = {
  list: Post[]; // Array<Post>
};

export const PostList = ({ list }: Props) => {
  return (
    <>
      <h2>Lista postów</h2>
      {list.length > 0 ? (
        <ul>
          {list.map(({ id, title, body }) => (
            <Post key={id} title={title} body={body} />
          ))}
        </ul>
      ) : (
        <span>lista jest pusta</span>
      )}
    </>
  );
};
export { Post };

