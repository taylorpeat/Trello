var app = app || {};

(function() {
  app.CommentsSectionView = Backbone.View.extend({
    tagName: 'li',
    className: 'comment-section',
    template: app.templates.commentsSection,
    initialize: function() {
      
    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    close: function() {
      this.remove();
    },
  });
})();