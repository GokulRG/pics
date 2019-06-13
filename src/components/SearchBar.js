import React from 'react';

class SearchBar extends React.Component {

    state = { searchTerm: '' };

    onInputChange(event) {
        //Now the value in the input field is known only to the input HTML element and it's saved in the DOM
        //We need to save that information in react, so that we don't have to work with the DOM every single 
        //time and we can reap the benefits of React's state management
        this.setState({searchTerm: event.target.value});
    }

    //Using arrow functions of ES2015 so that the binding takes place automatically, and we don't have to do 
    //the binding manually. If we had declared a regular function like the one above, we would have required to 
    //create a constructor and within it, we would have needed to do this.onFormSubmit = this.onFormSubmit.bind(this);
    //for this function to work as expected.
    onFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchTerm);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search </label> <br/>
                        {/* This is the syntax for passing a function with an argument */}
                        <input type="text" value={this.state.searchTerm} onChange={event => this.onInputChange(event)}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;