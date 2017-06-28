var app = app || {};

(function() {
  app.BackgroundView = app.ParentView.extend({
    tagName: 'li',
    template: app.templates.background,
    events: {
      'click div': 'optionsDropdown',
      'click': 'changeBackground',
    },
    initialize: function() {
      this.listenTo(this.model, 'destroy', this.remove);
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      $('#' + this.model.get('type') + 's').append(this.$el);
    },
    optionsDropdown: function(e) {
      e.preventDefault();

      this.callDropdown('backgroundOptionsDropdown', app.BackgroundOptionsDropdownView, e);
    },
    changeBackground: function(e) {
      if (e.isDefaultPrevented()) return;
      app.board.set('backgroundId', this.model.get('id'));
    },
  })
})();