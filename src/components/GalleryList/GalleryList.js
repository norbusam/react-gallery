import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render(){
        return(
            <>
                <p>also, hello from GalleryList</p>
                <GalleryItem/>
            </>
        )
    }
}

export default GalleryList;