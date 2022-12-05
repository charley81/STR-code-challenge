import { createContext } from 'react'

// provides the current task
export const TasksContext = createContext(null)
// provides the function that lets components dispatch actions
export const TasksDispatchContext = createContext(null)
