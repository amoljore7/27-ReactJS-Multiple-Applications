import React, { Component } from "react";

import Menu from './Menu';
import TicTacToe from './TicTacToe/TicTacToe';
import About from './About/About';
import Contact from './Contact/Contact';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {

  componentDidMount() {
    console.log(">>>Inside of Component Did Mount>>");
    
  }

  componentWillUnmount() {
console.log(">>>inside of component Will Mount>>>");
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Menu />
            <Switch>
              <Route path='/' exact component={TicTacToe} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default (App);

