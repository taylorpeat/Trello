var app = app || {};

(function() {
  var Members = Backbone.Collection.extend({
    model: app.Member,
    localStorageKey: 'trelloMembers',
    initialize: function() {
      localStorage[this.localStorageKey] ? this.readStorage() : this.setDefault();
      this.listenTo(this, 'change', this.updateStorage);
    },
    setDefault: function() {
      this.reset(seedMembers);
    },
    renderData: function() {
      var data = [];
      this.each(function(member) {
        data.push(member.renderData());
      });
      return data;
    },
  });

  app.members = new Members();
  app.member = app.members.get("1") || app.members.add(defaultMember);

})();