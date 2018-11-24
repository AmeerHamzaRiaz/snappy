import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import SignUp from './src/components/SignUp';
import Initial from './src/components/Initial';

export default class App extends Component {
  render() {
    return (
      <Root>
        <StackNav />
      </Root>
    );
  }
}

const StackNav = createStackNavigator(
  {
    Initial: { screen: Initial },
    SignUp: { screen: SignUp }
  },
  {
    initialRouteName: 'Initial'
  }
);
