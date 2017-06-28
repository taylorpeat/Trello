var app = app || {};

(function() {
  app.BackgroundOptionsDropdownView = app.DropdownView.extend({
    id: "background-options-dropdown",
    className: "bg-options dropdown",
    template: app.templates.backgroundOptionsDropdown,
    events: {
      'click .cover-item': 'setCover',
      'click .tile-item': 'setTile',
      'click .light-item': 'setLightFont',
      'click .dark-item': 'setDarkFont',
      'click .delete-bg': 'deleteBackground',
      'click .x-icon': 'close',
    },
    initialize: function() {
      app.DropdownView.prototype.initialize.apply(this, arguments);
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
    setCover: function() {
      this.model.set('size', 'cover');
    },
    setTile: function() {
      this.model.set('size', 'auto');
    },
    setLightFont: function() {
      this.model.set('darkFont', false);
    },
    setDarkFont: function() {
      this.model.set('darkFont', true);
    },
    deleteBackground: function() {
      this.model.destroy();
      this.close();
    },
  });
})();
