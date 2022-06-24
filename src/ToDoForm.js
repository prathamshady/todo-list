import React from "react";

const ToDoForm = ( { setInputText, todos, setTodos, inputText } ) => {

    const inputTextHandler = (e) => {
        //console.log(e.target.value);
        setInputText(e.target.value);
        //console.log(inputText);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        //todos.push({text: inputText, completed: false, id: Math.floor(Math.random(10) * 1000)});
        //console.log(todos);
        //inputText = "";
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.floor(Math.random() * 1000)}
        ]);
        console.log(todos);
        setInputText("");
    };
    return (
        <form>
            <div>
                <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
                <button type="submit" className="todo-button" onClick={submitTodoHandler}>
                    Add
                </button>
                <span className="select">
                    <select name="ToDos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="done">Done</option>
                        <option value="remaining">Remaining</option>
                    </select>
                </span>
            </div>
        </form>
    );
};

export default ToDoForm;