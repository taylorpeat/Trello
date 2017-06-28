var app = app || {};

(function() {
  app.router = new (Backbone.Router.extend({
    initialize: function() {
      this.listenTo(app.filter, 'change', this.updateFilterParams);
      this.filterParams = '';
    },
    routes: {
      [app.baseURL]: 'defaultBoard',
      [app.baseURL + 'board/:boardId(?:query)']: 'openBoard',
      [app.baseURL + 'board/:boardId/card/:cardId(?:query)']: 'openBoardWithModal',
    },
    defaultBoard: function() {
      if (app.board) return;
      var boardId = app.boards.models[0].get('id');
      this.navigate(app.baseURL + 'board/' + boardId, { trigger: true, replace: true });
    },
    openBoard: function(boardId, query) {
      if (app.board) {
        if (app.cardModalView.visible()) app.cardModalView.hide();
        this.updateFilterParams();
        return;
      }

      app.board = app.boards.get(boardId);
      app.navView = new app.NavView();
      app.headerView = new app.HeaderView({ model: app.board });
      app.listsView = new app.ListsView({ collection: app.board.get("lists") });
      app.mainMenuView = new app.MenuMainView({ model: app.board });
      this.updateRecentBoards();
      this.checkQuery(query);
    },
    checkQuery: function(query) {
      if (query) {
        app.filter.parseQuery(query);
        app.headerView.showMenu();
        app.mainMenuView.menuFilter();
      }
    },
    openBoardWithModal: function(boardId, cardId, query) {
      (app.board) ? this.openExistBoardModal(cardId) : this.openNewBoardModal(boardId, cardId, query);
    },
    openExistBoardModal: function(cardId) {
      if (!app.cards.get(cardId)) {
        this.backToBoard();
        return;
      }
      if (app.cardModalView) {
        app.cardModalView.initialize({ model: app.cards.get(cardId) });
      } else {
        app.cardModalView = new app.CardModalView({ model: app.cards.get(cardId) });
      }
      this.updateFilterParams();
    },
    openNewBoardModal: function(boardId, cardId, query) {
      this.openBoard(boardId, query);
      if (!app.cards.get(cardId)) {
        this.backToBoard();
        return;
      }
      app.cardModalView = new app.CardModalView({ model: app.cards.get(cardId) });
    },
    updateRecentBoards: function() {
      var recentBoardIds = app.member.get('recentBoardIds') || [];
      var boardId = app.board.get('id');
      if (recentBoardIds.indexOf(boardId) >= 0) return;
      app.member.set('recentBoardIds', recentBoardIds.concat(boardId));
    },
    navigateToCard: function(card) {
      var cardURL = window.location.pathname + '/card/' + card.get('id') + this.filterParams;
      this.navigate(cardURL);
    },
    backToBoard: function() {
      var boardURL = window.location.pathname.slice().replace(/\/card\/\d+/, '') + this.filterParams;
      this.navigate(boardURL);
    },
    updateFilterParams: function() {
      this.filterParams = app.filter.paramString();
      var pathname = window.location.pathname.slice().replace(/\?*/, '') + this.filterParams;
      this.navigate(pathname, { replace: true });
    },

  }))();

  Backbone.history.start({
    pushState: true,
  });

})();