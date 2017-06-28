var app = app || {};

(function() {
  app.Background = Backbone.Model.extend({
    renderData: function() {
      return this.toJSON();
    },
  });
})();