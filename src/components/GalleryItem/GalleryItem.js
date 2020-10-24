import React,{ Component } from "react";
import './GalleryItem.css'


class GalleryItem extends Component {
    state = {
        showImage: true
    }

    showImage = () => {
        console.log('clicked', this.state.showImage);
        
        this.setState({
            showImage: !this.state.showImage
        })
       
    }
    render(){
        return(
            <>
                {this.state.showImage ?
                <div className="picture"> 
                       <img onClick={this.showImage} alt="goat" src={this.props.photo.path}/> 
                <br/>
                    <p>Liks:{this.props.photo.likes}</p>
                    <br/>
                    <button onClick={()=>this.props.addLike(this.props.photo)}>Like</button>
                </div>
                :
                <div className="picture"> 
                    <p onClick={this.showImage}>{this.props.photo.description}</p> 
                     <p>Likes:{this.props.photo.likes}</p> 
                     <br/>
                     <button onClick={()=>this.props.addLike(this.props.photo)}>Like</button> 
                </div>
                }  
                
            </>
        )
    }
}

export default GalleryItem;