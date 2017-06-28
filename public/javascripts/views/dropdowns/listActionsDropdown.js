var app = app || {};

(function() {
  app.ListActionsDropdownView = app.DropdownView.extend({
    id: "list-actions",
    template: app.templates.listActionsDropdown,
    events: {
      'click .la-add-card': 'addCard',
      'click .la-copy-list': 'copyList',
      'click .la-move-list': 'moveList',
      'click .la-subscribe': 'subscribe',
      'click .la-move-all': 'moveAll',
      'click .la-archive-all': 'archiveAll',
      'click .la-archive-one': 'archiveList',
      'click .x-icon': 'close',
    },
    addCard: function(e) {
      this.model.trigger("showAddCard", e);
      this.close();
    },
    copyList: function() {
      this.callDropdown.bind(this, 'copyListDropdownView', app.CopyListDropdownView)();
    },
    moveList: function() {
      this.callDropdown.bind(this, 'moveListDropdownView', app.MoveListDropdownView)();
    },
    subscribe: function() {
      this.model.toggleSubscribed();
      this.render();
    },
    moveAll: function() {
      this.callDropdown.bind(this, 'moveAllDropdownView', app.MoveAllDropdownView)();     
    },
    archiveAll: function() {
      this.callDropdown.bind(this, 'archiveAllDropdownView', app.ArchiveAllDropdownView)();     
    },
    archiveList: function() {
      this.model.archive();
      this.close();
    },
  });
})();


