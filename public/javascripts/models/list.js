var app = app || {};

(function() {
  app.List = Backbone.Model.extend({
    toJSON: function() {
      return {
        id: this.get("id"),
        archived: this.get('archived'),
        subscribed: (this.get("subscribedMemberIds") &&
                     this.get("subscribedMemberIds").indexOf(app.member.get("id")) > -1 ),
        title: this.get('title'),
      };
    },
    renderData: function() {
      return this.toJSON();
    },
    initialize: function() {
      if (!this.get('id')) this.set('id', this.generateRandomId());
    },
    toggleSubscribed: function() {
      if (!app.member) return;
      if (!this.get("subscribedMemberIds")) this.set("subscribedMemberIds", []);
      this.toggleSubscribedId();
      this.trigger("renderInPlace");
    },
    toggleSubscribedId: function() {
      if (this.get("subscribedMemberIds").indexOf(app.member.get("id")) > -1 ) {
        var subMembers = this.get("subscribedMemberIds");
        var memberIdx = subMembers.indexOf(app.member.get("id"));
        subMembers.splice(memberIdx, 1);
      } else {
        this.get("subscribedMemberIds").push(app.member.get("id"));
      }
    },
    copyList: function(title) {
      var newList = this.toJSON();
      newList.id = this.generateRandomId();
      newList.title = title;
      app.cards.copyCards(this.get("id"), newList.id);
      this.collection.add(newList);
    },
    generateRandomId: function() {
      var datestr = new Date().getTime().toString();
      var randomstr = Math.random().toString();
      return datestr + randomstr;
    },
    archive: function() {
      this.set('archived', true);
      this.trigger('archived', this);
      app.cards.removeAllViews(this.get('id'));
    },
    unarchive: function() {
      this.set('archived', false);
      this.trigger('unarchive', this);
      app.board.get('lists').renderAll();
    },
  }); 
})();