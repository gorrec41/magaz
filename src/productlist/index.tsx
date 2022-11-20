import st from './style.module.scss';
import{useState} from 'react'
interface prodtype{
    prod?:boolean
}

function ProductList(prodlist:prodtype){
    // const [style,setStyle]=useState(st.productlist)
    console.log(prodlist.prod);
    // const prodListShow=()=>{
    //     setStyle(`${st.productlist} ${st.show}`)
    // }
    // const prodListRemuvShow=()=>{
    //     setStyle(st.productlist)
    // }
    
    return( 
        <div  className={st.productlist}>
            
        </div>
       )
    
   
}
export default ProductList