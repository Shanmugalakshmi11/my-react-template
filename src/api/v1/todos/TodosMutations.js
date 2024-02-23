import api from "../../config/api";

async function createTodo(id, task, completed, date) {
  const result = api.post("/todos/create", {
    newId: id,
    newTask: task,
    newIsDone: completed,
    newDueDate: date,
  });
  const todos = result.data;

  return todos;
}
async function markTodo(todoId, completed) {
  const result = await api.put("/todos/mark", {
    id: todoId,
    completed: completed,
  });

  const todo = result.data.updatedTodo;

  return todo;
}

async function deleteTodo(todosId) {
  const result = await api.delete("/todos/delete", {
    data: { todosId },
  });

  const deletedTodoId = result.data.deletedTodoId;

  return deletedTodoId;
}

async function updateTodo(updateId, updateTask, updateCompleted, updateDate) {
  const result = await api.put("todos/update", {
    todosId: updateId,
    task: updateTask,
    completed: updateCompleted,
    DueDate: updateDate,
  });
  const todos = result.data.updatedTodo;
  return todos;
}

export default { createTodo, markTodo, deleteTodo, updateTodo };
