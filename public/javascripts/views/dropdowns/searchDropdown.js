var app = app || {};

(function() {
  app.SearchDropdownView = app.DropdownView.extend({
    id: "search-dropdown",
    template: app.templates.searchDropdown,
    events: {
      'click .x-icon': 'close',
    },
    bindCloseEvent: function() {
      this.altEl = $('.search-container');
      app.windowManager.addToCloseArray(this);
    },
    close: function() {
      this.remove();
      $('nav .search-container.active').removeClass('active');
    },
  });
})();