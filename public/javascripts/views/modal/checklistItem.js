var app = app || {};

(function() {
  app.ChecklistItemView = Backbone.View.extend({
    tagName: 'li',
    template: app.templates.checklistItem,
    events: {
      'change input': 'toggleCompleted',
      'mousedown': 'preventDefault',
      'click s': 'openDescription',
      'blur textarea': 'closeDescription',
      'click .x-icon': 'revertDescription',
      'click .button': 'saveDescription',
      'click .delete-button': 'delete',
      'click .discard-button': 'revertDescription',
      'click .edit-button': 'openDescription',
      'input textarea': 'autoGrow',
    },
    initialize: function(options) {
      this.checklistView = options.checklistView;
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.delegateEvents();
      return this;
    },
    toggleCompleted: function(e) {
      this.model.set('completed', !this.model.get('completed'));
      $(e.target).focus();
      if (this.checklistView.completedFilter) this.checklistView.render();
    },
    openDescription: function(e) {
      this.$el.toggleClass('textarea-focused');
      if (this.$el.hasClass('textarea-focused')) this.$el.find('textarea').focus();
      if (!this.$el.find('p').hasClass('hidden')) this.$el.find('p').addClass('hidden');
    },
    closeDescription: function() {
      this.$el.removeClass('textarea-focused');
      if (this.model.get('description') !== this.$el.find('textarea').val()) {
        this.$el.find('p').removeClass('hidden');
      } else {
        this.$el.find('p').addClass('hidden');
      }
    },
    revertDescription: function() {
      this.$el.find('textarea').val(this.model.get('description'));
      this.closeDescription();
    },
    preventDefault: function(e) {
      if (e.target !== this.$el.find('textarea')[0]) e.preventDefault();
    },
    close: function() {
      this.remove();
    },
    delete: function() {
      this.model.collection.remove(this.model);
      this.close();
    },
    saveDescription: function() {
      this.model.set('description', this.$el.find('textarea').val());
      $(document).one('click', this.render.bind(this));
    },
    autoGrow: function(e) {
      $(e.target).css({ height: "" });

      if (e.target.scrollHeight > 40 ) {
        $(e.target).css({ height: e.target.scrollHeight });
      }
    },
  });
})();