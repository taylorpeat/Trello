var app = app || {};

(function() {
  app.TempCard = app.Card.extend({
    updateFromDropdown: function(cardAttributes) {
      var listSlot = this.listSlot(cardAttributes);
      this.set({ listId: cardAttributes.listId, listSlot: listSlot });
    },
    listSlot: function(cardAttributes) {
      if (cardAttributes.position === 'top') {
        return 1;
      } else {
        return app.cards.where({ listId: cardAttributes.listId }).length + 1;
      }
    },
    addToCards: function() {
      app.cards.addNew(this.toJSON());
      this.clear();
    },
    toJSON: function() {
      return {
        labelIds: this.get('labelIds'),
        listId: this.get('listId'),
        listSlot: this.get('listSlot'),
        memberIds: this.get('memberIds'),
        title: this.get('title'),
      }
    },
  });

  app.tempCard = new app.TempCard({});
})();