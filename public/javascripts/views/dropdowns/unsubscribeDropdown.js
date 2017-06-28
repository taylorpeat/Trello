var app = app || {};

(function() {
  app.UnsubscribeDropdownView = app.DropdownView.extend({
    id: "unsubscribe-dropdown",
    template: app.templates.unsubscribeDropdown,
    events: {
      'click .x-icon': 'close',
      'click .button': 'unsubscribe',
    },
    unsubscribe: function() {
      app.member.toggleBoardIds('subscribedBoardIds', this.model.get('id'));
      this.close();
    },
  });
})();