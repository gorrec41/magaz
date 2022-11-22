import st from './style.module.scss';

interface typcl{
    
    clikStyle:(d:boolean)=>void
}
function Btn(clickS:typcl){
   
    
   
    return( 
        <button className={st.btnmenu}  onClick={(s)=>clickS.clikStyle(!s)}>
           <span className={st.btnspan}></span>
           Каталог
        </button>
       )
   }
export default Btn