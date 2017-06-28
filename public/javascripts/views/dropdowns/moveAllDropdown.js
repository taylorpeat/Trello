var app = app || {};

(function() {
  app.MoveAllDropdownView = app.DropdownView.extend({
    id: "move-all",
    template: app.templates.moveAllDropdown,
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'click [data-id]': 'moveAll',
    },
    render: function() {
      var lists = _.invoke(app.board.get('lists').unarchivedLists(), 'toJSON');
      this.$el.html(this.template({ lists: lists, currentList: this.model.renderData() }));
      $("#dropdown-container").html(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
    },
    moveAll: function(e) {
      var newListId = $(e.target).attr('data-id');
      app.cards.moveAll(this.model.get('id'), newListId);
      this.close();
    },
  });
})();
