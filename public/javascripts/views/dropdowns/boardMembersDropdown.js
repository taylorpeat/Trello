var app = app || {};

(function() {
  app.BoardMembersDropdownView = app.DropdownView.extend({
    id: "board-members-dropdown",
    template: app.templates.boardMembersDropdown,
    render: function() {
      this.$el.html(this.template());
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
      this.$el.find('input').focus();
    },
  });
})();
