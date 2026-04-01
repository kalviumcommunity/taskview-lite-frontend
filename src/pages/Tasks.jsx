import { useEffect, useState } from "react";
import API from "../api";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  // TODO:
  // Use useEffect to fetch tasks
  // Use API.get("/todos")
  // Store response in state
  // Handle errors using try/catch

  return (
    <div>
      <h2>Tasks List</h2>

      {/* TODO: Display first 5 tasks (title only) */}
      {/* Hint: use tasks.slice(0, 5).map(...) */}
      {/* Hint: use task.id as key */}

    </div>
  );
}

export default Tasks;
