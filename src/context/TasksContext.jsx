import { createContext, useContext, useReducer } from 'react'
import tasksReducer from '../reducer/tasksReducer'
import { initialTasks } from '../data/initial-tasks'

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)
export const NavContext = createContext(false)
export const NavDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTask() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}
