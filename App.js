import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import { configFirebase } from './src/config/config';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(configFirebase);
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
