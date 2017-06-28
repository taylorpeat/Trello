var app = app || {};

(function() {
  app.CloseBoardDropdownView = app.DropdownView.extend({
    id: "close-board-dropdown",
    template: app.templates.closeBoardDropdown,
    events: {
      'click .x-icon': 'close',
    },
  });
})();