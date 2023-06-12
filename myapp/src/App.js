import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter/Counter';
import ProductList from './components/ProductList/ProductList';
import { Navbar } from './components/Navbar/Navbar';
import { Cart } from './components/Cart/Cart';
import { Form } from './components/Form/Form';
import { PokeApi } from './components/PokeApi/PokeApi';
import { CartProvider } from './components/context/CartContext';



function App() {


  return (
    <>
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/productos/:categoryId' element={<ProductList/>}/>
          <Route path='/counter' element={<Counter/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/form' element={<Form/>} />
          <Route path ='/poke' element={<PokeApi/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;
