var app = app || {};

(function() {
  app.ChecklistItems = Backbone.Collection.extend({
    model: app.ChecklistItem,
  });
})();