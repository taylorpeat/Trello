var app = app || {};

(function() {
  app.ArchivedListView = Backbone.View.extend({
    tagName: 'li',
    className: 'arch-list',
    template: app.templates.archivedList,
    events: {
      'click .send-back': 'unarchive',
    },
    initialize: function(options) {
      this.listenTo(this.model, 'render', this.render);
      this.listenTo(this.model.collection, "removeViews", this.remove);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $('.archived-content-list').append(this.$el);
      this.delegateEvents();
    },
    unarchive: function() {
      this.remove();
      this.model.unarchive();
    },
  });
})(); 