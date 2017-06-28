var app = app || {};

(function() {
  app.AttachmentsSectionView = Backbone.View.extend({
    tagName: 'li',
    className: 'attachment-section',
    template: app.templates.attachmentsSection,
    events: {

    },
    initialize: function() {
      this.subViews = [];
      this.createSetOfSubViews('attachments', app.AttachmentView);
      this.listenTo(this.model.get('attachments'), 'remove', this.checkIfAttachmentsEmpty);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      this.subViews.forEach(this.renderSubView.bind(this));
      return this;
    },
    createSetOfSubViews: function(modelName, subViewTemplate) {
      var subViewCollection = this.model.get(modelName);
      if (!subViewCollection) return;
      subViewCollection.each(function(subViewModel) {
        var newSubView = new subViewTemplate({ model: subViewModel });
        this.subViews.push(newSubView);
      }, this);
    },
    renderSubView: function(subView) {
      this.$el.find('.attachment-list').append(subView.render().el);
    },
    checkIfAttachmentsEmpty: function() {
      if (this.model.get('attachments') && this.model.get('attachments').length === 0) {
        this.$el.html('');
      }
    },
    close: function(e) {
      this.subViews.forEach(function(subView) {
        subView.close();
      });
      this.remove();
    },
  });
})();