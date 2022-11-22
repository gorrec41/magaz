import { useState,useRef } from 'react';
import st from './style.module.scss'
import { Link} from "react-router-dom";
import Logo from './logo';
import Menu from './menu';
import Search from '../search';
import Nav from './navigation';
import ProductList from '../productlist';



function Header(){
   const[styleMenu,setStyleMenu]=useState(false)
    const ref=useRef(st.productlist)
    console.log(styleMenu);
    
    return( 
        <header className={st.header}>
            <div className={st.container}>
                <div className={st.headerwrap}>
                    <div className={st.hesderleft}>
                        <Link to='/' >
                            <Logo/>
                        </Link>
                        <div className={st.searchmenu}>
                            <Menu menuShow={()=>{setStyleMenu(!styleMenu)}}
                                    menur={styleMenu}
                                />
                            <Search/>
                        </div>
                    </div>
                    <div className={st.headernav}>
                        <Nav/>
                    </div>
                </div>
            </div>
            {/* <ProductList
                styleProd={ref.current}
            /> */}
        </header>
    )
}
export default Header