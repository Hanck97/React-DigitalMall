import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
import Home from "./Home/home";
import List from "./List/index";
import Discovery from "./Discovery/index";
import Cart from "./Cart/index";
import Profile from "./Profile/index";
import Detail from "./Detail/detail";
import Tab from "../commons/Tab/index";
import Login from "./Login/index"
import Register from "./Register/index"
import Protected from "../commons/Protected/index"
const history = createHashHistory();

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/list" component={List}/>
            <Route path="/discovery" component={Discovery}/>

            <Protected path="/cart" component={Cart}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>

          </Switch>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}