import { useState, useEffect, useRef } from 'react'

function App1() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current) return () => { };
    console.log('useEffect1が実行されました')
    return () => effectRan.current = true
  }, [])

  useEffect(() => {
    console.log('useEffect2が実行されました')
    setCount2(count2 + 1)
  }, [count])

  return (
    <>
      <h1>Learn useEffect (1)</h1>
      <h2>Count: {count}/ Count2: {count2}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
    </>
  )
}

export default App1
