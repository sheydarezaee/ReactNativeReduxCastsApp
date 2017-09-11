import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button'

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album; //yay destructuring
  const { 
    headerContentStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle} 
          />
        </View>

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image 
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => console.log(title)}/>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  imageStyle: {
    height: 300,
    flex: 1, //gives full width from left to right
    width: null // and set width to null, weird
  }
};

export default AlbumDetail;

//to manage styling for CardSection header, which consists of 
//an image on the left and Album Name + Artist Name on the right
//wrap image and teh texts in two sepeare View tags and style it
//use justifyContent: 'flex-start' to push both containers to the left side
//but default is verical, so flexDirection:'row' solves this


//whenever we have multiple refereneces to props object, like here , we have three
//props.album, it's a good time to destructure that property out of the argument of 
// props ex. line 6 here


//react-native images will bot expand to fill the space by default,
// instead we have to manually adding a styling rule that tells the image tag
// height and width ,... to be able to render that image on the page
//make sure to syle any image, set height and width to see the image on screen, otehrwise, no see

//scrolling with react-native:
//doesnt do that by default, to scroll:
//first, identify the JSX tags that we expect to be scrollable,
// like the bulk section of content that we want to be scrollable
//here the content to be scrollable is AlbumList
//second, import a react- native component called ScrollView and wrap our content with 
// (checkout albumList.js)
