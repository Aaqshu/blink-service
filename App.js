import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import t from 'tcomb-form-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';


const RootStack = StackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions:  {
      headerLeft: null
    },
  },
    Dashboard: { screen: Dashboard,
      navigationOptions:  {
        title: 'All Services',
        headerLeft: null
      }
     },
  },
  {
    initialRouteName: 'SignUp',
  });

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  addess: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '300'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 16,
      marginBottom: 7,
      fontWeight: '400'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Email field is required'
    },
    username: {
      error: 'username is required'
    },
    password: {
      error: 'Password field is required'
    },
    terms: {
      label: 'Accept Terms and Conditions',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {

  constructor() {
    super();
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    console.log(this.props.navigation)
  }

  render() {
    return (
        <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  welcomeImage: {
    width: '50%',
    height: 80,
    resizeMode: 'contain',
    marginLeft: 70,
    marginRight: 70,
  }
});
