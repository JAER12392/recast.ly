var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video'
    },
    success: data => {
      callback(data.items);
    },
    error: data => {
      console.error(data);
    }
  });
};

window.searchYouTube = searchYouTube;
