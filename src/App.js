import React ,{Fragment} from "react";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Header from "./components/Header";
import Footer from "./components/Footer"




function App() {
  return (
    <Fragment>
      <Router>
       
        <Header/>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" render={() => <Portfolio message="hey"/>} />
        
       
        <Footer style={{margin: 'auto ', paddingTop: '15px'}}/>
      </Router>
    </Fragment>
  );
}

export default App;
