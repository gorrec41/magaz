import { Link } from 'react-router-dom';
import st from './style.module.scss';
import {v1}from 'uuid'



type itemType={
    id?:string;
    itemlink:string;
    className:string;
    text:string;
    svg?:any;
}
function ListItem(propsItem:itemType){

    return(
        <li  className={st.navitem}>
            <Link to={propsItem.itemlink} className={`${propsItem.className} ${st.arrow}` } key={v1()}>
                {propsItem.text}
                {propsItem.svg}
            </Link>
        </li>
    )
}
export default ListItem