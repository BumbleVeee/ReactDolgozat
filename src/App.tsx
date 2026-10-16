import { useState } from 'react'
import Jatekter from "./components/Jatekter";
import './App.css'
import { SZAMOKLISTA, type SzamokTipus } from './adat';

function App() {
  const [lista]=useState<SzamokTipus[]>(SZAMOKLISTA)
  function kivalaszt(index:number) {
    const szamCsusztatas:SzamokTipus[]=[...lista]
    console.log(index)
  }

  return (
    <>
      <header>
        <h1>Dolgozat</h1>
      </header>
      <article>
        <Jatekter lista={lista} kivalaszt={kivalaszt}/>
      </article>
      <footer>
        <p>Készítette: Gubek Veronika</p>
      </footer>
    </>
  )
}

export default App
