import { useState } from 'react'
import AddTask from './add-task'
import Task from './task'

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
          <li key={task.id}>
            <Task task={task} onDelete={onDeleteTask} onChange={onChangeTask} />
          </li>
        ))}
      </ul>
    </div>
  )
}
