import { useState } from 'react'
import Jatekter from "./components/Jatekter";
import './App.css'
import { SZAMOKLISTA, type SzamokTipus } from './adat';

function App() {
  const [lista, setLista]=useState<SzamokTipus[]>(SZAMOKLISTA)

  function kivalaszt(index:number) {
    const szamCsusztatas:SzamokTipus[]=[...lista]
    /* megkeresni azt az elemet aminek az értéke 0 (array find) indexe*/
    /*  */
    let nullindex:number=szamCsusztatas.findIndex((e)=>{
      return (e.hely==0)
    })
    szamCsusztatas[nullindex].hely = szamCsusztatas[index].hely 
    szamCsusztatas[index].hely = 0
    setLista(szamCsusztatas)
    console.log(index, nullindex)
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
