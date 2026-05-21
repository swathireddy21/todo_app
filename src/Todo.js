import React, { useState } from "react";
import "./style.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>My Todo List</h2>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="text"
            placeholder="Add a task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "16px" }}>
          {tasks.length === 0 && <p className="demo">No tasks yet. Add one above!</p>}
          {tasks.map((task, index) => (
            <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span
                onClick={() => toggleTask(index)}
                style={{ cursor: "pointer", textDecoration: task.done ? "line-through" : "none", opacity: task.done ? 0.5 : 1 }}
              >
                {task.done ? "✅" : "⬜"} {task.text}
              </span>
              <button onClick={() => deleteTask(index)} style={{ background: "red", padding: "4px 10px" }}>✕</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
