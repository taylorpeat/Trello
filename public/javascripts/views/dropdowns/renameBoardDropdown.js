var app = app || {};

(function() {
  app.RenameBoardDropdownView = app.DropdownView.extend({
    id: "rename-board-dropdown",
    template: app.templates.renameBoardDropdown,
    events: {
      'click .x-icon': 'close',
      'click .button': 'updateBoardTitle',
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
      this.$el.find('[type="text"]').select();
    },
    updateBoardTitle: function() {
      var title = this.$el.find('.dropdown-input').val();
      this.model.set('title', title);
      this.close();
    },
  });
})();
