//import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

//make a component
const Header = () => (
  <Text>Albums</Text>
);

//Make component avaiable to other parts of the app
// only root component using AppRegistry to render on the evice
// and for every other child components, we export it to use that in the parent component
//that way Header component can be useable in pther areas of the application as well

export default Header;
