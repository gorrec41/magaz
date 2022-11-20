import st from './style.module.scss';



function Search(){
 
   
    return( 
        <label className={st.searchlabel} htmlFor="search-value">
            <input className={st.searchinput} id="search-value" type="text" placeholder="Поиск по каталогу" />
            {/* required="" */}
        </label>
       )
   
}
export default Search