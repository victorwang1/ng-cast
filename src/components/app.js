angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.video = this.videos[0];

    this.setPlayerVideo = (video) => {
      this.video = video;
    }
    this.fetchData = (data) => {
      this.videos = data;
      this.video = data[0];
    }
    youTube.getVideos('cats', this.fetchData);
  },
  templateUrl: "src/templates/app.html"
});
