var app = app || {};

(function() {
  app.MenuMainView = app.ParentView.extend({
    id: 'menu-main',
    template: app.templates.menuMain,
    events: {
      'click > .x-icon': 'hideMenu',
      'click .add-members': 'membersDropdown',
      'click .background-item': 'menuBackgrounds',
      'click .more-icon': 'menuMore',
      'click .filter-icon': 'menuFilter',
    },
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$el.html(this.template({ members: app.members.renderData() }));
      $('.menu-sidebar').append(this.$el);
      this.delegateEvents();
      $('body').focus();
      this.$el.addClass('main');
      this.$el.addClass('slide');
    },
    menuBackgrounds: function(e) {
      this.close();
      this.callDropdown('menuBackgrounds', app.MenuBackgroundsView, e)
    },
    menuMore: function(e)  {
      this.close();
      this.callDropdown('menuMore', app.MenuMoreView, e);
    },
    menuFilter: function(e)  {
      this.close();
      this.callDropdown('menuFilter', app.MenuFilterView, e);
    },
    membersDropdown: function(e) {
      this.callDropdown('boardMembersDropdown', app.BoardMembersDropdownView, e);
    },
    close: function() {
      this.$el.removeClass('main, slide');
      this.remove();
    },
    hideMenu: function() {
      $('body').removeClass('shifted');
    },
  });
})();