//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    //wrapping the text with a view tag to make the positioning easier
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//styling Header
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make component avaiable to other parts of the app
// only root component using AppRegistry to render on the evice
// and for every other child components, we export it to use that in the parent component
//that way Header component can be useable in pther areas of the application as well
export default Header;

// component nesting is the process of placing one component inside another.
//for this first import the Header component in to App component
//and then nest it inside the App component

// flexbox is a system of positioning elements with a container, 
//here the text is withing the container view .. so how to position
// the text tag within the view tag is question to solve
//everything in react native is positioned to the top left of 
//its parent, just like a normal html

//in flexbox:

//justifyContent property is used to position elements in the vertical direction
//masalan to move something from top left to downwards, meaning vertical, using flex-end
//if center: pushes element vertically to the center
//if flex-start: leaves the element on top left (default behavior)

//alignItems property positions element horizontally, from left to right
//give it 'flex-start' positions very left
//give it 'center' to center it 
//give it 'flex-end' pushes it all the way to the right

// we can combine these two to align an element in the center
//these two properties will be applied to the container, meaning view tag, and 
//everything within that container will have those properties

//in order to reuse Header component, and not hardcode it like 'Albums', pass it through props
// passing props from App component to Header component. 
//first identify the variable or value that we want to be provided by the parent
// second provide a reference to the props that is coming from the parent component
// finally, we will make sure that the parent component provides that specific prop that the Header is expecting





















