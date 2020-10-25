import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

class GalleryList extends Component {
    render(){
        return(
            <div className="gallery">
                {this.props.list.map(photo=>(
                    <GalleryItem addLike={this.props.addLike} key={photo.id} photo={photo}/>
                ))}
            </div>
        )
    }
}// end GalleryList

export default GalleryList;