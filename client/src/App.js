import {Routes , Route } from 'react-router-dom';

import './App.css';
import './assets/styles/style.scss';
import './assets/fontawesome/css/all.min.css';

import HomePage from './pages/home/home.page';
import AdminPage from './pages/admin/admin.page';
import ShopPage from './pages/shop/shop.page';
import CartPage from './pages/cart/cart.page';
import ContactPage from './pages/contact/contact.page';

function App() {

  return (
    <>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminPage/>} />
          <Route path="/shop/*" element={<ShopPage/>}/>
          <Route path="/cart" exact element={<CartPage />} />
          <Route exact path="/contact" element={<ContactPage/>} />
        </Routes>
    </>
  );
}


export default App;
