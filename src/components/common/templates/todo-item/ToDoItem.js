import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todos }) {
  console.log("TodoItem", todos);
  const [completed, setIsDone] = useState(todos.completed);
  const [isDeleted, setIsDeleted] = useState(false);

  async function onClickDone() {
    // Use the callback form of setState to ensure working with the latest state
    setIsDone((prevCompleted) => !prevCompleted);

    // You might want to use the updated state value in your API call
    const newTodo = await TodosMutations.markTodo(todos.id, !completed);

    console.log("NEW TODO", newTodo);
  }

  async function onClickDelete() {
    try {
      // Make the DELETE request to the backend
      await TodosMutations.deleteTodo(todos.id);

      // Update the state to mark as deleted
      setIsDeleted(true);
    } catch (error) {
      console.error("Error deleting todo:", error);
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
      <p>DueDate: {todos.Date}</p>
      <label>
        Geschafft: <Checkbox isChecked={completed} onClick={onClickDone} />
      </label>

      <StandardBtn text={"DELETE"} onClick={onClickDelete} />
    </div>
  );
}

export default ToDoItem;
