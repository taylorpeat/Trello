var app = app || {};

(function() {
  app.ChecklistItem = Backbone.Model.extend({
    initialize: function() {
      this.listenTo(this, 'change:completed', this.notifyProgress);
    },
    notifyProgress: function() {
      this.collection.trigger('progressUpdate');
    },
  });
})();