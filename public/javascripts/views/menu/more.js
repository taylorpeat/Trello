var app = app || {};

(function() {
  app.MenuMoreView = app.ParentView.extend({
    id: 'menu-more',
    template: app.templates.menuMore,
    events: {
      'click > .x-icon': 'hideMenu',
      'click > .back-icon': 'goBack',
      'click .sub-icon': 'toggleSubscribed',
      'click .file-icon': 'menuArchived',
      'click .trello-icon': 'copyBoardDropdown',
      'click .no-icon': 'closeBoardDropdown',
    },
    initialize: function(options) {
      this.prevView = this.prevView || options.prevView;
      this.listenTo(app.member, 'change:subscribedBoardIds', this.render);
      this.render();
    },
    render: function() {
      this.$el.html(this.template(app.board.renderData()));
      $('.menu-sidebar').append(this.$el);
      this.delegateEvents();
      $('body').focus();
      this.$el.removeClass('main');
      this.$el.addClass('slide');
      this.$el.find('[type="text"]').select();
    },
    menuArchived: function(e) {
      this.$el.addClass('main');
      this.close();
      this.callDropdown('menuArchived', app.MenuArchivedView, e);
    },
    copyBoardDropdown: function(e) {
      this.callDropdown('copyBoardDropdown', app.CopyBoardDropdownView, e);
    },
    closeBoardDropdown: function(e) {
      this.callDropdown('closeBoardDropdown', app.CloseBoardDropdownView, e);
    },
    close: function() {
      this.$el.removeClass('main, slide');
      this.remove();
    },
    hideMenu: function() {
      $('body').removeClass('shifted');
    },
    goBack: function(e) {
      this.close();
      this.prevView.initialize({ model: this.model, coord: this.coord });
    },
    toggleSubscribed: function(e) {
      app.member.toggleBoardIds('subscribedBoardIds', this.model.get('id'));
    },
  });
})();