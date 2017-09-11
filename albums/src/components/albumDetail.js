import React from 'react';
import { Text, Image } from 'react-native';
import Card from './card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  console.log(props.album);
  return(
    <Card>

      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
      
    </Card>
  );
};

export default AlbumDetail;