import React, { Component } from 'react';
import { ScrollView } from 'react-native'; //replave View tag with ScrollView
import axios from 'axios';
import AlbumDetail from './albumDetail'; 

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { //step one
      albums: []
    };
  }
  
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({
        albums: response.data
      })); //step two
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }
  //everything inside the View tag here needs to be set to scroll, so replace View with ScrollView
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()} 
      </ScrollView>
    );
  }
}

export default AlbumList;


// lifecycle methods for class based components, 
//class based component knows when it's about to be rendered, or removoed from screen,
//class based components has more sense about what's going on inside the application
// so they know exactly when they are going to be rendered on the screen
//and we can get notification of that by lifecycle methods
//lifecycle methods are functions that we place on our class that will be automatically 
//called at some point, like componentWillMount
//any time that our component is about to be rendered on the screen, this method will be called

//using built-in debugger from react-native:
//command+D: react-native developer menu -> debug JS remotely

//state:
// state is a plain js object used to record and respond to user-triggered events
// state is how react handles changing data that is showing on the screen
//change of state of AlbumList from an empty array to an array of albums
// the event that sepeares these two states is fetching our data
// in react, any time we change the state of the component, the component will automatically rerenders 
// for this, 
// first, we set default or initial state for the component
// second,  when we fetch our data, we are going to tell our component state to update 
// (setState:
//when we need to update what a component shows, call this.setState
// to update our component state, here is some new data for our component state
//we now need to rerender this component with this new data)
// finally, we make sure that our component makes use of this state

// props vs state:
//whenever you want to communicate from a parent component to a child component, use props
//state is for component's internal record keeping, to update data 
// only use state with class based components


