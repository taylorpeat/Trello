var app = app || {};

(function() {
  app.MoveCardDropdownView = app.DropdownView.extend({
    id: "move-card",
    template: app.templates.moveCardDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'change #board-title': 'updateListOptions',
      'change #list-title-select': 'updateCardPositionsManual',
      'submit form': 'moveCard',
    },
    render: function() {
      this.$el.html(this.template(this.renderInfo()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
    renderInfo: function() {
      var unfilteredCards = this.model.collection.where({ listId: this.model.get('listId') }).filter(this.filterUnarchived);
      return {
        boards: app.boards.toJSON(),
        lists: _.invoke(app.board.get('lists').unarchivedLists(), 'toJSON'),
        cards: _.invoke(unfilteredCards, 'toJSON'),
        currentBoardId: app.board.get('id'),
        currentListId: this.model.get('listId'),
        currentCard: this.model.get('id'),
      };
    },
    filterUnarchived: function(card) {
      return !card.get('archived');
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
      var cards = app.cards.where({ listId: listId }).filter(this.filterUnarchived);
      var notCurrentList = $('#list-title-select').val() !== this.model.get('listId');
      $("#card-positions").html(Handlebars.partials['dropdownCardPositions']({ cards: cards, notCurrentList: notCurrentList }));
    },
    moveCard: function(e) {
      e.preventDefault();
      
      var formData = $(e.target).serializeArray();
      var targetBoardId = formData[0].value;
      var targetListId = formData[1].value;
      var targetCardId = formData[2].value;
      var moveInfo = { dragCard: this.model };

      if (targetCardId === "") {
        return;
      } else if (targetCardId === "last-slot") {
        moveInfo['newListId'] = formData[1].value;
      } else {
        moveInfo['targetCard'] = app.cards.get(targetCardId);
      }
      
      app.cards.trigger('cardMoved', moveInfo);

      this.close();
      if (app.quickEditView) app.quickEditView.close();
    },
  });
})();