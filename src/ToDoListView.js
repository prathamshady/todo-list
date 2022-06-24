import React from "react";
import Todos from "./Todos";

const ToDoListView = ({ todos, setTodos, filteredTodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { filteredTodo.map(todo => (
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