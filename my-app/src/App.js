import React from "react";
import Header from "./header/Header.js";
import Menu from "./menu/Menu.js";
import Home from "./home/Home.js";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      
     <Router>
      <Menu />
       <div id="main">
         <Switch>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
        </div>
     </Router>
    </div>
  );
}

export default App;
