//import { useState } from 'react'
import Jatekter from "./components/Jatekter";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Dolgozat</h1>
      </header>
      <article>
        <Jatekter/>
      </article>
      <footer>
        <p>Készítette: Gubek Veronika</p>
      </footer>
    </>
  )
}

export default App
