var app = app || {};

(function() {
  app.MoveListDropdownView = app.DropdownView.extend({
    id: "move-list",
    template: app.templates.moveListDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'change #board-titles': 'updateBoardPositions',
      'submit form': 'moveList',
    },
    render: function() {
      this.$el.html(this.template(this.renderInfo()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
    renderInfo: function() {
      return {
        boards: app.boards.toJSON(),
        lists: _.invoke(this.model.collection.unarchivedLists(), 'toJSON'),
        currentBoardId: app.board.get('id'),
        currentListId: this.model.get('id'),
        sameBoard: app.board.listIds().indexOf(this.model.get('id')) >= 0,
      };
    },
    updateBoardPositions: function(e) {
      var board = app.boards.get($(e.target).val());
      var lists = board.get('lists').toJSON();
      var sameBoard = board.listIds().indexOf(this.model.get('id')) >= 0;
      $("#board-positions").html(Handlebars.partials['moveListDropdownPositions']({ lists: lists, sameBoard: sameBoard }));
    },
    moveList: function(e) {
      e.preventDefault();
      
      var formData = $(e.target).serializeArray();
      if (formData[1].value === "current") return;
      
      app.boards.moveList({
        list: this.model,
        boardId: formData[0].value,
        targetListId: formData[1].value,
      });
      this.close();
    },
  });
})();