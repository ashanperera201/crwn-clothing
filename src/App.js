import React from 'react';
import './App.css';
import HomePage from './page/homepage/home.component';
import ShopPage from './page/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
