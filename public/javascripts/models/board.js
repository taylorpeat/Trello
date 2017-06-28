var app = app || {};

(function() {
  app.Board = Backbone.Model.extend({
    parse: function(response) {
      response.lists = this.convertToBackboneCollection(response.lists, app.Lists);
      response.backgrounds = this.convertToBackboneCollection(response.backgrounds, app.Backgrounds);
      return response;
    },
    convertToBackboneCollection: function(collection = [], collectionTemplate) {
      return new collectionTemplate(collection, {parse: true});
    },
    initialize: function() {
      this.listenTo(this.get('backgrounds'), 'change', this.checkActiveBG);
      this.listenTo(this, 'change', this.triggerUpdateStorage);
      this.listenTo(this.get('backgrounds'), 'updateStorage', this.triggerUpdateStorage);
      this.listenTo(this.get('lists'), 'updateStorage', this.triggerUpdateStorage);
    },
    triggerUpdateStorage: function() {
      this.trigger('updateStorage');
    },
    checkActiveBG: function(board) {
      if (board.get('id') === this.get('backgroundId')) this.trigger('change:backgroundId');
    },
    listIds: function() {
      return this.get('lists').map(function(list) {
        return list.get('id');
      });
    },
    toJSON: function() {
      return {
        id: this.get("id"),
        title: this.get("title"),
        backgroundId: this.get('backgroundId'),
        visibility: this.get("visibility"),
        localStorageKey: this.get("localStorageKey"),
        lists: this.collectionToArray('lists'),
        backgrounds: this.collectionToArray('backgrounds'),
      }
    },
    collectionToArray: function(collection) {
      if (Array.isArray(this.get(collection))) {
        return this.get(collection);
      } else {
        return this.get(collection).map(function(item) {
          return item.renderData();
        });
      }
    },
    renderData: function() {
      var data = this.toJSON();

      data.background = this.backgroundOrDefault();
      data.favorite = app.member.get("starredBoardIds").indexOf(data.id) >= 0;
      data.subscribed = app.member.get('subscribedBoardIds').indexOf(data.id) >= 0;
      data.private = data.visibility === "private";
      data.team = data.visibility === "team";
      data.public = data.visibility === "public";
      data.members = app.members.toJSON();
      return data;
    },
    backgroundOrDefault: function() {
      if (app.board.get('backgrounds').get(this.get("backgroundId"))) {
        return app.board.get('backgrounds').get(this.get("backgroundId")).toJSON();
      }
    },
  });
})();