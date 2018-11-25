import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ImageBackground,
  Keyboard,
  Alert,
  Image
} from 'react-native';
import { Spinner, Button, Item, Input, Icon } from 'native-base';
import SignUp from './SignUp';

const BLUE_COLOR = '#3498db';
const BLUE_STATUS = '#2980b9';

export default class Login extends Component { 
  static navigationOptions = ({ navigation }) => ({
    header: null
})


  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };
  }

  onButtonPress() {
    Keyboard.dismiss();
    // get email and password
    const { email, password } = this.state;
    //first check inputs then set
    this.setState({ loading: true });

    if (!this.validateEmail(email) || email.length === 0 || password.length < 5) {
      //If login Credentials are wrong
       Alert.alert('Missing or Invalid Fields', 'Enter valid email and password');
       this.setState({ loading: false });
    } else {
    // else if Login Credentials are right
    setTimeout(() => {
      this.setState({ loading: false });
      this.props.changeLoginStatus();
      }, 10000);

  
    }
  }

  validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large' color={BLUE_COLOR} />;
    }
    return (
      <Button
        rounded
        block
        iconLeft
        onPress={this.onButtonPress.bind(this)}
        style={styles.button}
      >
        <Text style={{ color: 'white' }}>Login</Text>
        <Icon name="log-in" />
      </Button>
    );
  }

  render() {
    return (
      // <View style={styles.container}>
      <ImageBackground
        source={require('../images/selfie.jpg')}
        style={styles.bg}
      >
        <StatusBar backgroundColor={BLUE_STATUS} />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'black',
            opacity: 0.7
          }}
        />
        <Image style={styles.logoImage} source={require('../images/lens.png')} />
        <Text style={styles.logo}>Snapppy</Text>
        {/* <Text style={styles.subtitle}>Capture your life!</Text> */}

        <KeyboardAvoidingView
          behavior="padding"
          style={{ alignItems: 'center' }}
        >
          <Item
            rounded
            style={{
              width: 250,
              marginTop: 10,
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
          >
            <Icon active name="at" style={{ color: BLUE_COLOR }} />
            <Input
              onChangeText={email =>
                this.setState({ email: email })
              }
              value={this.state.email}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              keyboardType="email-address"
              style={{ color: '#fff' }}
            />
          </Item>
          <Item
            rounded
            style={{
              marginTop: 10,
              width: 250,
              backgroundColor: 'rgba(0,0,0,0.4)'
            }}
          >
            <Icon active name="key" style={{ color: BLUE_COLOR }} />
            <Input
              onChangeText={pass =>
                this.setState({ password: pass })
              }
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              keyboardType="default"
              style={{ color: '#fff' }}
              secureTextEntry
            />
          </Item>
          {this.renderButton()}
        </KeyboardAvoidingView>
        <Text 
          onPress={() => this.props.navigation.navigate('SignUp')} 
          style={styles.signup}
        >
          Don't have account? Sign Up
        </Text>
        {/* <Text style={styles.signupBlue}>Sign Up</Text> */}

      </ImageBackground>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  bg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  logoImage: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  logo: {
    fontSize: 52,
    textAlign: 'center',
    color: BLUE_COLOR,
    fontFamily: 'Lobster-Regular'
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 80,
    fontSize: 16
  },
  signup: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 16
  },
  signupBlue: {
    textAlign: 'center',
    color: BLUE_COLOR,
    marginTop: 20,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    width: 250,
    backgroundColor: BLUE_COLOR
  }
});
