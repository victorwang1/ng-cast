angular.module('video-player')
.component('search', {
  bindings: {
    search: '<'
  },
  controller: function() {
    this.onSubmit = () => {
      this.search(this.keyword);
    }
  },
  templateUrl: "src/templates/search.html"
});
