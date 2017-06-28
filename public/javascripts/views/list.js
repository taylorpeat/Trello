var app = app || {};

(function() {
  app.ListView = app.ParentView.extend({
    className: "list-wrapper",
    template: app.templates.list,
    events: {
      'click .list-title': 'focus',
      'blur .list-title': 'updateTitle',
      'click .more-icon': 'listActionsDropdown',
      'click .add-options': 'addOptionsDropdown',
      'click .add-card-toggle': 'showAddCard',
      'mousedown .list': 'grabList',
    },
    initialize: function() {
      this.render();
      this.createCardViews();
      this.listenTo(this.model, "render", this.render);
      this.listenTo(this.model, "renderInPlace", this.renderInPlace);
      this.listenTo(this.model, "showAddCard", this.showAddCard);
      this.listenTo(this.model, "archived removeView", this.remove);
      this.listenTo(this.model, "openAddCardDropdown", this.openAddCardDropdown);
      this.listenTo(app.cards, "add", this.createNewCard);
      this.listenTo(app.cards, "dragActive", this.cardDropZoneActive);
      this.listenTo(app.cards, "dragInactive", this.cardDropZoneInactive);
      this.listenTo(this.model.collection, "dragActive", this.listDropZoneActive);
      this.listenTo(this.model.collection, "dragInactive", this.listDropZoneInactive);
      this.listenTo(this.model.collection, "removeViews", this.remove);
    },
    listCards: function() {
      return app.cards.filter(function(card) {
        return card.get("listId") === this.model.get("id") &&
               card.get("archived") !== true;
      }.bind(this));
    },
    render: function() {
      this.renderInPlace();
      $("#existing-lists").append(this.$el);
    },
    renderInPlace: function() {
      this.renderList();
      this.renderCards();
      this.delegateEvents();
    },
    renderList: function() {
      this.$el.html(this.template({ list: this.model.renderData(), tempCard: app.tempCard.renderData() }));
    },
    renderCards: function() {
      var cards = this.listCards();
      for (card of cards) {
        card.trigger("render");
      }
    },
    createCardViews: function() {
      var cards = this.listCards();
      this.$el.find("#card-container").empty();
      for (card of cards) {
        this.addOne(card);
      }
    },
    addOne: function(card) {
      new app.CardView({ model: card });
    },
    createNewCard: function(card) {
      if (card.get("listId") !== this.model.get("id")) { return; }
      this.addOne(card);
      this.renderCards();
    },
    focus: function(e) {
      $(e.target).focus();
    },
    updateTitle: function() {
      var newTitle = this.$el.find(".list-title").val();
      if ( newTitle != this.model.get("title") ) {
        this.model.set("title", newTitle);
      }
    },
    listActionsDropdown: function(e) {
      this.callDropdown('listActionsDropdownView', app.ListActionsDropdownView, e);
    },
    addOptionsDropdown: function(e) {
      e.target = $(e.target).closest('.add-options')[0];
      this.callDropdown('addOptionsDropdownView', app.AddOptionsDropdownView, e, { model: app.tempCard, prevView: undefined });
    },
    showAddCard: function(e) {
      app.tempCard.updateFromDropdown({ listId: this.model.get('id'), position: $(e.target).attr('data-position') });
    },
    openAddCardDropdown: function() {
      this.$el.addClass('add-dropdown-active');
      if (app.tempCard.get("listSlot") === 1) {
        this.$el.find('.add-top').addClass('active-card');
      } else {
        this.$el.find('.add-bottom').addClass('active-card');
      }
    },
  });
  
  _.extend(app.ListView.prototype, listDragAndDrop);
})();