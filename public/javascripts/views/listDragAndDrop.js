var listDragAndDrop = {
  grabList: function(e) {
    if (this.isTargetFocused(e)) {
      return;
    } else {
      if (this.$el.find(".list-title")[0] === e.target) e.preventDefault();
    }
        
    if (e.pageY >= this.$el.offset().top + 34) return;
    this.bindPassClick(e);
    this.setInitialCoordinates(e);
    this.setDragStyles();
    $(document).off('.closeDropdown')
    $(document).on("mousemove.dragging", this.drag.bind(this));
    $(document).on("mouseup.dragging", this.releaseList.bind(this));
  },
  drag: function(e) {
    if (!this.$el.hasClass("dragging")) {
      this.initiateDrag();
    }
    this.updateDragCoordinates(e);
  },
  releaseList: function(e) {
    this.$el.removeClass("dragging");
    $(document).off('.dragging .passClick');
    this.model.collection.trigger("dragInactive");
    this.stopListening(this.model.collection, "dragHover");
    this.removeDragStyles();
    if (app.windowManager.closeArray.length) {
      $(document).off('.closeDropdown');
      $(document).on('mousedown.closeDropdown', app.windowManager.closeVisibleDropdown);
    }
    if (app.windowManager.closeArray.indexOf(app.tempCardView) >= 0) app.tempCardView.setTempCardElement();
  },

  isTargetFocused: function(e) {
    var $listTitle = this.$el.find(".list-title");

    return $listTitle[0] === e.target && $listTitle.is(":focus");
  },
  bindPassClick: function(e) {
    $(document).one("mouseup.passClick", function() {
      app.windowManager.closeVisibleDropdown(e);
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
    this.$el.find(".list").css({ "pointer-events": "none" });
    this.listenTo(this.model.collection, "dragHover", this.changeSlot);
    $('main').css({ cursor: "pointer", "z-index": "1" });
    this.$el.css({ "z-index": "1" });
  },
  initiateDrag: function() {
    this.$el.addClass("dragging");
    this.model.collection.trigger("dragActive");
    $(document).off('.passClick')    
  },
  updateDragCoordinates: function(e) {
    var dragX = (e.pageX - this.deltaX) - this.elX;
    var dragY = (e.pageY - this.deltaY) - this.elY;
    this.$el.find(".list").css({ top: dragY, left: dragX });
  },
  removeDragStyles: function() {
    this.$el.find(".list").css({ top: "", left: "", "pointer-events": "" });
    this.$el.css({ "z-index": "" });
    $('main').css({ cursor: "", "z-index": "" });
  },
  triggerListSlotChange: function(event) {
    this.model.collection.trigger("dragHover", event, this.model.collection.indexOf(this.model));
  },
  changeSlot: function(event, targetIndex) {
    this.model.collection.trigger("listMoved", { movingList: this.model, targetIndex: targetIndex });
    this.elX = this.$el.offset().left;
    this.elY = this.$el.offset().top;
    this.updateDragCoordinates(event);
    this.$el.find(".list").css({ "pointer-events": "none" });   
  },

  //Dropzones for drag and drop
  cardDropZoneActive: function() {
    this.$el.on("mouseover.dropCard", this.triggerCardSlotChange.bind(this));
  },
  cardDropZoneInactive: function() {
    this.$el.off(".dropCard");
  },
  triggerCardSlotChange: function(e) {
    var dropZoneY = this.$el.offset().top + this.$el.find(".list").height() - 20;
    if (e.pageY < dropZoneY || this.$el.find(".dragging").length) return;
    app.cards.trigger("dragHover", e, { newListId: this.model.get('id') });
  },
  listDropZoneActive: function() {
    if (this.$el.hasClass("dragging")) return;
    this.$el.on("mouseover.dropList", this.triggerListSlotChange.bind(this));
  },
  listDropZoneInactive: function() {
    this.$el.off(".dropList");
  },
};