angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    setPlayerVideo: '<'
  },
  controller: function() {
    this.handleClick = () => {
      console.log('hey');
      this.setPlayerVideo(this.video);
    };
    // this.$onInit = function() {
    //   console.log(this.setPlayerVideo);
    // }
  },

  templateUrl: "src/templates/videoListEntry.html"
});
