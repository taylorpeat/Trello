var app = app || {};

(function() {
  app.CardModalView = app.ParentView.extend({
    id: "modal",
    template: app.templates.cardModal,
    coverImageTemplate: Handlebars.partials['coverImage'],
    events: {
      'click > .x-icon': 'close',
      'click header .link': 'moveCard',
      'input textarea': 'autoGrow',
      'click .label-button': 'editLabels',
      'click .member-button': 'changeMembers',
      'click .move-button': 'moveCard',
      'click .copy-button': 'copyCard',
      'click .checklist-button': 'checklist',
      'click .subscribe-button': 'toggleSubscribe',
      'click .archive-button': 'archiveCard',
      'click .unarchive-button': 'unarchiveCard',
      'click .red-button': 'deleteDropdown',
      'focus .list-title': 'preventKeys',
      'blur .list-title': 'updateTitle',
    },
    initialize: function(options) {
      this.resetView(options);
      this.createSubViews();
      this.render();
      app.windowManager.addToCloseArray(this);
      this.listenTo(this.model.get('attachments'), 'coverChange', this.renderCover);
      this.listenTo(this.model, 'change:listId', this.renderListTitle);
      this.listenTo(this.model, 'destroy', this.close);
      this.listenTo(this.model.get('checklists'), 'add', this.addChecklist);
    },
    render: function() {
      this.$el.html(this.template(this.model.renderData()));
      this.subViews.forEach(this.renderSubView.bind(this));
      $('.screen').remove();
      $('#modal-container').append('<div class="screen"></div>');
      $('#modal-container').append(this.$el);
      this.autoGrow({ target: this.$el.find('.list-title')[0] });
      this.delegateEvents();
    },
    createSubViews: function() {
      this.subViews = [];
      this.subViews.push(new app.DetailsSectionView({ model: this.model }));
      this.subViews.push(new app.AttachmentsSectionView({ model: this.model }));
      this.createSetOfSubViews('checklists', app.ChecklistView);
      this.subViews.push(new app.CommentsSectionView({ model: this.model }));
      this.subViews.push(new app.ActivitiesSectionView({ model: this.model }));
    },
    createSetOfSubViews: function(collectionName, subViewTemplate) {
      var subViewCollection = this.model.get(collectionName);
      if (!subViewCollection) return;
      subViewCollection.each(function(subViewModel) {
        var newSubView = new subViewTemplate({ model: subViewModel });
        this.subViews.push(newSubView);
      }, this);
    },
    renderSubView: function(subView) {
      this.$el.find('.modal-outer-list').append(subView.render().el);
    },
    renderCover: function() {
      this.$el.find('.cover-image').html(this.coverImageTemplate(this.model.renderData()));
    },
    renderListTitle: function() {
      this.$el.find('header .link').text(app.board.get('lists').get(this.model.get('listId')).get('title'));
    },
    resetView: function(options) {
      this.model = options.model;
      this.coord = options.coord;
    },
    close: function(e) {
      this.hide(e);
      app.router.backToBoard();
    },
    hide: function(e) {
      this.subViews.forEach(function(subView) {
        subView.close();
      });
      this.remove();
      $('.screen').remove();      
    },
    addChecklist: function(checklist) {
      this.hide();
      this.initialize(this);
    },
    autoGrow: function(e) {
      $(e.target).css({ height: "" });

      if (e.target.scrollHeight > 40 ) {
        $(e.target).css({ height: e.target.scrollHeight });
      }
    },
    preventKeys: function(e) {
      this.$el.find('.list-title').on('keypress', this.checkKey.bind(this));
    },
    updateTitle: function(e) {
      var title = this.$el.find('.list-title').val();
      if (title !== this.model.get('title')) this.model.set('title', title);
    },
    checkKey: function(e) {
      if (e.charCode === 9 || e.charCode === 13) {
        e.preventDefault();
        this.$el.find('.list-title').blur().off();
      }
    },
    toggleSubscribe: function() {
      this.model.toggleSubscribedId(app.member.get('id'));
      this.$el.find('.subscribe-button .check-icon, header .sub-icon').toggleClass('hidden');
    },
    editLabels: function(e) {
      this.callDropdown("labelsDropdownView", app.LabelsDropdownView, e);
    },
    changeMembers: function(e) {
      this.callDropdown("membersDropdownView", app.MembersDropdownView, e);
    },
    moveCard: function(e) {
      this.callDropdown("moveCardDropdownView", app.MoveCardDropdownView, e);
    },
    copyCard: function(e) {
      this.callDropdown("copyCardDropdownView", app.CopyCardDropdownView, e);
    },
    checklist: function(e) {
      this.callDropdown("checklistDropdownView", app.ChecklistDropdownView, e);
    },
    archiveCard: function() {
      this.model.archive();
      this.initialize(this);
    },
    unarchiveCard: function() {
      this.model.unarchive();
      this.initialize(this);
    },
    deleteDropdown: function(e) {
      this.callDropdown("deleteCardDropdownView", app.DeleteCardDropdownView, e);
    },
    visible: function() {
      return !!$(document).find(this.$el).length;
    },
  });

})(); 