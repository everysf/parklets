import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import anime from 'animejs';
import Home from './components/Home'
import Presskit from './components/Presskit'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/presskit" component={Presskit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
