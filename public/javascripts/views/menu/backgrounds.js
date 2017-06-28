var app = app || {};

(function() {
  app.MenuBackgroundsView = Backbone.View.extend({
    id: 'menu-backgrounds',
    template: app.templates.menuBackgrounds,
    events: {
      'click > .x-icon': 'hideMenu',
      'click > .back-icon': 'goBack',
    },
    initialize: function(options) {
      this.prevView = options.prevView;
      this.backgroundViews = this.createBackgroundViews();
      this.render();
    },
    render: function() {
      this.$el.html(this.template());
      $('.menu-sidebar').append(this.$el).removeClass('main');
      this.renderBackgrounds();
      $('body').focus();
      this.$el.addClass('slide');
      this.delegateEvents();
    },
    createBackgroundViews: function() {
      var backgroundViews = [];
      app.board.get('backgrounds').each(function(bg) {
        backgroundViews.push(new app.BackgroundView({ model: bg }));
      });
      return backgroundViews;
    },
    renderBackgrounds: function() {
      this.backgroundViews.forEach(function(bg) {
        bg.render();
      });
    },
    close: function() {
      this.$el.removeClass('slide');
      this.remove();
    },
    goBack: function(e) {
      this.close();
      this.prevView.initialize({ model: this.model, coord: this.coord });
    },
    hideMenu: function() {
      $('body').removeClass('shifted');
    },
  });
})();