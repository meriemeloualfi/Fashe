import React from "react";

import { Route,Routes } from "react-router";
import { Header } from "./layouts/Header";
import { About } from "./pages/about/about";
import { Footer } from "./layouts/Footer";
import Home from "./pages/Home/home";
import { MyProvider } from "./utils/contextProvider";
import { Contact } from "./pages/Contact/contact";
import { Shop } from "./pages/ShopPage/shop";
import { Addcart } from "./pages/AddCart/addCart";
import { Product } from "./pages/product/product";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/signup/signup";


function App() {
  return (
    <>
    <Header/>
    <MyProvider>
    <Routes>
                    <Route path='/About' element={<About/>} />
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Shop' element={<Shop/>} />
                    <Route path='/Addcart' element={<Addcart/>} />
                    <Route path='/product/:name' element={<Product/>} />
                    <Route path='/Login' element={<Login/>} />
                    <Route path='/Signup' element={<Signup/>} />
                    <Route path='/Contact' element={<Contact/>} />

    </Routes>
    </MyProvider>
    <Footer/>
    </>
  );
}

export default App;
