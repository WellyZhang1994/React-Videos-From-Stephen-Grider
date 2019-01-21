import axios from 'axios';
const KEY = 'AIzaSyAEdYNOFV_vkDN9drkLY-BFY3t7q_nPViw';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});