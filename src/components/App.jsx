// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: window.exampleVideoData[0],
      all: window.exampleVideoData
    };
  }

  onVideoClick(video) {
    this.setState({
      current: video
    });
  }
  
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.current} />
        </div>
        <div className="col-md-5">
          <VideoList clickHandler={this.onVideoClick.bind(this)} videos={this.state.all}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;