var app = app || {};

(function() {
  app.Attachments = Backbone.Collection.extend({
    model: app.Attachment,
    render: function() {
      this.each(function(attachment) {
        attachment.render()
      });
    },
    changeCover: function(model) {
      if (!model.get('cover')) {
        this.where({ cover: true }).forEach(function(prevCoverModel) {
          prevCoverModel.set('cover', false);
        });
      }
      model.set('cover', !model.get('cover'));
      this.trigger('coverChange');
    },
  });
})();