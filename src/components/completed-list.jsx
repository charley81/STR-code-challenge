import { useContext } from 'react'
import { TasksContext } from '../context/TasksContext'
import styled from 'styled-components'

export default function CompletedList() {
  const task = useContext(TasksContext)
  console.log(task)
  return (
    <Wrapper>
      <h1>My Completed Tasks</h1>
      {task.map(t => {
        if (t.done === true) {
          return <li>{t.text}</li>
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: var(--maxWidthMed);
  margin: 2rem auto 0;

  h1 {
    margin-bottom: 1rem;
  }

  li {
    margin: 1rem 0;
  }
`
