import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/estatico/navbar/Navbar';
import Footer from './componentes/estatico/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaTema from './componentes/temas/listatema/ListaTema';
import ListaPostagem from './componentes/postagens/listapostagem/ListaPostagem';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
          <Route path='/temas'>
            <ListaTema />
          </Route>
          <Route path='/postagens'>
            <ListaPostagem />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
