import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.value.push({
                id: Date.now(),
                title: action.payload.title,
                isCompleted: false,
                date: action.payload.date,
            })
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter(todo => todo.id !== action.payload.id);
        },
        toggleStatus: (state, action) => {
            const todo = state.value.find(todo => todo.id === action.payload.id);
            todo.isCompleted = !todo.isCompleted;
        },
    }
})

export const { addTodo, deleteTodo, toggleStatus } = todoSlice.actions;

export default todoSlice.reducer;