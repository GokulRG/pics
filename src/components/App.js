import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = (term) => {
        axios.get("https://api.unsplash.com/search/photos",{
            headers: {
                Authorization: 'Client-ID 2e48b6e1b70c9091ff05ed2433b786ed40188a65a7948f4f270780c6458b7d1f'
            }, 
            params: {
                query: term
            }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;