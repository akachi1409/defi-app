// import logo from './logo.svg';
import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//import components
import Auth from './page/Auth';
import NFTGenerator from './page/NFTGenerator'
import ItemPage from './page/ItemPage'
import Chain from "./page/Chain/Chain"
function App() {
  return (
    <React.Suspense >
      <Router>
        <Switch>
          <Route exact path="/author">
            <Auth/>
          </Route>
          <Route exact path="/generator">
            <NFTGenerator/>
          </Route>
          <Route exact path="/item">
            <ItemPage/>
          </Route>
          <Route exact path="/chain">
            <Chain/>
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
