import React from 'react'
import type { SzamokTipus } from '../adat'
import Elem from './Elem'

interface JatekterProps{
    lista: SzamokTipus[],
    kivalaszt: kivalaszt()
}

function Jatekter({lista, kivalaszt}: JatekterProps){
  return (
    <div>
        {
            lista.map((elem, index)=>{
                return(<Elem elem={elem} kivalaszt={kivalaszt()}
                index={} key={index}/>)
                }
            )
        }
    </div>
  )
}

export default Jatekter