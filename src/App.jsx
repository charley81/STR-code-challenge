import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  Tasklist,
  About,
  CompletedList,
  Navbar,
  Sidebar
} from './components/index'
import { TasksProvider } from './context/TasksContext'

function App() {
  const [openNav, setOpenNav] = useState(false)

  function toggleSidebar() {
    setOpenNav(!openNav)
  }

  return (
    <>
      <TasksProvider>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} openNav={openNav} />
        <Routes>
          <Route path="/" element={<Tasklist />} />
          <Route path="/completed" element={<CompletedList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </TasksProvider>
    </>
  )
}

export default App
