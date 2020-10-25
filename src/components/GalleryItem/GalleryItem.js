import React,{ Component } from "react";
import './GalleryItem.css'


class GalleryItem extends Component {
    state = {
        showImage: true
    }

    showImage = () => {
        console.log('clicked', this.state.showImage);
        //set the state the to false on img click
        this.setState({
            showImage: !this.state.showImage
        })
    }// end showImage

    render(){
        return(
            <>
            {/*ternary operation for conditional rendering if img is true*/}
                {this.state.showImage ?
                <div className="picture"> 
                       <img onClick={this.showImage} alt="goat" src={this.props.photo.path}/> 
                <br/>
                    <p>Likes:{this.props.photo.likes}</p>
                    <br/>
                    <button onClick={()=>this.props.addLike(this.props.photo)}>Like</button>
                </div>
                :
                /*or else show the image description*/
                <div className="description"> 
                    <p id="text" onClick={this.showImage}>{this.props.photo.description}</p> 
                     <p>Likes:{this.props.photo.likes}</p> 
                     <br/>
                     <button onClick={()=>this.props.addLike(this.props.photo)}>Like</button> 
                </div>
                }  
                
            </>
        )
    }
}//end GalleryItem

export default GalleryItem;