import st from './style.module.scss'
import Btn from '../../button';
import { useState} from 'react';

interface showMenuType{
    menuShow:(setStyleMenu:boolean)=>void
    menur:boolean
}


function Menu(clickBtnStyle:showMenuType){
    const [showBtn,setShowBtn]=useState(false)
 
    
    return( 
        <div className={st.menu}>
            <div className={st.btn}>
                <Btn 
                    clikStyle={(d)=>{clickBtnStyle.menuShow(d)}}
                    btnShow={clickBtnStyle.menur}
                />
            </div>
        </div>
    )
}
export default Menu