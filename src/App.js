import React from "react";

import { Route,Routes } from "react-router";
import { Header } from "./layouts/Header";
import { About } from "./pages/about/about";
import { Footer } from "./layouts/Footer";


function App() {
  return (
    <>
    <Header/>
    <Routes>
                    <Route path='/About' element={<About/>} />

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
