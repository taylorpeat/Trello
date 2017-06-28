var app = app || {};

(function() {
  app.PrivateDropdownView = app.DropdownView.extend({
    id: "private-dropdown",
    template: app.templates.privateDropdown,
    events: {
      'click .x-icon': 'close',
      'click li': 'updateVisibility',
    },
    initialize: function(options) {
      app.DropdownView.prototype.initialize.apply(this, arguments);
      this.listenTo(this.model, 'change:visibility', this.render);
    },
    updateVisibility: function(e) {
      var visibility = $(e.target).closest('li').attr('data-visibility');
      this.model.set('visibility', visibility);
    },
  });
})();
