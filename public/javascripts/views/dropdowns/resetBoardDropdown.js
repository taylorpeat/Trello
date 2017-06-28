var app = app || {};

(function() {
  app.ResetBoardDropdownView = app.DropdownView.extend({
    id: "reset-board-dropdown",
    template: app.templates.resetBoardDropdown,
    events: {
      'click .x-icon': 'close',
      'click .button': 'resetBoard',
    },
    resetBoard: function() {
      localStorage.clear();
      window.location.reload();
    },
  });
})();