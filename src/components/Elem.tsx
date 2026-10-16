import React from 'react'
import type { SzamokTipus } from '../adat'

interface ElemProps{
    elem: SzamokTipus,
    index: number
    kivalaszt: ()=> void
}

function Elem({elem, index}:ElemProps) {
  return (
    <div className='elem'>
        console.log(index);
        <button onClick={()=>kivalaszt}>{elem.hely}</button>
    </div>
  )
}

export default Elem