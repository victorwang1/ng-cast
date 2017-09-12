angular.module('video-player')
.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = this.videos[0];

    this.setPlayerVideo = (video) => {
      this.video = video;
    }
  },
  templateUrl: "src/templates/app.html"
});
