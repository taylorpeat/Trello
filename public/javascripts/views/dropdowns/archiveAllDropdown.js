var app = app || {};

(function() {
  app.ArchiveAllDropdownView = app.DropdownView.extend({
    id: "archive-all",
    template: app.templates.archiveAllDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .button': 'archiveAll',
      'click .x-icon': 'close',
    },
    archiveAll: function() {
      app.cards.archiveAll(this.model.get("id"));
      this.close();
    },
  });
})();

