// https://reffect.co.jp/react/react-useeffect-understanding
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('useEffectが実行されました')
  })

  return (
    <div className="App">
      <h1>Learn useEffect</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
