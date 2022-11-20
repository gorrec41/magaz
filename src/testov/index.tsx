import st from './style.module.scss';

interface propsint{
    tes:boolean
}

function Testov(prec:propsint){
        console.log(prec.tes);
        
   
    return( 
        <label className={st.searchlabel} htmlFor="search-value">
            <input className={st.searchinput} id="search-value" type="text" placeholder="Поиск по каталогу" />
            {/* required="" */}
        </label>
       )
   
}
export default Testov