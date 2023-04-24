import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsSlice } from "../store";

export default function Blog() {
  const posts = useSelector((state) => {
    return state.posts;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        dispatch(postsSlice.actions.savePosts(posts));
      });
  }, []);

  return (
    <div className="container">
      Blog
      <div className="row">
        <div className="col">
          <h1>Table</h1>
          <Table />
        </div>
        <div className="col">
          <h1>List</h1>
          <NumberOfPosts />
        </div>
      </div>
    </div>
  );
}

function Table() {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <table className="table">
      <tbody>
        {posts.map((post) => (
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function NumberOfPosts() {
  const length = useSelector((state) => {
    return state.posts.length;
  });

  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(postsSlice.actions.deletePosts(0));
  }
  function updateTitle() {
    dispatch(
      postsSlice.actions.updateTitle({
        title: Math.random(),
        index: 0,
      })
    );
  }

  return (
    <div>
      <h1>{length}</h1>
      <hr />

      <button onClick={handleDelete}>Delete First</button>
      <button onClick={updateTitle}>Update Title</button>
    </div>
  );
}
