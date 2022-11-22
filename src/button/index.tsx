import st from './style.module.scss';
import { useState,useRef } from 'react';
interface typcl{   
    clikStyle:(d:boolean)=>void,
    btnShow:boolean
}
function Btn(clickS:typcl){
    const [style,setStyle]=useState(st.btnspan)
    const fg=useRef(true)
    fg.current=clickS.btnShow
    console.log(fg.current);
    
    return( 
        <button className={st.btnmenu}  onClick={(s)=>clickS.clikStyle(!s)}>
           <span className={fg.current?`${st.btnspan}`:`${st.btnspan} ${st.show}`}></span>
           Каталог
        </button>
       )
   }
export default Btn