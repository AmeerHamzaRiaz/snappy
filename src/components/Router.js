import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import { StyleSheet, Image, StatusBar, AsyncStorage, Alert } from 'react-native';
import React, { Component } from 'react';
import { Header, Container, Content, Text, Body, Button } from 'native-base';
import Home from './Home';

const BLUE_STATUS = '#2980b9';
const BLUE_COLOR = '#3498db';


export default class Router extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Username: ''
      };
    }

  render() {
    return (
        <MyApp screenProps={{ Username: 'Username' }} />
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={styles.container}>
        <Image
          style={styles.drawerImage}
          source={require('../images/riley.jpg')}
        />
        <Text style={styles.drawerText}>{props.screenProps.Username}</Text>
      </Body>
    </Header>

    <Content>
      <StatusBar backgroundColor={BLUE_STATUS} />
      <DrawerItems {...props} />
      <Button
        rounded
        warning
        // onPress={() => { AsyncStorage.clear(); }}
      >
        <Text> Log Out </Text>
      </Button>
    </Content>
  </Container>

);


const MyApp = createDrawerNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: Home,
    },
    // History: {
    //   screen: History,
    // }
  },
  { 
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      contentOptions: {
      activeTintColor: BLUE_COLOR,
    },
  }
);


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      drawerHeader: {
        height: 180,
        backgroundColor: BLUE_COLOR
      },
      drawerImage: {
        height: 90,
        width: 90,
        borderRadius: 45,
        borderColor: 'white',
        paddingBottom: 20
      },
      drawerText: {
        marginTop: 20,
        fontSize: 22, 
        color: 'white',
        fontWeight: 'bold'
      }
    });