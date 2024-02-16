import Checkbox from "../../buttons/checkbox";
import styles from "./ToDoItem.module.css";

function ToDoItem({ todo }) {
  return (
    <div className={styles.mainContainer}>
      <h1>ToDo-Item</h1>
      <div className={styles.horizontalLine}></div>
      <p>Aufgabe: {todo.task}</p>
      <p>DueDate: {new Date(Date.now()).toDateString()}</p>
      <label>
        Geschafft: <input type="checkbox" defaultChecked="false"></input>
      </label>
    </div>
  );
}

export default ToDoItem;
