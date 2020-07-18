import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Products from './products';

export default (props) => {
  return (
    <>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={() => <h1>Welcome Home!!!!</h1>} />
      </Switch>
    </>
  );
};
