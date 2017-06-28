var app = app || {};

(function() {
  app.LabelsDropdownView = app.DropdownView.extend({
    id: "add-options-labels-dropdown",
    filter: "",
    template: app.templates.labelsDropdown,
    searchResultsTemplate: Handlebars.partials['labelsDropdownLabels'],
    events: {
      'click .back-icon': 'goBack',
      'click .x-icon': 'close',
      'click [data-id]': 'toggleSelected',
      'keyup input': 'setFilter',
      'click .toggleColorblind': 'toggleColorblind',
    },
    render: function() {
      this.$el.html(this.template({ labels: this.filteredLabels(),
                                    filter: this.filter,
                                    labelIds: this.model.get('labelIds'),
                                    backArrow: this.prevView,
                                  }));
      $("#dropdown-container").append(this.$el);
      this.adjustCoordinates();
      this.delegateEvents();
      this.$el.find("input").select();
    },
    renderSearchResults: function() {
      this.$el.find('.labels-search-results')
          .html(this.searchResultsTemplate({ labels: this.filteredLabels(),
                                           filter: this.filter,
                                           labelIds: this.model.get('labelIds')
                                         }));
    },
    renderActiveCardLabels: function() {
      $('.activeCard .card-info').html(app.templates.cardLabels(this.model.renderData()));
    },
    toggleSelected: function(e) {
      var labelId = $(e.target).attr('data-id');

      this.model.toggleAttribute("labelIds", labelId);
      this.renderSearchResults();
    },
    setFilter: function(e) {
      var filterStr = this.$el.find('.dropdown-input').val();
      this.filter = filterStr;
      this.renderSearchResults();
    },
    filteredLabels: function() {
      var filtered = app.labels.toJSON().filter(this.labelFilter.bind(this));
      return filtered;
    },
    labelFilter: function(label) {
      return label.name.substr(0, this.filter.length) === this.filter;
    },
    toggleColorblind: function() {
      $('body').toggleClass('colorblind');
    },
  });
})();


