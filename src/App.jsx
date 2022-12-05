import { Routes, Route } from 'react-router-dom'
import { Tasklist, About, CompletedList } from './components/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasklist />} />
        <Route path="/completed" element={<CompletedList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
