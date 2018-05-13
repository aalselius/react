import React from 'react';
import './App.css';
import { 
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Logo from './components/Logo.js';
import Home from './components/Home.js';
import SearchGiphy from './components/SearchGiphy.js';
import SearchSticker from './components/SearchSticker.js';
import RandomGiphy from './components/RandomGiphy.js';
import RandomSticker from './components/RandomSticker.js';

const App = () => (
      <BrowserRouter>
      <div className="App">
        <Header headerText="Giphy" headerClass="mainHeader"/>
        <Sidebar />
        <Route exact path="/React" component={Home} />
        <Route path="/React/searchGiphy" component={SearchGiphy} />
        <Route path="/React/searchSticker" component={SearchSticker} />
        <Route path="/React/randomGiphy" component={RandomGiphy} />
        <Route path="/React/randomSticker" component={RandomSticker} />
        <Logo />
      </div>
      </BrowserRouter>
);

export default App;
