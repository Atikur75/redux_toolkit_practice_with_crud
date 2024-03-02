import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {
            id: 1, title: "Bangldeshi nature", author: "Fahim Khan"
        },
        {
            id: 2, title: "Afganistani nature", author: "Arif Khan"
        }
    ]
};


export const booksSlice = createSlice({

    name: 'books',
    initialState: initialBooks,

    reducers: {

        showBooks: (state) => state,

        addBooks: (state, action) =>{
            state.books.push(action.payload)
        },

        deleteBooks: (state, action) =>{
            const id = action.payload;
            state.books = state.books.filter((book) => book.id !== id);
        },

        updateBooks: (state, action) =>{
            const {id, title, author} = action.payload;
            const isBookExist = state.books.filter((book)=> book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        }

    }

});


export const {showBooks, addBooks, deleteBooks, updateBooks} = booksSlice.actions;

export default booksSlice.reducer;