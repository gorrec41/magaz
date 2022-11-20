import{useRef,useState} from 'react'
import st from './style.module.scss';
import {usHook} from './../customhooks/hooks'
import ProductList from '../productlist';
function Btn(){
    const [style,setStyle]=useState(st.btnspan)
    const refUser = useRef(true)
    const addShow=()=>{
      refUser.current=false
      setStyle(`${st.btnspan} ${st.show}`)
      ProductList({
         prod:refUser.current
      })
      // usHook({
      //    bool:refUser.current
      // })
     }  
     const remuvShow=()=>{
      refUser.current=true
         setStyle(st.btnspan)
         ProductList({
            prod:refUser.current
         })
         // Testov({
         //    tes:refUser.current
         // })
     }
   
    return( 
        <button className={st.btnmenu} onClick={refUser.current?addShow:remuvShow} >
           <span className={style}></span>
           Каталог
        </button>
       )
   }
export default Btn