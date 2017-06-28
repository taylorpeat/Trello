var app = app || {};

(function() {
  app.DropdownView = app.ParentView.extend({
    className: "dropdown",
    events: {
      'click .x-icon': 'close',
    },
    initialize: function(options) {
      this.resetView(options);
      this.$el.css({ top: this.coord.top, left: this.coord.left });
      this.bindCloseEvent();
      this.delegateEvents();
      this.render();
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
    resetView: function(options) {
      this.model = options.model;
      this.coord = options.coord;
      this.prevView = options.prevView;
      this.listenTo(app.cards, "dragActive", this.close);
      this.listenTo(app.board.get("lists"), "dragActive", this.close);
    },
    bindCloseEvent: function() {
      app.windowManager.addToCloseArray(this)
    },
    adjustCoordinates: function() {
      var MARGIN = 2;
      if ((this.coord.left + this.$el.outerWidth() + MARGIN) > window.innerWidth) {
        this.$el.css({ left: this.coord.left - (this.coord.left + this.$el.outerWidth() - window.innerWidth + MARGIN) });
      }
      if ((this.coord.top + this.$el.outerHeight() + MARGIN) > window.innerHeight) {
        this.$el.css({ top: this.coord.top - (this.coord.top + this.$el.outerHeight() - window.innerHeight + MARGIN) });
      }
    },
    close: function() {
      this.remove();
    },
    goBack: function(e) {
      this.close();
      this.prevView.initialize({ model: this.model, coord: this.coord });
    },
    callDropdown: function(dropdown, dropdownTemplate) {
      this.close();      
      if (app[dropdown]) {
        app[dropdown].initialize({ model: this.model, coord: this.coord, prevView: this });
      } else {
        app[dropdown] = new dropdownTemplate({ model: this.model, coord: this.coord, prevView: this });
      }
    },
  });
})();


