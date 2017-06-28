var app = app || {};

(function() {
  app.TempCardView = Backbone.View.extend({
    template: Handlebars.partials['tempCard'],
    events: {
      'click .button': 'addCard',
      'click .x-icon': 'clear',
      'focus textarea': 'observeEnterKey',
      'blur textarea': 'stopObservingEnterKey',
    },
    initialize: function() {
      this.model = app.tempCard;
      this.listenTo(this.model, 'change:labelIds change:memberIds', this.updateAndRender);
      this.listenTo(this.model, 'change:listSlot change:listId', this.changeDropdown);
    },
    render: function() {
      this.$el.find('.card').html(this.template(this.model.renderData()));
    },
    bindDropdownClose: function() {
      app.windowManager.addToCloseArray(this);
    },
    close: function(e) {
      if ($(e.target).closest('.list').length) return false;
      this.model.set('listId', '');
      this.hide();
    },
    changeDropdown: function() {
      var list = app.board.get('lists').get(this.model.get('listId'));
      if (!list) return;

      this.updateTitle();
      this.hide();
      list.trigger('openAddCardDropdown');
      this.setTempCardElement();
      this.bindDropdownClose();
      this.render();
      this.$el.find('textarea').focus();
    },
    setTempCardElement: function() {
      this.el = $('.active-card')[0];
      this.$el = $(this.el);
      this.delegateEvents();
    },
    hide: function() {
      $('.add-dropdown-active').removeClass('add-dropdown-active');
      $('.active-card').removeClass('active-card');
    },
    wipeCard: function() {
      $('.active-card .card').html('');
    },
    clear: function() {
      this.wipeCard();
      this.model.clear();
      this.hide();
      this.render();
    },
    addCard: function() {
      this.updateTitle();
      if (this.model.get('title').length > 0) {
        this.model.addToCards();
        this.clear();
      } else {
        alert("Invalid card title.");
      }
    },
    updateTitle: function() {
      var title = this.$el.find('textarea').val();
      this.model.set('title', title);
    },
    updateAndRender: function() {
      this.updateTitle();
      this.render();
    },
    observeEnterKey: function() {
      $(document).on('keypress.observeKey', function(e) {
        if (e.keyCode === 13) {
          $(document).off('.observeKey');
          this.addCard();
        }
      }.bind(this) );
    },
    stopObservingEnterKey: function() {
      $(document).off('.observeKey');
    },
  });

  app.tempCardView = new app.TempCardView({ model: app.tempCard });
})();