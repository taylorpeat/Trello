var app = app || {};

(function() {
  app.CardView = app.ParentView.extend({
    className: "card-background",
    template: Handlebars.partials['card'],
    coverImageTemplate: Handlebars.partials['coverImage'],
    events: {
      'mousedown .card': 'grabCard',
      'click .edit-toggle': 'quickEdit',
      'click .card': 'openModal',
    },
    initialize: function(options) {
      this.render();
      this.listenTo(this.model, 'render', this.render);
      this.listenTo(this.model, 'change', this.renderInPlace);
      this.listenTo(this.model, 'removeView', this.remove);
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model.get('attachments'), 'coverChange', this.renderCover);
      this.listenTo(this.model.get('attachments'), 'remove', this.checkIfAttachmentsEmpty);
      this.listenTo(this.model.collection, "dragActive", this.dropZoneActive);
      this.listenTo(this.model.collection, "dragInactive", this.dropZoneInactive);
      this.listenTo(this.model.collection, "removeViews", this.remove);
    },
    render: function() {
      if (!app.filter.checkCard(this.model)) return;
      this.$el.html(this.template(this.model.renderData()));
      this.container().append(this.$el);
      this.delegateEvents();
    },
    renderInPlace: function() {
        var listId = this.model.get('listId');
        var list = app.board.get('lists').get(listId);
        if (!list) {
          this.remove();
          return;
        }
        this.$el.html(this.template(this.model.renderData()));
    },
    renderCover: function() {
      this.$el.find('.cover-image').html(this.coverImageTemplate(this.model.renderData()));
    },
    container: function() {
      return $("[data-id='list-" + this.model.get("listId") + "-cards']");
    },
    checkIfAttachmentsEmpty: function() {
      if (this.model.get('attachments') && this.model.get('attachments').length === 0) {
        this.renderInPlace();
      }
    },
    quickEdit: function(e) {
      e.target = this.el;
      this.callDropdown('quickEditView', app.QuickEditView, e);
    },
    openModal: function(e) {
      if (app.quickEditView && $(document).find(app.quickEditView.$el).length) return;
      this.callDropdown('cardModalView', app.CardModalView, e);
      app.router.navigateToCard(this.model);
    },
    setCoordinates: function(e) {
      this.coord = { top: $(e.target).offset().top, left: $(e.target).offset().left };
    },
  });

  _.extend(app.CardView.prototype, cardDragAndDrop);
})(); 