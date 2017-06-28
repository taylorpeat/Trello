var app = app || {};

(function() {
  app.AddOptionsDropdownView = app.DropdownView.extend({
    id: "add-options-dropdown",
    template: app.templates.addOptionsDropdown,
    events: {
      'click .ao-members': 'members',
      'click .ao-labels': 'labels',
      'click .ao-position': 'position',
      'click .x-icon': 'close',
    },
    members: function(e) {
      this.close();
      this.callDropdown('membersDropdownView', app.MembersDropdownView, e);
    },
    labels: function(e) {
      this.close();
      this.callDropdown('labelsDropdownView', app.LabelsDropdownView, e);
    },
  });
})();


