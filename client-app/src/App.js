import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import DataCatalogs from './containers/DataCatalogs/DataCatalogs';
import Login from './containers/Login/Login';
import SignUp from './containers/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
             <Route path="/" exact component={DataCatalogs}/>
             <Route path="/login"  component={Login}/>
             <Route path="/signup"  component={SignUp}/>
             <Redirect to="/" />
          </Switch>
           
        </Layout>
      </div>
    ); 
  }
}

export default withRouter(App);
