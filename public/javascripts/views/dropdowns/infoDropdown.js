var app = app || {};

(function() {
  app.InfoDropdownView = app.DropdownView.extend({
    id: "info-dropdown",
    template: app.templates.infoDropdown,
    render: function() {
      this.$el.html(this.template({ url: app.baseURL + 'public/images/info.png' }));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
  });
})();

