class App extends React.Component {
  constructor({searchYouTube}) {
    super();
    this.setContext = this.setContext.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
    window.searchYouTube = window.searchYouTube.bind(this);


    
    this.state = {
      current: window.exampleVideoData[0],
      all: window.exampleVideoData,
      query: 'nature is neat',
      maxResults: 10
    };

    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'nature is neat',
      maxResults: 10
    };

    window.searchYouTube(options, this.setContext);

  }

  onVideoClick(video) {
    this.setState({
      current: video
    });
  }

  setContext(results) {
    this.setState({
      current: results[0],
      all: results
    })
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler={this.onVideoClick} videos={this.state.all}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;