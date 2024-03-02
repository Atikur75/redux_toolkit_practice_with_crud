import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

const Todos = () => {
  
  const dispatch = useDispatch();
  const countData = useSelector((state)=> state.counter);

  const {count} = countData;

  console.log('count data', countData)

  return (
    <div className="container mt-5 mb-5">
      <h1>Todos App</h1>
      <h2>Count: {count}</h2>
      <button onClick={()=>{dispatch(increment())}} className="btn btn-success me-2">Increment</button>
      <button onClick={()=>{dispatch(decrement())}} className="btn btn-info me-2">Decrement</button>
      <button onClick={()=>{dispatch(reset())}} className="btn btn-danger">Resent</button>
    </div>
  );
};

export default Todos;
