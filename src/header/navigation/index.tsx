import ListItem from '../../listitem'
import Arrow from './arrow'
import st from './style.module.scss'
import {v1}from 'uuid'

function Navi(){
 
    const iditem=v1() 
    const navItems=[
       {id:iditem,itemlink:'/',className:st.navlink,text:'Информация',svg:<Arrow/>},
       {id:iditem,itemlink:'/',className:st.navlink,text:'Контакты'},
       {id:iditem,itemlink:'/',className:st.navlink,text:'Отзывы'},
       {id:iditem,itemlink:'/',className:st.navlink,text:'Дистрибутивы'}
   ]
    
    const navItemList=navItems.map((m)=>{
       
        return(
            <ListItem
        
            itemlink={m.itemlink}
            className={`${m.className}`}
            text={m.text}
            svg={m.svg}
           />
        )
       
    })

    return( 
        <nav className={st.nav}  >
            <ul className={st.navlist} >
                {navItemList}
            </ul>
        </nav>
    )
}
export default Navi