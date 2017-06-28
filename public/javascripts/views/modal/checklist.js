var app = app || {};

(function() {
  app.ChecklistView = Backbone.View.extend({
    tagName: 'li',
    className: 'checklist-section',
    template: app.templates.checklist,
    progressTemplate: Handlebars.partials['progressBar'],
    completedFilter: false,
    events: {
      'click .horiz-list li:first-child': 'toggleFilter',
      'click .horiz-list li:nth-child(2)': 'toggleFilter',
      'click .horiz-list li:last-child': 'deleteChecklist',
      'click h2': 'editTitle',
      'blur h2 + ul + form textarea': 'hideEditTitle',
      'mousedown form input': 'addNewChecklistItem',
      'click > p .edit-button': 'editTitle',
      'click > p .discard-button': 'revertTitle',
      'mousedown h2 + ul + form .x-icon': 'revertTitle',
      'mousedown h2 + ul + form .button': 'saveTitle',
    },
    initialize: function() {
      this.listenTo(this.model, 'render', this.render);
      this.listenTo(this.model.get('checklistItems'), 'add', this.addChecklistItem);
      this.listenTo(this.model.get('checklistItems'), 'remove', this.removeChecklistItem);
      this.listenTo(this.model.get('checklistItems'), 'progressUpdate', this.updateProgressBar);
      this.checklistItemViews = [];
      this.model.get('checklistItems').each(this.addChecklistItem.bind(this));
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.renderChecklistItems();
      this.delegateEvents();
      return this;
    },
    addChecklistItem: function(checklistItem) {
      this.checklistItemViews.push(new app.ChecklistItemView({ model: checklistItem, checklistView: this }));
    },
    addNewChecklistItem: function(e) {
      e.preventDefault();
      var description = this.$el.find('>.checklist + form textarea').val();
      if (description.length > 0) {
        this.model.get('checklistItems').add({ description: description });
        $(document).one('mouseup', this.render.bind(this));
      } else {
        alert("Your description must have a length");
        $(e.target).focus();
      }
    },
    removeChecklistItem: function(removedView) {
      this.checklistItemViews.splice(this.checklistItemViews.indexOf(removedView), 1);
    },
    renderChecklistItems: function() {
      this.$el.find('.checklist').empty();
      this.checklistItemViews.forEach(function(checklistItemView) {
        if (checklistItemView.model.get('completed') && this.completedFilter) return;
        this.$el.find('.checklist').append(checklistItemView.render().el);
      }, this );
    },
    close: function() {
      this.checklistItemViews.forEach(function(checklistItemView) {
        checklistItemView.remove();
      });
      this.stopListening();
      this.remove();
    },
    updateProgressBar: function() {
      this.$el.find('.checklist-bar').replaceWith(this.progressTemplate(this.model.toJSON()));
    },
    toggleFilter: function() {
      this.completedFilter = !this.completedFilter;
      this.$el.toggleClass('hide-completed');
      this.render();
    },
    deleteChecklist: function() {
      this.model.destroy();
      this.close();
    },
    editTitle: function() {
      this.$el.addClass('edit-title');
      this.$el.find('h2 + ul + form textarea').focus();
      if (!this.$el.find('> p').hasClass('hidden')) this.$el.find('> p').addClass('hidden');
    },
    hideEditTitle: function() {
      this.$el.removeClass('edit-title');
      if (this.model.get('title') !== this.$el.find('h2 + ul + form textarea').val()) {
        this.$el.find('> p').removeClass('hidden');
      } else {
        this.$el.find('> p').addClass('hidden');
      }
    },
    revertTitle: function() {
      this.$el.find('h2 + ul + form textarea').val(this.model.get('title'));
      this.hideEditTitle();
    },
    saveTitle: function() {
      this.model.set('title', this.$el.find('h2 + ul + form textarea').val());
      $(document).one('click', this.render.bind(this));
    },
    // checklistItemFilter: function(checklistItem) {
    //   return !checklistItem.completed;
    // },
    // visibleChecklistItems: function() {
    //   return this.model.get('checklistItems').toJSON().filter(this.checklistItemFilter.bind(this));
    // },
  });
})();