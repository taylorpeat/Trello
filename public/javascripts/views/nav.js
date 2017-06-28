var app = app || {};

(function() {

  app.NavView = app.ParentView.extend({
    tagName: "nav",
    template: app.templates.nav,
    model: app.member,
    events: {
      'click .search-container:not(.active)': 'searchActive',
      'click .active-search .x-icon': 'searchInactive',
      'click .boards': 'boardsDropdown',
      'click .create-icon': 'createBoardDropdown',
      'click .split-button-1, .split-button-2': 'profileDropdown',
      'click .info-icon': 'infoDropdown',
      'click .notifications-icon': 'notificationsDropdown',
      'click .send-icon': 'resetBoardDropdown',
    },
    initialize: function() {
      this.render();
      this.listenTo(this.model, "change", this.render());
      this.delegateEvents();
    },
    render: function() {
      $("body").prepend(this.$el.html(this.template(app.member.toJSON())));
    },
    renderInPlace: function() {
      this.$el.html(this.template(app.member.toJSON()));
    },
    boardsDropdown: function(e) {
      this.callDropdown('boardsDropdown', app.BoardsDropdownView, e);
    },
    createBoardDropdown: function(e) {
      this.callDropdown('createBoardDropdown', app.CreateBoardDropdownView, e);
    },
    profileDropdown: function(e) {
      this.callDropdown('profileDropdown', app.ProfileDropdownView, e);
    },
    infoDropdown: function(e) {
      this.callDropdown('infoDropdown', app.InfoDropdownView, e);
    },
    notificationsDropdown: function(e) {
      this.callDropdown('notificationsDropdown', app.NotificationsDropdownView, e);
    },
    resetBoardDropdown: function(e) {
      this.callDropdown('resetBoardDropdown', app.ResetBoardDropdownView, e);
    },
    searchActive: function(e) {
      this.$el.find('.search-container').addClass('active').find('[type="text"]').focus();
      this.callDropdown('searchDropdown', app.SearchDropdownView, e);
    },
    searchInactive: function() {
      app.searchDropdown.close();
    },
  });

  // app.navView = new NavView();

})();