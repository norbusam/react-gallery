import React,{ Component } from "react";
import './GalleryItem.css'


class GalleryItem extends Component {
    render(){
        return(
            <>
                <div className="picture">
                       <img alt="goat" src={this.props.item.path}/> 
                       <p>{this.props.item.description}</p> 
                     <p>number of Likes:{this.props.item.like}</p> 
                </div>
            </>
        )
    }
}

export default GalleryItem;