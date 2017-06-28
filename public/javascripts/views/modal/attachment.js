var app = app || {};

(function() {
  app.AttachmentView = Backbone.View.extend({
    tagName: "li",
    template: app.templates.attachment,
    events: {
      'click .x-icon': 'deleteAttachment',
      'click .cover-icon': 'toggleCover',
    },
    initialize: function(options) {
      this.parentView = options.parentView;
      this.render();
      this.listenTo(this.model, 'change:cover', this.render)
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      return this;
    },
    deleteAttachment: function() {
      if (this.model.get('cover')) this.model.collection.changeCover(this.model);
      this.model.collection.remove(this.model);
      this.remove();
    },
    toggleCover: function() {
      this.model.collection.changeCover(this.model);
    },
    close: function() {
      this.remove();
    },
  });
})();