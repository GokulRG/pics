import axios from 'axios';

//Creating default axios instances where this configuration applies to all axios requests that are made.
export default axios.create({
    headers: {
        Authorization: 'Client-ID 2e48b6e1b70c9091ff05ed2433b786ed40188a65a7948f4f270780c6458b7d1f'
    },
    baseURL: "https://api.unsplash.com/"
});