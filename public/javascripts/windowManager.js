var app = app || {};

(function() {
  app.windowManager = {
    closeArray: [],
    addToCloseArray: function(dropdown) {
      if (app.windowManager.closeArray.indexOf(dropdown) === -1) {
        app.windowManager.closeArray.push(dropdown);
      } else {
        return;
      }
      $(document).off('.closeDropdown');
      $(document).on('mousedown.closeDropdown', app.windowManager.closeVisibleDropdown);
    },
    closeVisibleDropdown: function(e) {
      var dropdown;
      while ( app.windowManager.closeArray.length > 0 ) {
        dropdown = app.windowManager.closeArray.slice(-1)[0];
        if ($(document).find(dropdown.$el).length) {
          app.windowManager.closeDropdown(e, dropdown);
          return;
        } else if ($(document).find($(e.target)).length) {
          app.windowManager.removeDropdownFromArray();
        }
      }
    }.bind(app.windowManager),
    closeDropdown: function(e, dropdown) {
      if (!$(e.target).closest(dropdown.$el).length && !$(e.target).closest(dropdown.altEl).length) {
        if (dropdown.close(e) !== undefined) return;
        app.windowManager.removeDropdownFromArray();
      }
    },
    removeDropdownFromArray: function() {
      app.windowManager.closeArray.pop();
      if (app.windowManager.closeArray.length === 0) $(document).off('.closeDropdown');
    },
  };
})()