var app = app || {};

(function() {
  var Cards = Backbone.Collection.extend({
    model: app.Card,
    localStorageKey: 'trelloCards',
    comparator: 'listSlot',
    initialize: function() {
      localStorage[this.localStorageKey] ? this.readStorage() : this.setDefault();
      this.listenTo(this, "cardMoved", this.updateListOrder);
      this.listenTo(this, "add", this.reorderNewCardList);
      this.listenTo(this, "add change remove", this.updateStorage);
    },
    setDefault: function() {
      this.reset(seedCards, {parse: true});
    },
    moveAll: function(listId, newListId) {
      var nextSlot = this.where({ listId: newListId }).length + 1;
      this.where({ listId: listId }).forEach(function(card) {
        card.set('listId', newListId);
        card.set('listSlot', nextSlot);
        nextSlot += 1;
        card.trigger('render');
      });
    },
    archiveAll: function(listId) {
      this.where({ listId: listId }).forEach(function(card) {
        card.archive();
        app.board.get("lists").renderAll();
      });
    },
    removeAllViews: function(listId) {
      this.where({ listId: listId }).forEach(function(card) {
        card.trigger('removeView');
      });
    },
    copyCards: function(listId, newListId) {
      this.where({ listId: listId }).forEach(function(card) {
        var newCard = card.toJSON();
        newCard.id = this.nextId() + "";
        newCard.listId = newListId;
        this.add(newCard, {parse: true});
      }, this);
    },
    addNew: function(newCard) {
      if (!newCard.id) newCard.id = this.nextId();
      this.add(newCard, {parse: true});
    },
    copyCardFromForm: function(formData, parentCard) {
      var newCard = this.newCardFromForm(formData);

      if (parentCard) {
        if (formData.attachments) newCard.attachments = parentCard.attachments;
        if (formData.checklists) newCard.checklists = parentCard.checklists;
        if (formData.labels) newCard.labelIds = parentCard.labelIds;
        if (formData.members) newCard.memberIds = parentCard.memberIds;
        if (formData.comments) newCard.comments = parentCard.comments;
      }
      this.add(newCard, {parse: true});
    },
    newCardFromForm: function(formData) {
      return {
        listId: formData['list-title'],
        listSlot: this.listSlotFromForm(formData),
        title: formData['card-title'],
        id: this.nextId() + '',
      };
    },
    listSlotFromForm: function(formData) {
      if (formData['card-position'] === 'last-slot') {
        return +this.where({ listId: formData['list-title'] }).length + 1;
      } else {
        return app.cards.get(formData['card-position']).get('listSlot');
      }
    },
    nextId: function() {
      return _.max(app.cards.pluck("id").map(function(id) { return +id; })) + 1;
    },
    reorderNewCardList: function(newCard) {
      if (!this.reorderData) this.reorderData = {};
      this.reorderData.listId = newCard.get('listId');
      this.reorderData.listSlot = newCard.get('listSlot');
      this.reorderData.dragCardId = newCard.get('id');
      this.fixDuplicateSlot();
      this.sort();
    },
    updateListOrder: function(data) {
      this.reorderData = this.getDataFromModels(data);
      this.updateChangedCard(data);
      this.fillEmptySlot();
      this.fixDuplicateSlot();
      this.reorder(this.reorderData.listId);
    },

    //Sorting cards for drag and drop
    getDataFromModels: function(data) {
      return {
        listId: this.listIdFromData(data),
        listSlot: this.listSlotFromData(data),
        prevListId: data.dragCard.get("listId"),
        prevListSlot: data.dragCard.get("listSlot"),
        dragCardId: data.dragCard.get("id"),
      };
    },
    listIdFromData: function(data) {
      return (data.newListId) ? data.newListId : data.targetCard.get("listId");
    },
    listSlotFromData: function(data) {
      if (data.newListId) {
        return this.where({ listId: this.listIdFromData(data) }).length + 1;
      } else {
        return data.targetCard.get("listSlot");
      }
    },
    updateChangedCard: function(data) {
      data.dragCard.set({
                        listId: this.reorderData.listId,
                        listSlot: this.reorderData.listSlot,
                      });
    },
    fillEmptySlot: function() {
      if (this.reorderData.listId !== this.reorderData.prevListId) {
        this.emptySlotShift(this.reorderData.prevListId);
      } else {
        this.emptySlotShift(this.reorderData.listId);
      }
    },
    emptySlotShift: function(listId) {
      var cards = this.where({ listId: listId });

      for (card of cards) {
        if (card.get("listSlot") > this.reorderData.prevListSlot
            && card.get("id") !== this.reorderData.dragCardId) {
          card.set("listSlot", card.get("listSlot") - 1);
        }
      }
    },
    fixDuplicateSlot: function() {
      var cards = this.where({ listId: this.reorderData.listId });

      for (card of cards) {
        if (card.get("listSlot") >= this.reorderData.listSlot
            && card.get("id") !== this.reorderData.dragCardId) {
          card.set("listSlot", card.get("listSlot") + 1 );
        }
      }
    },
    reorder: function(listId) {
      this.sort();
      var list = app.board.get('lists').get(listId);
      if (!list) return;
      list.trigger('renderInPlace');
    },
  });

  app.cards = new Cards();

})();