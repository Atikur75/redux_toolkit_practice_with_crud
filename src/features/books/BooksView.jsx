import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const dispatch = useDispatch();

  const booksData = useSelector((state) => state.books.books);

  console.log("booksData", booksData);

  let handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {booksData &&
            booksData.map((item, i) => {
              const { id, title, author } = item;
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{id, title, author}}>
                      <button>Edit</button>
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
