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
    this.search = (keyword = 'cats') => {
      youTube.getVideos(keyword, this.fetchData);      
    }
    this.search();
  },
  templateUrl: "src/templates/app.html"
});
