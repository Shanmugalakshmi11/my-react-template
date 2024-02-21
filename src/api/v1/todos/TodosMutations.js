import api from "../../config/api";

async function createTodo(newTodo) {
  const result = api.post("/todos/create", {
    newTodo: newTodo,
  });

  const todos = result.data.todos;

  return todos;
}
// PUT /mark
async function markTodo(todoId) {
  try {
    const result = await api.put("/todos/mark", { todoId });
    const markedTodo = result.data.todos;
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
    const updatedTodo = result.data.todos;
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
    const deletedTodo = result.data.todos;
    return deletedTodo;
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    throw error;
  }
}
export default { createTodo, markTodo, updateTodo, deleteTodo };
