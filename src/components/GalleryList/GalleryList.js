import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render(){
        return(
            <>
                {this.props.list.map(photo=>(
                    <GalleryItem key={photo.id} item={photo}/>
                ))}
            </>
        )
    }
}

export default GalleryList;