import React, { Component } from 'react';
import { Root, Spinner } from 'native-base';
import Login from './Login';
import Home from './Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  renderContent = () => {
    switch (this.state.isLoggedIn) {
      case true:
        return (<Home />);
      case false:
        return (<Login />);
      default:
        return (<Spinner size="large" color="orange" />);
    }
  };
  render() {
    //if logged in return home page else return login page
    //abhi logic ni daali ye
    return <Root><Login /></Root>;
  }
}
