angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    selectVideo: '<'
  },
  controller: function() {
    this.handleClick = () => {
      this.selectVideo(this.video);
    };
  },

  templateUrl: "src/templates/videoListEntry.html"
});
