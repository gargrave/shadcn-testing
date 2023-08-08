import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shad from './Shad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Shad />
      </div>
    </>
  )
}

export default App
