//Place code here for ios, if you write code on Mac and running ios simulator!!!

//import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component, which is a js function that returns some aount of JSX. 
// React Native is taking the component and render it to the screen.
const App = () => (
  <Text>Some Text Janeeeeeee ariiiiii</Text>
);
//render it to the device
//first argument: albums is the project name, root directory,
 // when we used react-native init command line in terminal
//second argument: a function that returns the first component to render for the application 
//for every react native application, we must register at least one react component
AppRegistry.registerComponent('albums', () => App);


// to render the components on screen:
// react-native run-ios command on terminal

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class albums extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('albums', () => albums);

*/
