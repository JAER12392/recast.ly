class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.setContext = this.setContext.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.throttledSearch = _.debounce(this.props.searchYouTube, 500);
    
    this.state = {
      current: null,
      all: [],
      query: 'soccer',
      max: 5
    };

    var options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: this.state.max
    };

    this.props.searchYouTube(options, this.setContext);

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
    });
  }
  
  onSearch(event, query) {
    event.preventDefault(); 
    this.throttledSearch({key: window.YOUTUBE_API_KEY, query: query, maxResults: 5}, this.setContext);
  }
  
  render() {
    return (
      <div>
        <Nav searchFunction={this.onSearch.bind(this)} />
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