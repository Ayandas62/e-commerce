import './App.css';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Shops from './pages/Shops';
import Footer from './component/Footer/Footer';
import mens_banner from './component/assets/banner_mens.png';
import ladies_banner from './component/assets/banner_women.png'
import kids_banner from './component/assets/banner_kids.png'


function App() {
  return (
    <div className="">
        <Navbar/>


        <Routes>
          <Route path='/' element={<Shops/>}/>
          <Route path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={ladies_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
     
        <Footer/>
    
    </div>
  );
}

export default App;
