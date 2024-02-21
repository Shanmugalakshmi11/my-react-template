import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data.todos;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byuserid", { params: { todoId } });

  const todo = result.data.todo;

  return todo;
}

// PUT /mark
async function markTodo(todoId) {
  try {
    const result = await api.put("/todos/mark", { todoId });
    const markedTodo = result.data.todo;
    return markedTodo;
  } catch (error) {
    console.error("Error marking todo:", error.message);
    throw error;
  }
}

// PUT /update
async function updateTodo(todoId, updatedTodoData) {
  try {
    const result = await api.put("/todos/update", { todoId, updatedTodoData });
    const updatedTodo = result.data.todo;
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error.message);
    throw error;
  }
}

// DELETE /delete
async function deleteTodo(todoId) {
  try {
    const result = await api.delete("/todos/delete", { params: { todoId } });
    const deletedTodo = result.data.todo;
    return deletedTodo;
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    throw error;
  }
}

export default {
  fetchAllTodos,
  fetchTodoById,
  markTodo,
  updateTodo,
  deleteTodo,
};
