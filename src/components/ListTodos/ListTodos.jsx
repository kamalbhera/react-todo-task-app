import React from "react";
import { List } from "@mui/material";
import Todo from "../ItemTodo/ItemTodo";



export default class ListTodos extends React.Component {
    render() {
        const { todos, date, toggleStatus, deleteTodo } = this.props;
        const todoList = todos.filter((todo) => todo.date === date);
        return (
            <div className="todo-list">
                {todoList.length
                    ? <p className="title-secondary sub-title">Your list for {new Date(date).toDateString()}</p>
                    : <p className="title-secondary">No todos for this date...</p>
                }
                <List>
                    {todoList.map((todo) => (
                        <Todo key={todo.id} {...todo} toggleStatus={toggleStatus} deleteTodo={deleteTodo} />
                    ))}
                </List>
            </div>
        );
    }
}
