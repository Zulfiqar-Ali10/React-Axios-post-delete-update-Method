import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axios from './Axios'
import AxiosPost from './AxiosPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Axios /> */}
    <AxiosPost />
    </>
  )
}

export default App
