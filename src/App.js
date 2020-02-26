import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'


export default function App() {

  return (
      <BrowserRouter>
    <Switch>
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup}/>
    <Route path='/home' component={Home}/>

    </Switch>
    </BrowserRouter>
  );
}
