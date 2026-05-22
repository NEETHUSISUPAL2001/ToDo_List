import { updateTodo, deleteTodo } from "../api";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const toggleDone = async () => {
    const updated = await updateTodo(todo.id, { ...todo, done: !todo.done });
    onUpdate(updated);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    onDelete(todo.id);
  };

  return (
    <div style={{
      display: "flex", alignItems: "center",
      gap: "10px", padding: "10px",
      borderBottom: "1px solid #ccc"
    }}>
      <input type="checkbox" checked={todo.done} onChange={toggleDone} />
      <span style={{ textDecoration: todo.done ? "line-through" : "none", flex: 1 }}>
        <strong>{todo.title}</strong> — {todo.description}
      </span>
      <button onClick={handleDelete} style={{ color: "red" }}>Delete</button>
    </div>
  );
}