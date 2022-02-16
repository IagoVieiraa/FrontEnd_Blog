import React from 'react';
import Navbar from './componentes/estatico/navbar/Navbar'
import Footer from './componentes/estatico/footer/Footer'
import './App.css';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
     <Navbar />
       <Home />
     <Footer />
    </>
  );
}

export default App;
