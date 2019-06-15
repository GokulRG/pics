import React from 'react';

class ImageCard extends React.Component {

    //Creating a Ref for every image that's rendered so that we can access the image 
    //height
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    //Once the component Mounts, you can access the image's height
    componentDidMount() {
        console.log(this.imageRef);

        //But if you directly try to access the image height here..like so, you won't get anything
        //because by the time you access it, the image hasn't even been downloaded and rendered on the 
        //DOM.
        //console.log(this.imageRef.current.clientHeight);
        //So we need to add an event Listener callback that gets called after successful load of the 
        //image.

        //Here once again we're calling this.setSpans, so remember to do the bind or use arrow functions
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    render() {

        const {description, urls} = this.props.image;

        return (
            <div>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;