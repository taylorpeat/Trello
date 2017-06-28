var app = app || {};

(function() {
  app.Lists = Backbone.Collection.extend({
    model: app.List,
    comparator: 'listOrder',
    initialize: function() {
      this.listenTo(this, "listMoved", this.updateOrder);
      this.listenTo(app.filter, "change", this.renderAll);
      this.listenTo(this, 'change reordered update', this.triggerUpdateStorage);
    },
    triggerUpdateStorage: function() {
      this.trigger('updateStorage');
    },
    updateOrder: function(data) {
      var currentIndex = this.indexOf(data.movingList);
      if (currentIndex >= 0) this.remove(data.movingList, { silent: true });
      if (data.targetIndex !== undefined) this.add(data.movingList, { at: data.targetIndex, silent: true });
      this.reorder();
    },
    renderAll: function() {
      this.each(function(list) {
        if (!list.get("archived")) {
          list.trigger("render");
        }
      });
    },
    reorder: function() {
      this.trigger("reordered");
      this.renderAll();
    },
    unarchivedLists: function() {
      return this.filter(function(list) {
        return !list.get('archived');
      });
    },
  });
})();