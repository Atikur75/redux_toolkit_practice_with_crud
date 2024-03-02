import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateBooks } from './BooksSlice';

const EditBook = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [id, setID] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  let handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateBooks({id, title, author}));
    navigate('/show-books', {replace: true});
  }

  return (
    <div>
      <h2>EditBook</h2>
      <form onSubmit={handleSubmit}>
      <div className='form-field'>
          <label htmlFor='title'>Title: </label>
          <input onChange={(e)=>setTitle(e.target.value)} type='text' id='title' name='title' value={title} />
        </div>
        <div className='form-field'>
          <label htmlFor='author'>Author: </label>
          <input onChange={(e)=>setAuthor(e.target.value)} type='text' id='author' name='author' value={author} />
        </div>
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default EditBook