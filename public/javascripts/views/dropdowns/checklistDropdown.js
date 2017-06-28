var app = app || {};

(function() {
  app.ChecklistDropdownView = app.DropdownView.extend({
    id: "checklist-dropdown",
    template: app.templates.checklistDropdown,
    events: {
      'click [type="submit"]': 'createChecklist',
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
      this.$el.find(".dropdown-input").select();
    },
    createChecklist: function(e) {
      e.preventDefault();

      var title = this.$el.find('.dropdown-input').val();
      this.model.get('checklists').add({ title: title, checklistItems: new app.ChecklistItems(), });
      this.close();
    },
  });
})();
