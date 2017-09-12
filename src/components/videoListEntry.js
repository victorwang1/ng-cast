angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    setPlayerVideo: '<'
  },
  controller: function() {
    this.handleClick = () => {
      this.setPlayerVideo(this.video);
    };
  },

  templateUrl: "src/templates/videoListEntry.html"
});
