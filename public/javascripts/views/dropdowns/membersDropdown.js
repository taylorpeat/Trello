var app = app || {};

(function() {
  app.MembersDropdownView = app.DropdownView.extend({
    id: "add-options-members-dropdown",
    filter: "",
    template: app.templates.membersDropdown,
    searchResultsTemplate: Handlebars.partials['membersDropdownMembers'],
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'click [data-id]': 'toggleSelected',
      'keyup input': 'setFilter',
    },
    render: function() {
      this.$el.html(this.template({ members: this.filteredMembers(),
                                    memberIds: this.model.get('memberIds'),
                                    backArrow: this.prevView,
                                  }));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      // this.bindCloseEvent.call(this);
      this.delegateEvents();
      this.$el.find("input").select();
    },
    renderSearchResults: function() {
      this.$el.find('.members-search-results').html(this.searchResultsTemplate({ members: this.filteredMembers(), memberIds: this.model.get('memberIds') }));
    },
    renderActiveCardMembers: function() {
      $('.activeCard .members').html(app.templates.cardMembers(this.model.renderData()));
    },
    toggleSelected: function(e) {
      var memberId = $(e.target).attr('data-id');

      this.model.toggleAttribute("memberIds", memberId);
      this.renderSearchResults();
    },
    setFilter: function(e) {
      var filterStr = this.$el.find('.dropdown-input').val();
      this.filter = filterStr;
      this.renderSearchResults();
    },
    filteredMembers: function() {
      var filtered = app.members.toJSON().filter(this.memberFilter.bind(this));
      return filtered;
    },
    memberFilter: function(member) {
      return member.fullName.substr(0, this.filter.length) === this.filter;
    },
  });
})();


