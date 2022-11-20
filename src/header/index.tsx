import st from './style.module.scss'
import { Link} from "react-router-dom";
import Logo from './logo';
import Menu from './menu';
import Search from '../search';
import Nav from './navigation';

function Header(){

    return( 
        <header className={st.header}>
            <div className={st.container}>
                <div className={st.headerwrap}>
                    <div className={st.hesderleft}>
                        <Link to='/' >
                            <Logo/>
                        </Link>
                        <div className={st.searchmenu}>
                            <Menu/>
                            <Search/>
                        </div>
                    </div>
                    <div className={st.headernav}>
                        <Nav/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header