import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardItem, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  renderError() {
    if (this.state.error) {
      return (
        <CardItem>
            <Text style={styles.errorTextStyle}>
              {this.state.error}
            </Text>
        </CardItem>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>

        <CardItem>
          <Input
            label='Password'
            placeholder='password'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        
        <CardItem>
          { this.renderButton() }
        </CardItem>
        
        { this.renderError() }
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    textAlign: 'center'
  } 
});

export default LoginForm;
