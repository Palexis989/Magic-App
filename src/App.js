import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/index';
import Details from './pages/Details/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardSearch from './components/CardSearch';
import Sets from './pages/Sets/index'

function App() {
  return (
    <>

      <Router>
        <CardSearch />
        <Switch>
          <Route path="/sets/:code">
            <Sets />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
