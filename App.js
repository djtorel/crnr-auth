import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './src/components/common';
import { configFirebase } from './src/config/config';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp(configFirebase);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: {
        return (
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Button onPress={() => firebase.auth().signOut()} >
              Log Out
            </Button>
          </View>
        );
      }
      case false: {
        return <LoginForm />;
      }
      default: {
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Spinner size='large' />
          </View>
        );
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
