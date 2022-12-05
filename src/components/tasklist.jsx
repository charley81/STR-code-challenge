import { useContext } from 'react'
import { AddTask, Task } from './index'
import { TasksContext } from '../context/TasksContext'
import styled from 'styled-components'

export default function Tasklist() {
  const tasks = useContext(TasksContext)

  return (
    <Wrapper>
      <AddTask />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: var(--maxWidthMed);
  margin: auto;
`
