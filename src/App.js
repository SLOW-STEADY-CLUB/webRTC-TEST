import { useEffect } from 'react'
import { connectWithWebSocket } from './utils/wssConnection/wssConnection'

function App() {
  useEffect(() => {
    connectWithWebSocket()
  }, [])
  return <div className="App">APP</div>
}

export default App
