import { useState, useContext } from 'react'
import { TasksDispatchContext } from '../context/TasksContext'

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIdEditing] = useState(false)
  const dispatch = useContext(TasksDispatchContext)
  let taskContent

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            })
          }}
        />
        <button onClick={() => setIdEditing(false)}>save</button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIdEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          })
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: 'deleted',
            id: task.id
          })
        }}
      >
        delete
      </button>
    </label>
  )
}
