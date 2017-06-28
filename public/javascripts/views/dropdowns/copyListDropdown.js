var app = app || {};

(function() {
  app.CopyListDropdownView = app.DropdownView.extend({
    id: "copy-list",
    template: app.templates.copyListDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'submit form': 'copyList',
    },
    render: function(options) {
      app.DropdownView.prototype.render.apply(this, arguments);
      this.$el.find("textarea").select();
    },
    copyList: function(e) {
      e.preventDefault();

      var title = $("#copy-title").val();
      if (title === "") {
        this.$el.find("textarea").select();
        return;
      };
      this.model.copyList(title);
      this.close();
    },
  });
})();


