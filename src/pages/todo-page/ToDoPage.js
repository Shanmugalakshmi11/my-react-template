// ToDoPage.js
import React, { useState, useEffect } from "react";
import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";

function ToDoPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/v1/todos/all")
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos);
        setTodos(todos.todos);
      });
  }, []);

  if (todos.length === 0) {
    return <div className={styles.mainContainer}></div>;
  }
  console.log(todos.todos);
  return (
    <div className={styles.mainContainer}>
      {todos.map((todo) => (
        <ToDoItem todo={todo} />
      ))}
    </div>
  );
}

export default ToDoPage;
