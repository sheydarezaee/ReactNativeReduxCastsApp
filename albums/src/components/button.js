import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={buttonStyle}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, //this means I want this button to fill up and expand as much content as possible
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center', //this centers the text inside the button
    color: '#007aff',
    fontSize: 15,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;

//TouchableHighlight and TouchableOpacity are just button
// TouchableOpacity, the button is just going to fade away when te user taps on it, 
// just to let the user know 
// hey we registered that click and we are gonna handle that, 
// meaning to give user feedback that we know you clicked!
//treat TouchableOpacity as if they were View tag, to wrap other components

// Flexbox rules:
//alignSelf: when an element position itself, 
// 'stretch' means stretch to fill the limits of the container
//alignItems: when a container tells all its children that it needs to position 
// those items in a specific way

//styles will be applied to TouchableOpacity not Text tag, just saying

//paddingTop and paddingButton: to make sure that the Text is not really squished by the border
//of TouchableOpacity .. so some space on the top and buttom