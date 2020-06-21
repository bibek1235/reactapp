import React from 'react';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import Services from './Services';
import Contact from './component/Contact';
import pageNotFound from './component/pageNotFound';

import Header from './component/Header';
import Product from './component/Product';

import Footer from './component/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={pageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
