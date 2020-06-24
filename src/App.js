import React from 'react';
import { BrowserRouter as Router , Route ,Switch,Link } from 'react-router-dom';
import Home from './Header/Home/home'
import About from './Header/About/about'
import './App.css';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Link to ="/" style={{padding:"10px 20px" }}>Home</Link>
        <Link to ="/about">About</Link>
        <Route path ="/" exact component={Home}/>
        <Route path ="/about" exact component={About}/>
      </Router>
    </div>
  );
}

export default App;
