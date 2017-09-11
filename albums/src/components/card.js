import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  console.log('props.children', props.children);
  return (
    <View style={styles.containerStyle}>
      {props.children} 
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, //specifies what sides the shadow to be on
    shadowOpacity: 0.1,
    shaodwRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10	
  }
};

//if we pass one component to the other, it shows up as props.children to the parent component
export default Card;