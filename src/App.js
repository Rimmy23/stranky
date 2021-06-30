import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './komponenty/Navbar';
import Footer from './komponenty/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './stranky/about';
import Galery from './stranky/galery';
import Dropdown from './komponenty/Dropdown';
import Kontakty from './stranky/contacts';
import Home from './stranky';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('zmena velikosti')
      }
    };

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  });

  return (
    <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/galery" exact component={Galery} />
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Kontakty} />
          </Switch>
        <Footer />
    </>
  );
}

export default App;
