angular.module('video-player')
.service('youTube', function($http){
  this.getVideos = function(q = "dogs", callback) {
    $http({
    method: 'GET',
    params: {
      q: 'dogs',
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      maxResults: '5',
      type: 'video',
      videoEmbeddable: 'true'
    },
    url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function successCallback(response) {
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log('data fail', response);
    });
  }
});
