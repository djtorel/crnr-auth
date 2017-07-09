import React, { Component } from 'react';

import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
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
        <CardItem />
        
        <CardItem>
          <Button>
            Log In
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
