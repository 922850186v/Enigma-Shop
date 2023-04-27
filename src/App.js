import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/ShopContext';
import Checkout from './pages/cart/Checkout';
import { useEffect } from 'react';
import Footer from './components/Footer';

function App() {

  useEffect(()=>{
    document.title="Enigma-Shop";
  },[])
  
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path='/' element={<Shop/>}/>
          <Route  path='/cart' element={<Cart/>} />
          <Route  path='/checkout' element={<Checkout/>} />
        </Routes>
        <Footer/>
      </Router>
    </ShopContextProvider>
    </div>
  );
}


export default App;
