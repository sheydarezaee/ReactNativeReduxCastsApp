import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = (props) => {
  console.log(props.album);
  return(
    <Card>

      <CardSection>
        <View>
          <Image />
        </View>

        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>

      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail;

//to manage styling for CardSection header, which consists of 
//an image on the left and Album Name + Artist Name on the right
//wrap image and teh texts in two sepeare View tags and style it
//use justifyContent: 'flex-start' to push both containers to the left side
//but default is verical, so flexDirection:'row' solves this
