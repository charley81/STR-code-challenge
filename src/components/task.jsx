import { useState, useContext } from 'react'
import { TasksDispatchContext } from '../context/TasksContext'
import styled from 'styled-components'

export default function Task({ task, onChange, onDelete }) {
  const [isEditing, setIdEditing] = useState(false)
  const dispatch = useContext(TasksDispatchContext)
  let taskContent

  if (isEditing) {
    taskContent = (
      <>
        <input
          type="text"
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
        <button onClick={() => setIdEditing(false)} className="btn save">
          save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIdEditing(true)} className="btn edit">
          Edit
        </button>
      </>
    )
  }
  return (
    <Wrapper>
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
        className="btn delete"
      >
        delete
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  border-bottom: 1px solid var(--colorGreyLight);
  display: flex;
  padding: 2rem 0;

  input[type='text'] {
    display: block;
    width: 100%;
  }

  input[type='checkbox'] {
    margin-right: 1rem;
    width: 24px;
    height: 24px;
    border-radius: var(--border-radius);
    background: var(--colorLight);
    border: 1px solid var(--colorGreyLight);
  }

  input[type='checkbox']:checked {
    background: var(--colorPrimary);
  }

  .btn {
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    margin-left: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .edit .save {
    background: inherit;
    border: 1px solid var(--colorGreyLight);
    color: var(--colorGreyDark);
  }

  .delete {
    background: var(--colorDanger);
    color: var(--colorLight);
  }
`
