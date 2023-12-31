import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCondintions from './pages/TermAndCondintions';
import Privacy from './pages/Privacy';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
      <Route  index element={<Home/>}/>
      <Route  path="about" element={<About/>}/>
      <Route  path="contact" element={<Contact/>}/>
      <Route  path="store" element={<OurStore/>}/>
      <Route  path="product/:id" element={<SingleProduct/>}/>
      <Route  path="blogs" element={<Blog/>}/>
      <Route  path="blog/:id" element={<SingleBlog/>}/>
      <Route  path="compare-product" element={<CompareProducts/>}/>
      <Route  path="wishlist" element={<Wishlist/>}/>
      <Route  path="login" element={<Login/>}/>
      <Route  path="signup" element={<SignUp/>}/>
      <Route  path="forgotpassword" element={<ForgotPassword/>}/>
      <Route  path="resetpassword" element={<ResetPassword/>}/>
      <Route  path="privacy" element={<Privacy/>}/>
      <Route  path="refundpolicy" element={<RefundPolicy/>}/>
      <Route  path="shippingpolicy" element={<ShippingPolicy/>}/>
      <Route  path="termsandconditions" element={<TermAndCondintions/>}/>
      <Route  path="cart" element={<Cart/>}/>
      <Route  path="checkout" element={<Checkout/>}/>
      </Route>

      </Routes >
    </BrowserRouter>
    </>
    );
}

export default App;
