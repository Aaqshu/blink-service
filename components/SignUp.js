import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, ScrollView, Text, ToastAndroid } from 'react-native';
import t from 'tcomb-form-native';
import { StackNavigator } from 'react-navigation';

const Form = t.form.Form;
const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
  return reg.test(email);
});

const User = t.struct({
  email: Email,
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
      password: true,
      secureTextEntry: true,
      error: 'Password field is required'
    },
    terms: {
      label: 'Accept Terms and Conditions',
    },
  },
  stylesheet: formStyles,
};

export default class SignUp extends Component {

  constructor() {
    super();
    state = {
      termsErrMsg: 'erros'
    }
  }

  componentWillMount () {
    this.props.navigation.navigate('Dashboard');
  }

  handleSubmit = () => {
    this.props.navigation.navigate('Dashboard');
    const value = this._form.getValue();
     console.log('value: ', value);
     if (value) {
       if (value.terms){
         this.props.navigation.navigate('Dashboard');
       }
       else {
         ToastAndroid.show('Accept Terms & Agreement', ToastAndroid.SHORT);
       }
    }
  }

  render() {
    return (
      <ScrollView>
      <View  style={styles.container} >
        <Image
          source={
              require('../assets/logo.png')
          }
           style={styles.welcomeImage}
        />
        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
           onChange={(v) => this.handleSubmit(v)}
        />
        <Button
          title="Sign Up"
          onPress={this.handleSubmit}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 0,
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

// const RootStack = StackNavigator({
//   SignUp: {
//     screen: SignUp,
//     navigationOptions:  {
//       headerLeft: null
//     },
//   }
// },
//   {
//     initialRouteName: 'SignUp',
//   });
