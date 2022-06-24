import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import ToDoForm from './ToDoForm';
import ToDoListView from './ToDoListView';

const ToDoList = () => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodo, setFilter] = useState([]);

    const filterHandler = () => {
        switch(status) {
            case "done":
                setFilter(todos.filter(todo => todo.completed === true));
                break;
            case "remaining":
                setFilter(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilter(todos);
                break;
        }
    }

    useEffect(() => {
        filterHandler();
    }, [todos, status]);

    return (
        <>
            <Helmet>
                <link rel="stylesheet" href="todolist.css" />
            </Helmet>
            <h1>ToDo List</h1>
            <ToDoForm
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus} 
            />
            <ToDoListView todos={todos} setTodos={setTodos} filteredTodo={filteredTodo} />
        </>

    );
};

//{todos.map((todo) => <Todos />)}
export default ToDoList;