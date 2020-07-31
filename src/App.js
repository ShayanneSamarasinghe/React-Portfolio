import React from "react";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import NavBar from "./components/navbar";


function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
        <NavBar/>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
        
          <Route exact path="/portfolio" render={() => <Portfolio message="hey"/>} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
