import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'

export default function CompletedList() {
  const task = useContext(TasksContext)
  console.log(task)
  return (
    <div>
      <h3>Completed Tasks</h3>
      {task.map(t => {
        if (t.done === true) {
          return <li>{t.text}</li>
        }
      })}
    </div>
  )
}
