import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";
import bookReducer from "../features/books/BooksSlice"

const store = configureStore({

    reducer: {
        counter : counterReducer,
        posts : postReducer,
        books : bookReducer
    }

});

export default store;