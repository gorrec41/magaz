import st from './style.module.scss'
import Btn from '../../button';


function Menu(){

    return( 
        <div className={st.menu}>
            <div className={st.btn}>
                <Btn/>
            </div>
        </div>
    )
}
export default Menu