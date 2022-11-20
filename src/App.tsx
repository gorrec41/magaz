import './App.scss';
import Header from './header';
import ProductList from './productlist';
import Testov from './testov';
interface propsint{
  bool:boolean
}
function App() {
  
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='content'>
          <Header/>
         <ProductList
          // prod={true}
         />
        </div>
      </div>
    </div>
    
  );
}

export default App;
