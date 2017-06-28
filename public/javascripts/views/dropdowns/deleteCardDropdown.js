var app = app || {};

(function() {
  app.DeleteCardDropdownView = app.DropdownView.extend({
    id: "delete-card-dropdown",
    template: app.templates.deleteCardDropdown,
    events: {
      'click .button': 'deleteCard',
    },
    deleteCard: function() {
      //temporary destroy before localStorage solution implemented
        app.cards.remove(this.model);
        this.model.trigger('destroy');
      this.close();
    },
  });
})();
