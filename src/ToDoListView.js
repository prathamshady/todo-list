import React from "react";
import Todos from "./Todos";

const ToDoListView = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { todos.map(todo => (
                    <Todos
                        key={todo.id}
                        text={todo.text}
                        todos={todos}
                        todo={todo}
                        setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoListView;