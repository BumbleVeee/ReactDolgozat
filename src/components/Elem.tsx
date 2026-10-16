import './Elem.css'
import type { SzamokTipus } from '../adat'

interface ElemProps{
    elem: SzamokTipus,
    index: number
    kivalaszt: (index:number)=> void
}

function Elem({elem, index, kivalaszt}:ElemProps) {
  return (
    <div className='elem'>
        
        <button onClick={()=>kivalaszt(index)}>{elem.hely}</button>
    </div>
  )
}

export default Elem