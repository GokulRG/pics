import React from 'react';

class ImageCard extends React.Component {

    //Creating a Ref for every image that's rendered so that we can access the image 
    //height
    constructor(props) {
        super(props);
        this.state = {spans : 0};
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
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);

        //If we have the same name for the key and value , we can shorten it using ES2015 syntax, to 
        //just take the name of the value
        //this.setState({spans : spans});

        this.setState({spans});
    };

    render() {

        const {description, urls} = this.props.image;

        return (
            //We pass the inline styling from the spans value that we have saved on the state
            <div style={{ gridRowEnd : `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;