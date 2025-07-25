import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="mt-8 w-full max-w-md text-green-400">
      <h2 className="text-xl mb-2 pixel-font">📋 Task List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-2 py-1 rounded bg-gray-800 text-green-200 border border-green-500 pixel-font"
          placeholder="Add a task..."
        />
        <Button onClick={handleAddTask} className="bg-green-700 text-white pixel-font">
          Add
        </Button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-800 px-3 py-2 rounded border border-green-600"
          >
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span className={`pixel-font ${task.done ? "line-through opacity-50" : ""}`}>
                {task.text}
              </span>
            </label>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-300 pixel-font"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
