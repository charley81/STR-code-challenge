import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Tasklist, About, CompletedList } from './components/index'

function App() {
  const [tasks, setTasks] = useState(initialTask)

  function handleAddTask(text) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false
      }
    ])
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map(t => {
        if (t.id === task.id) {
          return task
        } else {
          return t
        }
      })
    )
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(t => t.id !== taskId))
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Tasklist
              onAddTasks={handleAddTask}
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          }
        />
        <Route path="/completed" element={<CompletedList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

let nextId = 3
const initialTask = [
  { id: 0, text: 'finish up coding assignment', done: true },
  { id: 1, text: 'get back to learning typescript', done: false },
  { id: 2, text: 'get ready for code review', done: false }
]
