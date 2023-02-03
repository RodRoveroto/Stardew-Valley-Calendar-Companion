import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Callendar } from './pages/Callendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Callendar />
  )
}

export default App
