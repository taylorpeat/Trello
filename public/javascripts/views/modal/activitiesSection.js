var app = app || {};

(function() {
  app.ActivitiesSectionView = Backbone.View.extend({
    tagName: 'li',
    className: 'activity-section',
    template: app.templates.activitiesSection,
    events: {
      'click small span:first-child': 'showEdit',
      'click small span:last-child': 'deleteActivity',
      'blur .comment textarea': 'hideEdit',
    },
    initialize: function() {

    },
    render: function() {
      this.$el.html(this.template());
      return this;
    },
    close: function() {
      this.remove();
    },
    showEdit: function(e) {
      $(e.target).closest('li').addClass('edit-activity');
      $(e.target).closest('li').find('textarea').focus();
    },
    hideEdit: function(e) {
      $('.edit-activity').removeClass('edit-activity');
    },
    deleteActivity: function(e) {
      $(e.target).closest('li').remove();
    },
  });
})();