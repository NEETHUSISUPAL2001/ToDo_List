const BASE_URL = "http://127.0.0.1:8000";

export const getTodos = async () => {
  const res = await fetch(`${BASE_URL}/todos`);
  return res.json();
};

export const createTodo = async (todo) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
};

export const updateTodo = async (id, todo) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${BASE_URL}/todos/${id}`, { method: "DELETE" });
};