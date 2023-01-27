import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleStatus } from "./features/todo/todoSlice";
import "./App.css";
import InputField from "./components/InputField/InputField";
import ListTodos from "./components/ListTodos/ListTodos";
import TodoInfo from "./components/TodoInfo/TodoInfo";
import Calendar from "./components/Calendar/Calendar";



class App extends React.Component {
    render() {
        const { todos, addTodo, deleteTodo, toggleStatus, date } = this.props;
        return (
            <div className="container">
                <div className="section-todos">
                    <h1>todos</h1>
                    <Calendar />
                    <ListTodos
                        date={date}
                        todos={todos}
                        toggleStatus={toggleStatus}
                        deleteTodo={deleteTodo}
                    />
                    <InputField addTodo={addTodo} todos={todos} date={date} />
                    <TodoInfo todos={todos} date={date} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos.value,
    date: state.date.value,
});

const mapDispatchToProps = { addTodo, deleteTodo, toggleStatus };

export default connect(mapStateToProps, mapDispatchToProps)(App)