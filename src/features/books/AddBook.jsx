import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [author, setauthor] = useState("");

  const numberOfBooksLength = useSelector((state)=> state.books.books.length);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const book = {id: numberOfBooksLength + 1, title, author};
    dispatch(addBooks(book));
    navigate('/show-books',{replace:true});
  }

  return (
    <div>
      <h2>AddBook</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input onChange={(e)=>setTitle(e.target.value)} type='text' id='title' name='title' value={title} />
        </div>
        <div className='form-field'>
          <label htmlFor='author'>Author: </label>
          <input onChange={(e)=>setauthor(e.target.value)} type='text' id='author' name='author' value={author} />
        </div>
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBook