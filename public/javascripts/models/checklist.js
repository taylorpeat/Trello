var app = app || {};

(function() {
  app.Checklist = Backbone.Model.extend({
    parse: function(response) {
      response.checklistItems = this.convertToBackboneCollection(response.checklistItems, app.ChecklistItems);
      return response;
    },
    initialize: function() {
      this.listenTo(this.get('checklistItems'), 'change', this.triggerChange);
      this.listenTo(this.get('checklistItems'), 'update', this.triggerChange);
    },
    triggerChange: function() {
      this.trigger('change');
    },
    convertToBackboneCollection: function(collection, collectionTemplate) {
      if (collection) {
        collection = new collectionTemplate(collection, {parse: true});
      }
      return collection;
    },
    toJSON: function() {
      return {
        title: this.get('title'),
        checklistItems: this.get('checklistItems').toJSON(),
      }
    },
  });
})();