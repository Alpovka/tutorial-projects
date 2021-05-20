import { useState } from "react"
import Header from "./Components/header"
import Tasks from  "./Components/tasks"
import AddTask from  "./Components/addTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting with friends",
        day: "Feb 5th at 6:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Have a dinner with girlfriend",
        day: "Feb 5th at 9:30pm",
        reminder: true,
    }
])

//Add Task 
const addTask = (task) => {
  const id = tasks[tasks.length-1].id + 1
  setTasks([...tasks, {id, ...task}])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : "No tasks to show"}
    </div>
  );
}

export default App;
