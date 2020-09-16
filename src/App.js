import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/index';
import Details from './pages/Details/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CardSearch from './components/CardSearch';
import Sets from './pages/Sets/index'
import AllSets from './pages/AllSets';
import DeckBuilder from './pages/DeckBuilder';

function App() {
  return (
    <>

      <Router>
        <CardSearch />
        <Switch>
          <Route path="/deckbuilder">
            <DeckBuilder />
          </Route>
          <Route path="/allsets">
            <AllSets />
          </Route>
          <Route path="/sets/:setCode">
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
