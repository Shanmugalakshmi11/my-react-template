import { TodosMutations, TodosQueries } from "../../api/v1/todos";
import StandardBtn from "../../components/common/buttons/standard-btn";
import Checkbox from "../../components/common/buttons/checkbox";
import ToDoItem from "../../components/common/templates/todo-item";
import styles from "./ToDoPage.module.css";
import { useState, useEffect } from "react";

function ToDoPage() {
  //Da wir die Werte erst aus der API mit einem HTTP GET holen müssen,
  //nutzen wir die States von React aus, die bei Veränderung ein
  //neurendern der Komponente triggern
  //Antwort ist da? => lad die Komponente einmal mit Daten gefüllt neu
  const [todos, setTodos] = useState([]);
  const [newId, setNewId] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [newcompleted, setNewCompleted] = useState(false);

  async function fetchTodos() {
    try {
      console.log("Hello world 1 von fetchTodos");

      const jsonResponse = await TodosQueries.fetchAllTodos();
      console.log("MY JSON RESPONSE", jsonResponse);

      setTodos(jsonResponse);
    } catch (e) {
      console.log("Hello world", e);
    }
  }

  async function onClickAdd() {
    console.log("Ich poste jetzt!");
    await TodosMutations.createTodo(newId, newTask, newcompleted, newDueDate);
  }

  // Alternative Funktion für den API Aufruf
  // Achtung: Wird nicht verwendet
  function alternativeFetchTodos() {
    fetch("http://localhost:3000/v1/todos/all")
      .then((response) => {
        console.log("Hello world 2 von alternativeFetchTodos");
        console.log("Das ist meine rohe Antwort", response);
        return response.json();
      })
      .then((todosJson) => {
        console.log("Hello world 3 von alternativeFetchTodos");
        // setTodos(todosJson);
      });

    console.log("Hello world 1 von alternativeFetchTodos");
  }

  // useEffect
  useEffect(() => {
    fetchTodos();
  }, []);

  //###Ergänzung zum Code vom Unterricht:###
  //Wenn todos noch leer ist, gib leeren Container aus
  if (todos.length === 0) {
    return <div className={styles.mainContainer}></div>;
  }

  //wenn wir die Daten in todos drin haben (durch den fetch)
  //können wir auch todos, sowie dessen Inhalte in Probs weitergeben
  //hier: "todo={todos[1]}" gibt das 2. todo weiter.
  console.log(todos);
  return (
    <div className={styles.mainContainer}>
      <div>
        <input
          type="text"
          value={newId}
          placeholder="id..."
          onChange={(event) => setNewId(event.target.value)}
        ></input>
        <input
          type="text"
          value={newTask}
          placeholder="aufgabe..."
          onChange={(event) => setNewTask(event.target.value)}
        ></input>
        <input
          type="text"
          value={newDueDate}
          placeholder="datum..."
          onChange={(event) => setNewDueDate(event.target.value)}
        ></input>
        <Checkbox
          isChecked={newcompleted}
          onClick={() => setNewCompleted(!newcompleted)}
        ></Checkbox>
        <StandardBtn text={"ADD"} onClick={onClickAdd} />
      </div>

      <div>
        {todos.map((item) => (
          <ToDoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}

export default ToDoPage;
