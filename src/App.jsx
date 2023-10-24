import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Curso from './Curso'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Curso nombre="ReactJs" profesor="Daniel Dos Santos" duracion="4"/>
  </div>
  )
}

export default App
