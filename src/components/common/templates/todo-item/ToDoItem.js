import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todos }) {
  const [completed, setIsDone] = useState(todos.completed);
  const [task, setTask] = useState(todos.task);
  const [date, setDate] = useState(todos.DueDate);
  const [isDeleted, setIsDeleted] = useState(false);

  async function onClickDone() {
    try {
      const newTodo = await TodosMutations.markTodo(todos.id, !completed);
      setIsDone(!completed);
      console.log("NEW TODO", newTodo);
    } catch (error) {
      console.error("Error marking todo:", error);
    }
  }

  async function onClickDelete() {
    try {
      setIsDeleted(true);
      console.log("My TODO", todos);
      await TodosMutations.deleteTodo(todos.id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  async function onClickSendUpdate() {
    try {
      const response = await TodosMutations.updateTodo(
        todos.id,
        task,
        completed,
        date
      );
      console.log(response);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  }

  if (isDeleted) return null;

  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>TodoId: {todos.id}</p>
      <p>Aufgabe: {todos.task}</p>
      <p>completed: {todos.completed ? "True" : "False"}</p>
      <p>DueDate: {todos.DueDate}</p>

      <label>
        Geschafft: <Checkbox isChecked={completed} onClick={onClickDone} />
      </label>

      <div className={styles.updateContainer}>
        <h1> UPDATE </h1>
        <div className={styles.horizontalLine}></div>
        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
        <br></br>
        <label>
          {" "}
          Geschafft: <Checkbox isChecked={completed} onClick={onClickDone} />
          <StandardBtn text={"SEND"} onClick={onClickSendUpdate} />
        </label>
      </div>
      <br></br>
      <StandardBtn text={"DELETE"} onClick={onClickDelete} />
    </div>
  );
}

export default ToDoItem;
