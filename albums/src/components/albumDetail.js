import React from 'react';
import { View, Text, Image } from 'react-native';

const AlbumDetail = (props) => {
  console.log(props.album);
  return(
    <View>

      <View>
      	<Image source={props.album.image}/>
      	<Text>{props.album.title}</Text>
      	<Text>{props.album.artist}</Text>
      </View>

      <View>
        <Image />
      </View>

      <View>
        <Button />
      </View>

    </View>
  );
};

export default AlbumDetail;