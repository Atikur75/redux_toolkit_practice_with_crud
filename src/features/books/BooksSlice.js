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

    }

});


export const {showBooks} = booksSlice.actions;

export default booksSlice.reducer;