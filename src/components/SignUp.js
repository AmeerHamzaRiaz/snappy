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
import { Spinner, Button, Item, Input, Icon, Thumbnail } from 'native-base';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: '',
    //   number: '',
      loading: false
    };
  }

  onButtonPress() {
    Keyboard.dismiss();
    // get email and password
    const { name, email, password, repassword } = this.state;
    //first check inputs then set
    this.setState({ loading: true });
    if (name.length === 0 || password !== repassword || !this.validateEmail(email) || email.length === 0 || password.length < 5) {
       Alert.alert('Missing or Invalid Fields', 'Enter valid information then retry');
       this.setState({ loading: false });
    }
    // Alert.alert(email, password);
  }

  validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='large' color="#2980b9" />;
    }
    return (
      <Button
        rounded
        block
        iconLeft
        onPress={this.onButtonPress.bind(this)}
        style={styles.button}
      >
        <Text style={{ color: 'white' }}>Sign Up</Text>
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
        <StatusBar backgroundColor="#2980b9" />
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'black',
            opacity: 0.7
          }}
        />
         <Thumbnail large source={require('../images/riley.jpg')} />
        {/* <Image style={styles.logoImage} source={require('../images/lens.png')} /> */}
        {/* <Text style={styles.logo}>Snapppy</Text> */}
        {/* <Text style={styles.subtitle}>Capture your life!</Text> */}

        <KeyboardAvoidingView
          behavior="padding"
          style={{ alignItems: 'center' }}
        >
          <Item
            rounded
            style={styles.item}
          >
            <Icon active name="person" style={{ color: '#2980b9' }} />
            <Input
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              placeholder="Full Name"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              keyboardType="default"
              style={{ color: '#fff' }}
            />
          </Item>
          <Item
            rounded
            style={styles.item}
          >
            <Icon active name="at" style={{ color: '#2980b9' }} />
            <Input
              onChangeText={email => this.setState({ email })}
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
            style={styles.item}
          >
            <Icon active name="key" style={{ color: '#2980b9' }} />
            <Input
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              keyboardType="default"
              style={{ color: '#fff' }}
              secureTextEntry
              error={this.state.password !== this.state.repassword}
            />
          </Item>
          <Item
            rounded
            style={styles.item}
            error={this.state.password !== this.state.repassword}
          >
            <Icon active name="key" style={{ color: '#2980b9' }} />
            <Input
              onChangeText={repassword => this.setState({ repassword })}
              value={this.state.repassword}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255,255,255,0.7)"
              autoCorrect={false}
              keyboardType="default"
              style={{ color: '#fff' }}
              secureTextEntry
            />
          </Item>
          {this.renderButton()}
        </KeyboardAvoidingView>
      </ImageBackground>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    width: 250,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
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
    color: '#2980b9',
    fontFamily: 'Lobster-Regular'
  },
  subtitle: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 80,
    fontSize: 16
  },
  button: {
    marginTop: 20,
    width: 250,
    backgroundColor: '#2980b9'
  }
});
