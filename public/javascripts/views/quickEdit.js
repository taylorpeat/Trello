var app = app || {};

(function() {
  app.QuickEditView = app.ParentView.extend({
    className: "mini-modal",
    template: app.templates.quickEdit,
    labelTemplate: Handlebars.partials['cardLabels'],
    memberTemplate: Handlebars.partials['cardMembers'],
    events: {
      'click .button': 'save',
      'input textarea': 'autoGrow',
      'click .label-icon': 'editLabels',
      'click .person-icon': 'changeMembers',
      'click .forward-icon': 'moveCard',
      'click .card-icon': 'copyCard',
      'click .file-icon': 'archiveCard',
    },
    initialize: function(options) {
      this.resetView(options);
      this.render();
      this.$el.find('textarea').select();
      this.listenTo(this.model, 'change:labelIds', this.renderLabels);
      this.listenTo(this.model, 'change:memberIds', this.renderMembers);
      app.windowManager.addToCloseArray(this);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      $('.screen').remove();
      $('#dropdown-container').append('<div class="screen"></div>');
      $('#dropdown-container').append(this.$el);
      this.$el.css({ top: this.coord.top, left: this.coord.left });
      this.delegateEvents();
    },
    renderLabels: function() {
      this.$el.find('.card-info').html(this.labelTemplate(this.model.renderData()));
    },
    renderMembers: function() {
      this.$el.find('.members').html(this.memberTemplate(this.model.renderData()));
    },
    resetView: function(options) {
      this.model = options.model;
      this.coord = options.coord;
    },
    save: function(e) {
      e.preventDefault();

      var title = this.$el.find('textarea').val();
      this.model.set('title', title);
      this.close();
    },
    close: function(e) {
      this.remove();
      $('.screen').remove();
    },
    autoGrow: function(e) {
      $(e.target).css({ height: "" });

      if (e.target.scrollHeight > 40 ) {
        $(e.target).css({ height: e.target.scrollHeight });
      }
    },
    editLabels: function(e) {
      this.callDropdown("labelsDropdownView", app.LabelsDropdownView, e, { model: this.model, prevView: undefined });
    },
    changeMembers: function(e) {
      this.callDropdown("membersDropdownView", app.MembersDropdownView, e, { model: this.model, prevView: undefined });
    },
    moveCard: function(e) {
      this.callDropdown("moveCardDropdownView", app.MoveCardDropdownView, e, { model: this.model, prevView: undefined });
    },
    copyCard: function(e) {
      this.callDropdown("copyCardDropdownView", app.CopyCardDropdownView, e, { model: this.model, prevView: undefined });
    },
    archiveCard: function(e) {
      this.model.archive();
      this.close();
    },
  });

})(); 