import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetail = ({ album }) => {

  const {title, artist, thumbnail_image} = album; //yay destructuring
  const { headerContentStyle, thumbnailStyle} = styles;
  
  return(
    <Card>

      <CardSection>

        <View>
          <Image 
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle} 
          />
        </View>

        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>

      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;

//to manage styling for CardSection header, which consists of 
//an image on the left and Album Name + Artist Name on the right
//wrap image and teh texts in two sepeare View tags and style it
//use justifyContent: 'flex-start' to push both containers to the left side
//but default is verical, so flexDirection:'row' solves this


//whenever we have multiple refereneces to props object, like here , we have three
//props.album, it's a good time to destructure that property out of the argument of props ex. line 6 here


//react-native images will bot expand to fill the space by default,
// instead we have to manually adding a styling rule that tells the image tag
// height and width ,... to be able to render that image on the page
//and dont forget 