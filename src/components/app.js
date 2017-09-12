angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];

    this.selectVideo = (video) => {
      this.currentVideo = video;
    }
    this.fetchData = (data) => {
      this.videos = data;
      this.currentVideo = data[0];
    }
    this.searchResults = _.throttle((keyword = 'hey') => {
      youTube.search(keyword, this.fetchData);
    }, 1000);

    this.searchResults();
  },
  templateUrl: "src/templates/app.html"
});
