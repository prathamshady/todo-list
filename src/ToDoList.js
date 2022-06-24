import React, { useState } from 'react';
import Helmet from 'react-helmet';
import ToDoForm from './ToDoForm';
import ToDoListView from './ToDoListView';

const ToDoList = () => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="todolist.css" />
            </Helmet>
            <h1>ToDo List</h1>
            <ToDoForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
            <ToDoListView todos={todos} setTodos={setTodos}  />
        </>

    );
};

//{todos.map((todo) => <Todos />)}
export default ToDoList;