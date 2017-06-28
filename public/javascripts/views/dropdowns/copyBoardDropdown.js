var app = app || {};

(function() {
  app.CopyBoardDropdownView = app.DropdownView.extend({
    id: "copy-board-dropdown",
    template: app.templates.copyBoardDropdown,
    events: {
      'click .x-icon': 'close',
      'click li': 'updateVisibility',
    },
    render: function(options) {
      app.DropdownView.prototype.render.apply(this, arguments);
      this.$el.find(".dropdown-input").select();
    },
    updateVisibility: function(e) {
      this.$el.find('.check-icon').addClass('hidden');
      $(e.target).closest('li').find('.check-icon').removeClass('hidden');
    },
  });
})();