import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route,Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';
class App extends Component {
  render(){
    return (
      <div>
        <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="/orders" component={Orders}></Route>
              <Route path="/" exact component={BurgerBuilder}></Route>
            </Switch>
            {/* <BurgerBuilder></BurgerBuilder> 
            <Checkout></Checkout>  */}
        </Layout>
      </div>
    )
  }
 }

export default App;