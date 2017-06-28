var app = app || {};

(function() {
  app.AttachmentView = Backbone.View.extend({
    tagName: "li",
    template: app.templates.activity,
    initialize: function(options) {
      this.parentView = options.parentView;
      this.render();
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      return this;
    },
    close: function() {
      this.remove();
    },
  });
})();