import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component {
    render(){
        return(
            <>
                {this.props.list.map(item=>(
                    <GalleryItem key={item.id} item={item}/>
                ))}
            </>
        )
    }
}

export default GalleryList;