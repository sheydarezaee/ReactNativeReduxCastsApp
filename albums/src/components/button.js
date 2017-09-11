import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  return (
  	<TouchableOpacity>
      <Text>Click me!!!</Text>
    </TouchableOpacity>
  );
};

export default Button;

//TouchableHighlight and TouchableOpacity are just button
// TouchableOpacity, the button is just going to fade away when te user taps on it, just to let the user know 
// hey we registered that click and we are gonna handle that, 
// meaning to give user feedback that we know you clicked!
//treat TouchableOpacity as if they were View tag, to wrap other components