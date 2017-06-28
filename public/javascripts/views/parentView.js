var app = app || {};

(function() {
  app.ParentView = Backbone.View.extend({
    callDropdown: function(dropdownName, dropdownTemplate, e, options={model: this.model, prevView: this} ) {
      (e) ? this.setCoordinates(e) : e = {};  
      if (app[dropdownName]) {
        app[dropdownName].initialize({ model: options.model, coord: this.coord, prevView: options.prevView });
      } else {
        app[dropdownName] = new dropdownTemplate({ model: options.model, coord: this.coord, prevView: options.prevView });
      }
    },
    setCoordinates: function(e) {
      if (e === undefined) return;
      var yOffset = $(e.target).outerHeight() + 6;
      this.coord = { top: $(e.target).offset().top + yOffset, left: $(e.target).offset().left };
    },
  });

})();