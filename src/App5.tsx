import { useState } from 'react'
import Count from './components/Count.js'

function App5() {
  const [display, setDisplay] = useState(true)
  return (
    <>
      <h1>Learn useEffect (5)</h1>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <Count />}
    </>
  )
}

export default App5
