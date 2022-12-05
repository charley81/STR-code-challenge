import { useState } from 'react'

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIdEditing] = useState(false)
  let taskContent

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
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
          onChange({
            ...task,
            done: e.target.checked
          })
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>delete</button>
    </label>
  )
}
