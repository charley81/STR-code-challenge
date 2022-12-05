import { useState } from 'react'
import AddTask from './add-task'

export default function Tasklist({
  tasks,
  onAddTask,
  onDeleteTask,
  onChangeTask
}) {
  return (
    <div>
      <AddTask onAddTask={onAddTask} />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  )
}
