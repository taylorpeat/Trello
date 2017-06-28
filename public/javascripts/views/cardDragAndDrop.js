var cardDragAndDrop = {
  
  grabCard: function(e) {
    if (this.model.get('archived')) return;
    this.bindPassClick(e);
    this.setInitialCoordinates(e);
    this.setDragStyles();
    $(document).off('.closeDropdown')
    $('main').on("mousemove.dragging", this.drag.bind(this));
    $('main').on("mouseup.dragging", this.releaseCard.bind(this));
  },
  drag: function(e) {
    if (!this.$el.hasClass("dragging")) {
      $('.list-wrapper, .list, main').css({ cursor: "-webkit-grabbing" });
      this.initiateDrag();
    }
    this.updateDragCoordinates(e);
  },
  releaseCard: function(e) {
    this.$el.removeClass("dragging");
    $('main').off('.dragging');
    this.model.collection.trigger("dragInactive");
    this.stopListening(this.model.collection, "dragHover");
    this.removeDragStyles();
    if (app.windowManager.closeArray.length) $(document).on('mousedown.closeDropdown', app.windowManager.closeVisibleDropdown);
    if (app.windowManager.closeArray.indexOf(app.tempCardView) >= 0) app.tempCardView.setTempCardElement();
  },

  bindPassClick: function(e) {
    $(document).one("mouseup.passClick", function(event) {
      app.windowManager.closeVisibleDropdown(event);
      $(e.target).trigger("click");
    }.bind(this) );
  },
  setInitialCoordinates: function(e) {
    this.elX = this.$el.offset().left;
    this.elY = this.$el.offset().top;
    this.deltaX = e.pageX - this.elX;
    this.deltaY = e.pageY - this.elY;
  },
  setDragStyles: function() {
    $('main').css({ "z-index": "1", "user-select": "none" });
    this.$el.find(".card").css({ "pointer-events": "none" });
    $('.list-title').css({ "pointer-events": "none" });
  },
  removeDragStyles: function() {
    $('main').css({ "z-index": "", "user-select": "" })
    this.$el.find(".card").css({ top: 0, left: 0, "pointer-events": "" });
    $('.list-wrapper, main').css({ cursor: "" });
    $('.list').css({ cursor: "" });
    $('.list-title').css({ "pointer-events": "" });
  },
  initiateDrag: function() {
    this.$el.addClass("dragging");
    this.model.collection.trigger("dragActive");
    this.listenTo(this.model.collection, "dragHover", this.changeSlot);
  },
  updateDragCoordinates: function(e) {
    var dragX = (e.pageX - this.deltaX) - this.elX;
    var dragY = (e.pageY - this.deltaY) - this.elY;
    this.$el.find(".card").css({ top: dragY, left: dragX });
  },
  changeSlot: function(event, data) {
    var moveInfo = _.extend({dragCard: this.model }, data);
    this.model.collection.trigger("cardMoved", moveInfo);
    this.model.collection.trigger("dragActive");
    this.resetDragCoordAndStyles();
    this.updateDragCoordinates(event);
  },
  resetDragCoordAndStyles: function() {
    this.elX = this.$el.offset().left;
    this.elY = this.$el.offset().top;
    this.$el.find(".card").css({ "pointer-events": "none" });      
  },

  //Dropzones for drag and drop
  dropZoneActive: function() {
    if (this.$el.hasClass("dragging")) return;
    this.$el.on("mouseenter.dropzone", this.checkForSlotChangeTrigger.bind(this));
  },
  dropZoneInactive: function() {
    this.$el.off(".dropzone");
  },
  checkForSlotChangeTrigger: function() {
    this.$el.on("mousemove.dropzonecheck", this.triggerSlotChange.bind(this));
    this.$el.on("mouseleave.dropzonecheck", this.stopCheckingSlotChangeTrigger.bind(this));
  },
  stopCheckingSlotChangeTrigger: function() {
    this.$el.off('.dropzonecheck');
  },
  triggerSlotChange: function(e) {
    var dropZoneY = this.$el.offset().top + $(".dragging").height();
    if (e.pageY > dropZoneY) return;
    this.stopCheckingSlotChangeTrigger();
    this.model.collection.trigger("dragInactive");
    this.model.collection.trigger("dragHover", e, { targetCard: this.model });
  },
};