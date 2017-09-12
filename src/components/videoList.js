angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    setPlayerVideo: '<'
  },
  templateUrl: "src/templates/videoList.html"
});
