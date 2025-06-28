import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
let fruits = ['apple', 'banana', 'cherry', 'orange'];
let lastFruits = fruits[fruits.length - 5];
console.log(lastFruits);
