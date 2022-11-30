// https://reffect.co.jp/react/react-useeffect-understanding

import { useState } from 'react'
import './App.css'
import App1 from './App1'
import App2 from './App2'
import App3 from './App3'

function apps(n: number) {
  switch (n) {
    case 1:
      return <App1 />
    case 2:
      return <App2 />
    case 3:
      return <App3 />
  }
  return <p>something wrong?</p>
}

function App(): JSX.Element {
  const [app, setApp] = useState(3)

  return (
    <div className="App">
      <div>
        <button onClick={() => { setApp(1) }}>app1</button>
        <button onClick={() => { setApp(2) }}>app2</button>
        <button onClick={() => { setApp(3) }}>app3</button>
        current={app}
      </div>
      {apps(app)}
    </div>
  )
}

export default App
