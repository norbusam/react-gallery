import React, { Component } from "react";
import GalleryList from '../GalleryList/GalleryList'

class GalleryItem extends Component {
    render(){
        return(
            <>
                <p>Hello from GalleryItem</p>
                <GalleryList/>
            </>
        )
    }
}

export default GalleryItem;