import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Contact from './Contact'
import Resume from './Resume'
import Skills from './Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner/>
      <Resume/>
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
