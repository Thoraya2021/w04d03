import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import Card from './components/Card';
import Contact from './components/Contact';
function App () {
  return (
    <>
    <Nav/>
    <Switch>
    <Route exact path="/" components={Home} />
    <Route exact path="/About" components={About} />
    <Route exact path="/contact" components={Contact} />
    <Route exact path="/Cards" components={Cards} />
    <Route exact path="/Card/:id" components={Card} />
<Route path="*" render={()=>{
return <h1>404</h1>;

    }}/>
   </Switch>
   </>
  );
}

export default App;
