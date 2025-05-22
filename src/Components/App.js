import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './NavBar';
import About from './About';
import Login from './Login';
import Home from './Home';


function App() {
    return (
      <div>
        <NavBar />
        
        <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
  
        <Route path="/">
          <Home />
        </Route>
        </Switch>
      </div>
    );
  }
  

export default App