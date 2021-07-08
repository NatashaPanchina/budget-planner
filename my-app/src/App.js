import React from "react";
import Header from "./header/Header.js";
import Menu from "./menu/Menu.js";
import Routes from "./routes/Routes.js";
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />    
      <div id="content"> 
        <Router>
        <Menu />  
          <Switch>
            <Routes/>
          </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
