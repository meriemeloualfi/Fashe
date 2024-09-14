import React from "react";

import { Route,Routes } from "react-router";
import { Header } from "./layouts/Header";
import { About } from "./pages/about/about";
import { Footer } from "./layouts/Footer";
import Home from "./pages/Home/home";
import { MyProvider } from "./utils/contextProvider";
import { Contact } from "./pages/Contact/contact";


function App() {
  return (
    <>
    <Header/>
    <MyProvider>
    <Routes>
                    <Route path='/About' element={<About/>} />
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Contact' element={<Contact/>} />

    </Routes>
    </MyProvider>
    <Footer/>
    </>
  );
}

export default App;
