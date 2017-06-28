var app = app || {};

(function() {
  app.Member = Backbone.Model.extend({
    toggleBoardIds: function(idsType, boardId) {
      var boardIds = this.get(idsType) || [];
      var updatedBoardIds = this.updatedBoardIds(boardIds, boardId);

      this.set(idsType, updatedBoardIds);
    },
    updatedBoardIds: function(boardIds, boardId) {
      if (boardIds.indexOf(boardId) >= 0) {
        return boardIds.filter(function(brdId) {
          return brdId !== boardId;
        });
      } else {
        return boardIds.concat(boardId);
      }
    },
    renderData: function() {
      var data = this.toJSON();
      if (app.board.get('adminMemberIds')) {
        data.admin = app.board.get('adminMemberIds').indexOf(data.id) >= 0;
      }
      return data;
    }
  });
})();