import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  state = {
    album: []
  }
  // on page load, run the function getGallery
  componentDidMount = () => {
    this.getGallery();
  }

// GET route
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

// Put Route
  addLike = (photo) => {
    console.log('liked');
    axios({
        method: 'PUT',
        url: `/gallery/like/${photo.id}`,
        data: photo
    }).then((response)=>{
        console.log(response);
        this.getGallery();
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
        <GalleryList addLike={this.addLike} list={this.state.album}/>
      </div>
    );
  }
}// end App

export default App;
