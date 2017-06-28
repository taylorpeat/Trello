var app = app || {};

(function() {
  app.ListsView = Backbone.View.extend({
    tagName: "main",
    template: app.templates.lists,
    events: {
      'click #new-list:not(.selected)': 'editNewList',
      'click .x-icon': 'clearEditNewList',
      'click [type="submit"]': 'createNewList',
      'focus #new-list [type="text"]': 'observeEnterKey',
      'blur #new-list [type="text"]': 'stopObservingEnterKey',
    },
    initialize: function() {
      this.initialRender();
      this.addAll();
      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'unarchive', this.addOne);
    },
    initialRender: function() {
      $("body header").after(this.$el.html(this.template({})));
    },
    addAll: function() {
      this.collection.each(function(list) {
        if (!list.get("archived")) {
          this.addOne(list);
        }
      }.bind(this));
    },
    addOne: function(list) {
      new app.ListView({ model: list });
    },
    editNewList: function() {
      this.$el.find('#new-list').addClass('selected').find('[type="text"]').focus();
      $(document).on('click', function(e) {
        if ($(e.target).closest('#new-list')[0]) return;
        this.hideEditNewList();
      }.bind(this));
    },
    hideEditNewList: function() {
      this.$el.find('#new-list').removeClass('selected');    
    },
    clearEditNewList: function() {
      this.$el.find('#new-list [type="text"]').val("");
      this.hideEditNewList();
    },
    createNewList: function() {
      var title = this.$el.find('#new-list [type="text"]').val();
      this.collection.add({ title: title });
      this.$el.find('#new-list [type="text"]').val("").focus();
    },
    observeEnterKey: function() {
      $(document).on('keypress.observeKey', function(e) {
        if (e.keyCode === 13) {
          $(document).off('.observeKey');
          this.createNewList();
        }
      }.bind(this) );
    },
    stopObservingEnterKey: function() {
      $(document).off('.observeKey');
    },
  });

  // app.listsView = new ListsView({ collection: app.board.get("lists") });

})();