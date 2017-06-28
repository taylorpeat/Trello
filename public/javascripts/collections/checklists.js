var app = app || {};

(function() {
  app.Checklists = Backbone.Collection.extend({
    model: app.Checklist,
  });
})();