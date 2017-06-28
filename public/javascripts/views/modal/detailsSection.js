var app = app || {};

(function() {
  app.DetailsSectionView = app.ParentView.extend({
    tagName: 'li',
    className: 'details-section',
    template: app.templates.detailsSection,
    labelTemplate: Handlebars.partials[''],
    memberTemplate: Handlebars.partials[''],
    events: {
      'change #dueDateCheckbox': 'toggleDateCompleted', 
      'click #description-edit': 'showDescriptionEdit',
      'click #description-edit-options span:first-child': 'showDescriptionEdit',
      'click #description-edit-options span:last-child': 'clearDescriptionEdit',
      'mousedown .x-icon': 'clearDescriptionEdit',
      'mousedown .button': 'updateDescription',
      'blur .textarea-toggle': 'hideDescriptionEdit',
      'input .textarea-toggle': 'showDesciptionWarning',
      'click .members-section .plus-icon': 'editMembers',
      'click .labels-section .member-container': 'editLabels',
    },
    initialize: function() {
      this.listenTo(this.model, 'change:labelIds', this.render);
      this.listenTo(this.model, 'change:memberIds', this.render);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      return this;
    },
    toggleDateCompleted: function() {
      this.model.set('completed', !this.model.get('completed'));
      $('#dueDateDisplay').toggleClass('completed');
    },
    showDescriptionEdit: function() {
      $('.description').addClass('editing');
      $('.description textarea').focus();
    },
    hideDescriptionEdit: function() {
      $('.description').removeClass('editing');
    },
    showDesciptionWarning: function() {
      $('.description .hidden').removeClass('hidden');
    },
    updateDescription: function() {
      var newDescription = $('.textarea-toggle').val();
      this.model.set('description', newDescription);
      $('.textarea-overlay').text(newDescription);
      $('.description p:last-child').addClass('hidden');
    },
    clearDescriptionEdit: function() {
      $('.description textarea').val(this.model.get('description'));
      $('.description p:last-child').addClass('hidden');
    },
    close: function() {
      this.remove();
    },
    editLabels: function(e) {
      this.callDropdown("labelsDropdownView", app.LabelsDropdownView, e);
    },
    editMembers: function(e) {
      this.callDropdown("membersDropdownView", app.MembersDropdownView, e);
    },
  });
})();