angular.module('video-player')
.component('search', {
  bindings: {
    searchResults: '<'
  },
  controller: function() {
    this.onSubmit = () => {
      this.searchResults(this.keyword);
    }
  },
  templateUrl: "src/templates/search.html"
});
