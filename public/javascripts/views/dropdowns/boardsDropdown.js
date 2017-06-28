var app = app || {};

(function() {
  app.BoardsDropdownView = app.DropdownView.extend({
    id: "boards-dropdown",
    template: app.templates.boardsDropdown,
    events: {
      'click .x-icon': 'toggleRecent',
      'click .plus-icon': 'toggleCollapse',
      'click .dash-icon': 'toggleCollapse',
      'click .star-icon.icon': 'toggleStarred',
      'click dd': 'switchBoards',
    },
    render: function() {
      this.$el.html(this.template({
                                  starredBoards: app.boards.renderData(app.member.get('starredBoardIds') || []),
                                  recentBoards: app.boards.renderData(app.member.get('recentBoardIds') || []),
                                  personalBoards: app.boards.renderData(),
                                  member: app.member.toJSON(),
                                  starredHidden: this.starredHidden,
                                  recentHidden: this.recentHidden,
                                  personalHidden: this.personalHidden,
                                }));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
      this.$el.find('[type="text"]').select();
    },
    toggleCollapse: function(e) {
      var type = $(e.target).closest('dt').data('board-type');
      this[type + 'Hidden'] = !this[type + 'Hidden'];
      $(e.target).closest('dt').toggleClass('collapsed');
    },
    toggleStarred: function(e) {
      e.preventDefault();

      var boardId = $(e.target).closest('dd').data('id') + "";
      this.model.toggleBoardIds('starredBoardIds', boardId);
      this.render();
    },
    toggleRecent: function(e) {
      e.preventDefault();

      var boardId = $(e.target).closest('dd').data('id') + "";
      this.model.toggleBoardIds('recentBoardIds', boardId);
      this.render();
    },
    switchBoards: function(e) {
      var boardId = $(e.target).closest('dd').data('id') + "";
      if (e.isDefaultPrevented() || boardId === app.board.get('id')) return;
      window.location.replace('/' + app.baseURL + 'board/' + boardId);
    },
  });
})();
