angular.module('video-player')
.service('youTube', function($http){
  this.search = function(q, callback) {
    $http({
    method: 'GET',
    params: {
      q: q,
      part: 'snippet',
      key: YOUTUBE_API_KEY,
      maxResults: '5',
      type: 'video',
      videoEmbeddable: 'true'
    },
    url: 'https://www.googleapis.com/youtube/v3/search'
    }).then(function successCallback(response) {
      var videos = response.data.items;
      var videoIDs = videos.map((video) => video.id.videoId)
                           .join(',');
/**********************************************************/

      var mapVideoViews = function(videos, views) {
        return videos.map(function(video, index) {
          video['views'] = views[index] || '';
          return video;
        });
      };

      (function(IDs, callback) {
       $http({
       method: 'GET',
       params: {
         id: IDs,
         part: 'statistics',
         key: YOUTUBE_API_KEY
       },
       url: 'https://www.googleapis.com/youtube/v3/videos'
      }).then(function successCallback(statObj) {
         var views = statObj.data.items.map((obj) => obj.statistics.viewCount);
         videos = mapVideoViews(videos, views);
         callback(videos);
       }, function errorCallback() {
         callback(mapVideoViews(videos, Array(5).fill('')));
         console.log('data fail', response);
       });
     })(videoIDs, callback);

/**********************************************************/

    }, function errorCallback(response) {
      console.log('data fail', response);
    });
  }
});
