import st from './style.module.scss'
import {v1}from 'uuid'

function Arrow(){
    return(
        <svg key={v1()} className={st.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.0002 5L8.00008 11.0001L2 5" stroke="#1A191C" strokeLinecap="round" strokeLinejoin="round">  
            </path>
		</svg>
    )
}
export default Arrow