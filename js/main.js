(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  windows.temolate = function(id) {
    return _.template($('#' + id).html());
  };
});
