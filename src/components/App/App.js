import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    album: []
  }
  componentDidMount = () => {
    this.getGallery();
  }


  getGallery = () => {
    //GET picture from server
    axios.get('/gallery').then(response =>{
      console.log(response.data);
      this.setState({
        album: response.data
      })
    }).catch(err=>{
      console.log('error in GET', err);
    })
  }

  addLike = () => {
    console.log('liked');
    axios({
        method: 'PUT',
        url: `/gallery/like/${photoId}`,
        data: photoId
    }).then((response)=>{
        console.log(response);
        this.props.getGallery();
    }).catch((error)=>{
        console.log('error in put', error);
    })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList list={this.state.album}/>
      </div>
    );
  }
}

export default App;
