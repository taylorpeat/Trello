var app = app || {};

(function() {
  var Boards = Backbone.Collection.extend({
    model: app.Board,
    localStorageKey: 'trelloBoards',
    initialize: function() {
      localStorage[this.localStorageKey] ? this.readStorage() : this.setDefault();
      this.listenTo(this, 'change', this.updateStorage);
      this.listenTo(this, 'updateStorage', this.updateStorage);
    },
    setDefault: function() {
      this.reset(seedBoards, {parse: true});
    },
    moveList: function(data) {
      (app.board.get('id') !== data.boardId) ? this.moveListNewBoard(data) : this.moveListSameBoard(data);
    },
    moveListNewBoard: function(data) {
      var targetLists = app.boards.get(data.boardId).get('lists');
      var targetList = targetLists.get(data.targetListId);
      var targetIndex = targetLists.indexOf(targetList);
      if (!targetIndex) targetIndex = targetLists.length + '';

      targetLists.trigger('listMoved', { movingList: data.list, targetIndex: targetIndex });
      app.board.get('lists').trigger('listMoved', { movingList: data.list });
      data.list.trigger('removeView');
    },
    moveListSameBoard: function(data) {
      var targetList = app.board.get('lists').get(data.targetListId);
      var targetIndex = app.board.get('lists').indexOf(targetList);

      app.board.get('lists').trigger('listMoved', { movingList: data.list, targetIndex: targetIndex });
    },
    renderData: function(boardIds) {
      var boardsRenderData = [];
      this.each(function(board) {
        if (!boardIds || boardIds.indexOf(board.get('id')) >= 0) boardsRenderData.push(board.renderData());
      });
      return boardsRenderData;
    },
  });

  app.boards = new Boards();

})();