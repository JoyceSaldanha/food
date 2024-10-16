import './App.css';
import "primereact/resources/themes/lara-dark-cyan/theme.css";
import 'primeicons/primeicons.css';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
        
import Header from './Header';
import Recipe from './Recipe';
import Country from './Country';
import Category from './Category';
import CategoryDetails from './CategoryDetails';
import Random from './Random';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Recipe></Recipe>}></Route>
          <Route path='/category' element={<Category></Category>}></Route>
          <Route path='/country' element={<Country></Country>}></Route>
          <Route path='/:categoryName' element={<CategoryDetails></CategoryDetails>}></Route>
          <Route path='/random' element={<Random></Random>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
