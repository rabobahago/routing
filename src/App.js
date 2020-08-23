import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import userDetail from './UserDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/shop' exact component={Shop}/>
          <Route path='/shop/:id' component={userDetail}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
