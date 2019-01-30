This project is implemented sample code from React Tutorial by Stephen-Grider in Udemy
[https://www.udemy.com/react-redux/learn/v4/content]

### Component
  - App.js
  - SearchBar.js
  - VideoList.js
  - VideoItem.js
  - VideoDetail.js  

#### App.js

 - Youtube API in React,
 - youtube snippets [https://developers.google.com/youtube/v3/code_samples/code_snippets]
 - api url : https://www.googleapis.com/youtube/v3
 
```sh
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
```

When first time load index page, automated send a 'buildings' word to youtube api
 - using componentDidMount() lifecycle to get default videos

get response from youtube and setState to store results
 
 ```sh
onSearchSubmit = async (term) =>{
    const response = await unsplash.get('/search/photos',{
        params:{ query: term} 
    });
    this.setState({ images: response.data.results});
}
```

#### Grid System from Semantic UI

- CDN [https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css]
- Web Site [https://semantic-ui.com/]
- Grid System [https://semantic-ui.com/collections/grid.html]

```sh
<div className="ui grid">
    <div className="ui row">
        <div className="eleven wide column">
        </div>
        <div className="five wide column">
        </div>
    </div>
</div>

```

#### Props in parent and children

- In App.js 
```sh
 <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
```
- In VideoList.js 

```sh
const VideoList = (props) => {
    const renderedList = props.videos.map( (video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={props.onVideoSelect} video={video} />;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
}
```

In addition to change selectedVideo state, using onClick() to call onVideoSelect() method.



