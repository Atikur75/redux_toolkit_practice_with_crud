import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostView = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.posts);

  const { isLoading, posts, error } = userData;

  console.log("userData", userData);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>View Post</h1>
      {isLoading && <h3>Loading.....</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((item, i) => {
          return (
            <section key={i}>
              <article >
                <h3>User ID: {item.id}</h3>
                <h4>Title: {item.title}</h4>
                <p>Details: {item.body}</p>
              </article>
            </section>
          );
        })}
    </div>
  );
};

export default PostView;
