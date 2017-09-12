angular.module('video-player')
.component('search', {
  bindings: {
    search: '<'
  },
  controller: function() {
    this.onSubmit = () => {
      console.log(this.keyword);
      this.search(this.keyword);
    }
  },
  templateUrl: "src/templates/search.html"
});
