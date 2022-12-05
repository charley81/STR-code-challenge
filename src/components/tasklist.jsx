import { useContext } from 'react'
import { AddTask, Task } from './index'
import { TasksContext } from '../context/TasksContext'

export default function Tasklist() {
  const tasks = useContext(TasksContext)

  return (
    <div>
      <AddTask />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </div>
  )
}
