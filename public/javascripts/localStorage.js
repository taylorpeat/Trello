var app = app || {};

(function() {
  app.localStorage = {
    updateStorage: function() {
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.toJSON()));
    },
    readStorage: function() {
      this.reset(JSON.parse(localStorage.getItem(this.localStorageKey)), {parse: true});
    },
  };
})();

_.extend(Backbone.Collection.prototype, app.localStorage);