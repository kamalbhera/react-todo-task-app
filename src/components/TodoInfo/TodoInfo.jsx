import React from "react";
import "./TodoInfo.css";


export default class TodoInfo extends React.Component {
    render() {
        const { todos, date } = this.props;
        const completedCount = todos.filter((todo) => todo.date === date && !todo.isCompleted).length;
        return (
            <div className="todo-info">
                <p>{completedCount} item left</p>
                <p>{new Date(date).toLocaleDateString()}</p>
            </div>
        );
    }
}
