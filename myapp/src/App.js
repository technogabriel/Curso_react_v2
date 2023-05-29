import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import ProductList from './components/ProductList/ProductList';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/Cart/Cart';
import { Form } from './components/Form/Form';


function App() {


  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/productos/:categoryId' element={<ProductList/>}/>
          <Route path='/counter' element={<Counter/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
