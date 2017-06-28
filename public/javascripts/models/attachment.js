var app = app || {};

(function() {
  app.Attachment = Backbone.Model.extend({
    parse: function(response) {
      response.date = new Date(response.date);
      return response;
    },
    render: function() {
      this.trigger('render');
    },
  });
})();