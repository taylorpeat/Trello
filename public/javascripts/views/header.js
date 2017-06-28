var app = app || {};

(function() {
  app.HeaderView = app.ParentView.extend({
    tagName: "header",
    template: app.templates.header,
    events: {
      'click #title': 'renameBoardDropdown',
      'click > ul > .private': 'privateDropdown',      
      'click .star-icon': 'toggleStarred',
      'click .subscribed': 'unsubscribeDropdown',
      'click .menu': 'showMenu',
      'click .filter-header .x-icon': 'removeFilter',
    },
    initialize: function() {
      this.render();
      this.updateBackground();
      this.listenTo(this.model, "change:title", this.renderInPlace);
      this.listenTo(this.model, "change:id", this.renderInPlace);
      this.listenTo(this.model, "change:visibility", this.renderInPlace);
      this.listenTo(this.model, "change:backgroundId", this.updateBackground);
      this.listenTo(app.member, "change:subscribedBoardIds", this.renderInPlace);
      this.listenTo(app.member, "change:starredBoardIds", this.renderInPlace);
      this.listenTo(app.filter, "change", this.renderInPlace);
    },
    render: function() {
      $("body nav").after(this.$el.html(this.template({ 
                                                        board: app.board.renderData(),
                                                        filter: !app.filter.empty(),
                                                      })));
    },
    renderInPlace: function() {
      this.$el.html(this.template({ 
                                    board: app.board.renderData(),
                                    filter: !app.filter.empty(),
                                  }));
    },
    toggleStarred: function() {
      app.member.toggleBoardIds('starredBoardIds', this.model.get('id'));
    },
    renameBoardDropdown: function(e) {
      this.callDropdown('renameBoardDropdown', app.RenameBoardDropdownView, e);
    },
    privateDropdown: function(e) {
      this.callDropdown('privateDropdown', app.PrivateDropdownView, e);
    },
    unsubscribeDropdown: function(e) {
      this.callDropdown('unsubscribeDropdown', app.UnsubscribeDropdownView, e);
    },
    showMenu: function() {
      $('body').addClass('shifted');
    },
    removeFilter: function() {
      app.filter.reset();
    },
    updateBackground: function() {
      var backgroundInfo = this.model.get('backgrounds').get(this.model.get('backgroundId')).toJSON();
      $('body').css({
        'background-color': backgroundInfo.color,
        'background-image': (backgroundInfo.image) ? 'url(/' + backgroundInfo.image + ')' : '',
        'background-size': backgroundInfo.size,
        'background-attachment': 'fixed',
      }).toggleClass('dark-font', backgroundInfo.darkFont);
      this.updateBackgroundListener();
    },
    updateBackgroundListener: function() {
      this.listenToOnce(this.model.get('backgrounds').get(this.model.get('backgroundId')), 'change', this.updateBackground);
    },
  });

  // app.headerView = new HeaderView({ model: app.board });

})();