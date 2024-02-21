import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todos }) {
  console.log("TODO", todos);
  const [isDone, setIsDone] = useState(todos.isDone);
  const [isDeleted, setIsDeleted] = useState(false);

  async function onClickDone() {
    const newTodo = await TodosMutations.markTodo(todos.id, !isDone);
    setIsDone(!isDone);
    console.log("NEW TODO", newTodo);
  }

  async function onClickDelete() {
    setIsDeleted(true);
    console.log("MY TDO", todos);
    await TodosMutations.deleteTodo(todos.id);
  }
  if (isDeleted) return null;
  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>TodoId: {todos.id}</p>
      <p>Aufgabe: {todos.task}</p>
      <p>completed: {todos.completed ? "True" : "False"}</p>
      <p>DueDate: {todos.Date}</p>
      <label>
        Geschafft: <input type="checkbox" checked={todos.completed}></input>
      </label>

      <StandardBtn text={"DELETE"} onClick={onClickDelete} />
    </div>
  );
}

export default ToDoItem;
