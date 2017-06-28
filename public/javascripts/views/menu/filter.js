var app = app || {};

(function() {
  app.MenuFilterView = Backbone.View.extend({
    id: 'menu-filter',
    template: app.templates.menuFilter,
    searchResultsTemplate: Handlebars.partials['menuFilterSearchResults'],
    events: {
      'click > .x-icon': 'hideMenu',
      'click > .back-icon': 'goBack',
      'click [data-label-id]': 'toggleFilterLabels',
      'click [data-member-id]': 'toggleFilterMembers',
      'click [data-date]': 'changeDateFilter',
      'click [data-match-all]': 'changeMatchAll',
      'click #clear-filter': 'clearFilter',
      'keyup input': 'setFilter',
    },
    initialize: function(options) {
      this.prevView = options.prevView;
      this.filter = "";
      this.bindFocus();
      this.render();
      this.listenTo(app.filter, 'change', this.renderSearchResults);
    },
    bindFocus: function() {
      $(window).one('transitionend', function() {
        this.$el.find('.dropdown-input').focus();
      }.bind(this));
    },
    render: function() {
      this.$el.html(this.template({ 
                                    labels: app.labels.toJSON(),
                                    members: app.members.renderData(),
                                    filter: app.filter,
                                  }));
      $('.menu-sidebar').append(this.$el).removeClass('main');
      this.delegateEvents();
      $('body').focus();
      this.$el.addClass('slide');
    },
    renderSearchResults: function() {
      this.$el.find('.filter-search-results')
          .html(this.searchResultsTemplate({
                                              labels: this.filteredLabels(),
                                              members: this.filteredMembers(),
                                              filter: app.filter,
                                              localFilter: !!this.filter,
                                            }));
      // this.$el.find('.dropdown-input').focus();
    },
    filteredLabels: function() {
      var filtered = app.labels.toJSON().filter(this.labelFilter.bind(this));
      return filtered;
    },
    filteredMembers: function() {
      var filtered = app.members.toJSON().filter(this.memberFilter.bind(this));
      return filtered;
    },
    setFilter: function(e) {
      var filterStr = this.$el.find('.dropdown-input').val();
      this.filter = filterStr;
      this.renderSearchResults();
    },
    labelFilter: function(label) {
      return label.name.substr(0, this.filter.length) === this.filter;
    },
    memberFilter: function(member) {
      return member.fullName.toLowerCase().substr(0, this.filter.length) === this.filter.toLowerCase();
    },
    close: function() {
      this.$el.removeClass('main slide');
      this.remove();
    },
    hideMenu: function() {
      $('body').removeClass('shifted');
    },
    goBack: function(e) {
      this.close();
      this.prevView.initialize({ model: this.model, coord: this.coord });
    },
    toggleFilterLabels: function(e) {
      var labelId = $(e.target).attr('data-label-id');
      app.filter.toggleFilterId('label', labelId);
      // this.renderSearchResults();
    },
    toggleFilterMembers: function(e) {
      var memberId = $(e.target).attr('data-member-id');
      app.filter.toggleFilterId('member', memberId);
      // this.renderSearchResults();
    },
    changeDateFilter: function(e) {
      var dateFilter = $(e.target).attr('data-date');
      app.filter.date === dateFilter ? app.filter.setDate('') : app.filter.setDate(dateFilter);
      // this.renderSearchResults();
    },
    changeMatchAll: function(e) {
      var matchAll = $(e.target).attr('data-match-all')
      app.filter.setMatchAll(matchAll);
      // this.renderSearchResults();
    },
    clearFilter: function() {
      app.filter.reset();
      // this.renderSearchResults();
    },
  });
})();