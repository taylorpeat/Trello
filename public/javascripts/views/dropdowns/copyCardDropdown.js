var app = app || {};

(function() {
  app.CopyCardDropdownView = app.DropdownView.extend({
    id: "copy-card",
    template: app.templates.copyCardDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'change #board-title': 'updateListOptions',
      'change #list-title-select': 'updateCardPositionsManual',
      'submit form': 'copyCard',
    },
    render: function() {
      this.$el.html(this.template(this.renderInfo()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.bindCloseEvent.bind(this)();
      this.delegateEvents();
    },
    renderInfo: function() {
      return {
        boards: app.boards.toJSON(),
        lists: _.invoke(app.board.get('lists').unarchivedLists(), 'toJSON'),
        cards: _.invoke(this.model.collection.where({ listId: this.model.get('listId') }), 'toJSON'),
        currentBoardId: app.board.get('id'),
        currentListId: this.model.get('listId'),
        currentCardId: this.model.get('id'),
        currentCard: this.model.toJSON(),
        notCurrentList: true,
      };
    },
    updateListOptions: function(e) {
      var boardId = $(e.target).val();
      var lists = app.boards.get(boardId).get('lists');
      if (!Array.isArray(lists)) lists = lists.toJSON();
      var currentListId = this.model.get('listId');
      $("#list-title-select").html(Handlebars.partials['dropdownLists']({ lists: lists, currentListId: currentListId }));
      this.updateCardPositionsAuto(lists);
    },
    updateCardPositionsAuto: function(lists) {
      var listId;
      if (!_.findWhere(lists, { id: this.model.get('listId') })) {
        listId = lists[0].id;
      } else {
        listId = this.model.get('listId');
      }
      this.updateCardPositions(listId);
    },
    updateCardPositionsManual: function(e) {
      var listId = $(e.target).val();
      this.updateCardPositions(listId);
    },
    updateCardPositions: function(listId) {
      var cards = app.cards.where({ listId: listId });
      $("#card-positions").html(Handlebars.partials['dropdownCardPositions']({ cards: cards, notCurrentList: true }));
    },
    copyCard: function(e) {
      e.preventDefault();
      
      var formData = {}
      
      $(e.target).serializeArray().forEach(function(item) {
        formData[item.name] = item.value;
      });

      app.cards.copyCardFromForm(formData, this.model.toJSON());

      this.close();
      if (app.quickEditView) app.quickEditView.close();
    },
  });
})();