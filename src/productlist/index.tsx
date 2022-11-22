import st from './style.module.scss';
import { useState,useRef } from 'react';

interface typeList{
    styleProd:boolean
}

function ProductList(flaglist:typeList){
//    const [listsTyle,setListStyle]=useState(st.productlist)
    const showList=useRef(true)
    showList.current=flaglist.styleProd
    console.log(flaglist.styleProd);
    
return(
   <div className={showList.current?`${st.productlist}`:`${st.productlist} ${st.show}`}>
    
   </div>
       
)    
    
   
}
export default ProductList