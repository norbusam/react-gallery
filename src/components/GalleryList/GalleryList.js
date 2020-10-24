import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render(){
        return(
            <>
                {this.props.list.map(photo=>(
                    <GalleryItem addLike={this.props.addLike} key={photo.id} photo={photo}/>
                ))}
            </>
        )
    }
}

export default GalleryList;