import { useEffect, useState } from "react";
import axios from "axios";
import Newpost from "./NewPost";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((resp) => setPosts(resp.data.posts));
  }, []);

  const addPost = async (title, body) => {
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      });
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error("Ошибка при отправке поста на сервер:", error);
    }
  };

  return (
    <>
      <Newpost addPost={addPost} />
      <section>
        <h1>Posts</h1>
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
