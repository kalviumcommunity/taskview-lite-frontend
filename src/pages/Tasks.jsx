import { useEffect, useState } from "react";
import API from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  // TODO:
  // Fetch tasks using axios (GET)
  // Endpoint: /todos
  // Store response in state

  return (
    <div>
      <h2>Tasks List</h2>

      {/* TODO: Display first 5 tasks (title only) */}
      
    </div>
  );
}

export default Tasks;
