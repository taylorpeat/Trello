var app = app || {};

(function() {
  app.CreateBoardDropdownView = app.DropdownView.extend({
    id: "create-board-dropdown",
    template: app.templates.createBoardDropdown,
  });
})();

