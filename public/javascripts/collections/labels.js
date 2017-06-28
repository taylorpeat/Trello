var app = app || {};

(function() {
  var Labels = Backbone.Collection.extend({
    model: app.Label,
    localStorageKey: 'trelloLabels',
    initialize: function() {
      this.setDefault();
      this.listenTo(this, 'change', this.updateStorage);
    },
    setDefault: function() {
      this.set(seedLabels);
    },
  });

  app.labels = new Labels();
  
})();