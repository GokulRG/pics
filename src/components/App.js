import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {

    state = { images : [] };

    //Change this to an arrow function so that there is no binding error.
    onSearchSubmit = async (term) => {

        //Once you export the configuration using the unsplash.js file, you can directly use it like so
        //and all the other stuff that's configured there will apply to this.
        const result = await unsplash.get('search/photos',{
            params: {
                query: term
            }
        });
        //This is how you would use promises to retrieve the results
        // .then((result) => {
        //     console.log(result.data.results);
        // });

        this.setState({ images : result.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found {this.state.images.length} images
            </div>
        );
    }
};

export default App;