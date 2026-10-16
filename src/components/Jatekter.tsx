import './Jatekter.css'
import type { SzamokTipus } from '../adat'
import Elem from './Elem'

interface JatekterProps{
    lista: SzamokTipus[],
    kivalaszt: (index:number)=> void
}

function Jatekter({lista, kivalaszt}: JatekterProps){
  return (
    <div className='jatekter'>
        {
            lista.map((elem, index)=>{
                return(<Elem elem={elem} kivalaszt={kivalaszt}
                index={index} key={index}/>)
                }
            )
        }
    </div>
  )
}

export default Jatekter