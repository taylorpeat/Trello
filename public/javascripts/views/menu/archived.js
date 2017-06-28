var app = app || {};

(function() {
  app.MenuArchivedView = Backbone.View.extend({
    id: 'menu-archived',
    template: app.templates.menuArchived,
    searchResultsTemplate: Handlebars.partials['menuArchivedSearchResults'],
    events: {
      'click > .x-icon': 'hideMenu',
      'click > .back-icon': 'goBack',
      'keyup input': 'setFilter',
      'click .light-button': 'toggleContent',
      'mousedown .light-button': 'preventDefault',
    },
    initialize: function(options) {
      this.prevView = options.prevView;
      this.filter = "";
      this.bindFocus();
      this.render();
      this.createContentViews();
      this.listenTo(app.filter, 'change', this.renderSearchResults);
      this.listenTo(app.cards, 'change:archived', this.addOneCard);
      this.listenTo(app.board.get('lists'), 'archived', this.addOneList);
      this.listenTo(app.board, 'resetBoard', this.reset);
    },
    bindFocus: function() {
      $(window).one('transitionend.bindFocus', function() {
        this.$el.find('.dropdown-input').focus();
      }.bind(this));
    },
    render: function() {
      this.$el.html(this.template());
      $('.menu-sidebar').append(this.$el).removeClass('main');
      this.delegateEvents();
      this.renderContent();
      $('body').focus();
      this.$el.addClass('slide');
    },
    renderContent: function() {
      this.clearContent();
      this.listsActive ? this.renderLists() : this.renderCards();
    },
    renderCards: function() {
      var cards = this.filteredCards();
      for (card of cards) {
        card.trigger('render');
      }
    },
    renderLists: function() {
      var lists = this.filteredLists();
      for (list of lists) {
        list.trigger('render');
      }
    },
    createContentViews: function() {
      if (this.created) return;
      for (card of this.filteredCards()) {
        new app.ArchivedCardView({ model: card });
      }
      for (list of this.filteredLists()) {
        new app.ArchivedListView({ model: list });
      }
      this.created = true;
    },
    addOneCard: function(card) {
      if (!card.get('archived')) return;
      new app.ArchivedCardView({ model: card });
      this.render();
    },
    addOneList: function(list) {
      new app.ArchivedListView({ model: list });
      this.render();
    },
    filteredCards: function() {
      return app.cards.where({ archived: true }).filter(this.contentFilter.bind(this));
    },
    filteredLists: function() {
      return app.board.get('lists').where({ archived: true }).filter(this.contentFilter.bind(this));
    },
    contentFilter: function(item) {
      var listId = item.get('listId');
      if (!listId) listId = item.get('id');
      return app.board.listIds().indexOf(listId) >= 0 &&
             item.get('title').search(this.filter) >= 0 ||
             item.get('description') && item.get('description').search(this.filter) >= 0;
    },
    setFilter: function(e) {
      var filterStr = this.$el.find('.dropdown-input').val();
      this.filter = filterStr;
      this.updateFilterResultsMessage();
      this.renderContent();
    },
    clearContent: function() {
      this.$el.find('.archived-content-list').empty();
    },
    updateFilterResultsMessage: function() {
      if (this.filter) {
        this.$el.find('.menu-contents > div').text('No results');
      } else if (this.listsActive) {
        this.$el.find('.menu-contents > div').text('No archived lists');
      } else {
        this.$el.find('.menu-contents > div').text('No archived cards');
      }
    },
    toggleContent: function() {
      this.listsActive = !this.listsActive;
      this.updateFilterResultsMessage();
      this.$el.toggleClass('lists-active');
      this.renderContent();
    },
    close: function() {
      this.filter = '';
      this.listsActive = false;
      this.$el.removeClass('lists-active');
      this.$el.removeClass('main slide');
      this.remove();
    },
    hideMenu: function() {
      $('body').removeClass('shifted');
    },
    goBack: function(e) {
      this.close();
      this.prevView.initialize({ model: this.model, coord: this.coord });
    },
    preventDefault: function(e) {
      e.preventDefault();
    },
  });
})();