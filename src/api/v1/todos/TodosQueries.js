import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data.todos;
  console.log(todos);
  console.log(typeof todos);
  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byuserid", { params: { todoId } });

  const todo = result.data.todos;

  return todo;
}

export default {
  fetchAllTodos,
  fetchTodoById,
};
