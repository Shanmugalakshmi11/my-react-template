import { useState } from "react";
import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";
import { TodosMutations } from "../../../../api/v1/todos";
import StandardBtn from "../../buttons/standard-btn/StandardBtn";

function ToDoItem({ todo }) {
  const [completed, setIsDone] = useState(todo.completed);
  const [task, setTask] = useState(todo.task);
  const [date, setDueDate] = useState(todo.DueDate);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  async function onClickDone() {
    await TodosMutations.markTodo(todo.id, !completed);
    setIsDone(!completed);
  }

  async function onClickDelete() {
    setIsDeleted(true);
    await TodosMutations.deleteTodo(todo.id);
  }

  async function onClickSendUpdate() {
    await TodosMutations.updateTodo(todo.id, task, completed, date);
    setIsEditMode(false);
  }

  async function onClickEdit() {
    setIsEditMode(true);
  }

  if (isDeleted) return null;

  if (isEditMode) {
    return (
      <div className={styles.mainContainer}>
        <h1> EDIT </h1>
        <div className={styles.horizontalLine}></div>

        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <input
          type="text"
          value={date}
          onChange={(event) => setDueDate(event.target.value)}
        ></input>
        <Checkbox
          isChecked={completed}
          onClick={() => setIsDone(!completed)}
        ></Checkbox>
        <StandardBtn text={"SEND"} onClick={onClickSendUpdate} />
      </div>
    );
  } else {
    return (
      <div className={styles.mainContainer}>
        <h1>ToDo-Item</h1>
        <div className={styles.horizontalLine}></div>
        <p>Id: {todo.id}</p>
        <p>Aufgabe: {task}</p>
        <p>DueDate: {date}</p>
        <label>
          Geschafft: <Checkbox isChecked={completed} onClick={onClickDone} />
        </label>
        <StandardBtn text={"DELETE"} onClick={onClickDelete} /> <br></br>
        <StandardBtn text={"EDIT"} onClick={onClickEdit} />
      </div>
    );
  }
}

export default ToDoItem;
