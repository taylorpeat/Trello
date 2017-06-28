var app = app || {};

(function() {
  app.ArchivedCardView = app.ParentView.extend({
    tagName: 'li',
    template: app.templates.archivedCard,
    coverImageTemplate: Handlebars.partials['coverImage'],
    events: {
      'click .card': 'openModal',
      'click span:first-of-type': 'unarchive',
      'click span:last-of-type': 'delete',
    },
    initialize: function(options) {
      this.render();
      this.listenTo(this.model, 'render', this.render);
      this.listenTo(this.model, 'change', this.renderInPlace);
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'removeArchView', this.remove);
      this.listenTo(this.model.get('attachments'), 'coverChange', this.renderCover);
      this.listenTo(this.model.get('attachments'), 'remove', this.checkIfAttachmentsEmpty);
      this.listenTo(this.model.collection, 'removeViews', this.remove);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $('.archived-content-list').append(this.$el);
      this.delegateEvents();
    },
    renderInPlace: function() {
      if (!this.model.get('archived') && app.board.listIds().indexOf(this.model.get('id')) >= 0) {
        this.remove();
        return;
      }
      this.$el.html(this.template(this.model.renderData()));
    },
    renderCover: function() {
      this.$el.find('.cover-image').html(this.coverImageTemplate(this.model.renderData()));
    },
    checkIfAttachmentsEmpty: function() {
      if (this.model.get('attachments') && this.model.get('attachments').length === 0) {
        this.renderInPlace();
      }
    },
    unarchive: function() {
      this.model.unarchive();
    },
    delete: function(e) {
      this.callDropdown("deleteCardDropdownView", app.DeleteCardDropdownView, e);      
    },
    openModal: function(e) {
      if (app.quickEditView && $(document).find(app.quickEditView.$el).length) return;
      this.callDropdown('cardModalView', app.CardModalView, e);
    },
  });

})(); 