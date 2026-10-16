import React from 'react'
import type { SzamokTipus } from '../adat'

interface ElemProps{
    elem: SzamokTipus,
    index: number
}

function Elem({elem, index}:ElemProps) {
  return (
    <div className='elem'>
        <button onClick={()=>kivalaszt(elem, index)}>0</button>
    </div>
  )
}

export default Elem