import { useState, useContext } from 'react'
import { TasksDispatchContext } from '../context/TasksContext'
import styled from 'styled-components'

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext)

  return (
    <Wrapper>
      <button
        onClick={() => {
          setText('')
          dispatch({
            type: 'added',
            id: nextId++,
            text: text
          })
        }}
      >
        add
      </button>
      <input
        placeholder="add task"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </Wrapper>
  )
}

let nextId = 3

const Wrapper = styled.header`
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;

  input {
    width: 100%;
    background: var(--colorLight);
    outline: none;
    border: 1px solid var(--colorGreyLight);
    padding: 1rem;
    border-radius: 0 4px 4px 0;
    font-size: 1rem;
    font-family: var(--fontFamily);
  }

  button {
    border-radius: 4px 0 0 4px;
    width: 100px;
    border: 1px solid transparent;
    outline: none;
    background: var(--colorPrimary);
    color: var(--colorLight);
    text-transform: capitalize;
    font-size: 1rem;
    font-family: var(--fontFamily);
  }
`
