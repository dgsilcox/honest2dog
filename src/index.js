import React from 'react';
import ReactDOM from 'react-dom';
/*
import { Router, Route, Switch } from 'react-router'
*/
/*
import { HashRouter as Router, Route } from 'react-router';
*/
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import About from './components/about';
import Services from './components/services';
import VetServices from './components/vetservices';
import Goals from './components/goals';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/home" component={App}/>
        <Route path="/services" component={Services}/>
        <Route path="/about" component={About}/>
        <Route path="/mission" component={Goals}/>
        <Route path="/professionals" component={VetServices}/>
    </Switch>
  </BrowserRouter>

 /* destination */
), document.getElementById('root'));
registerServiceWorker();
