var app = app || {};

(function() {
  app.Backgrounds = Backbone.Collection.extend({
    model: app.Background,
    initialize: function() {
      this.listenTo(this, 'change', this.triggerUpdateStorage);
    },
    triggerUpdateStorage: function() {
      this.trigger('updateStorage');
    },
  });
})();