var app = app || {};

(function() {
  app.Card = Backbone.Model.extend({
    parse: function(response) {
      response.attachments = this.convertToBackboneCollection(response.attachments, app.Attachments);
      response.comments = this.convertToBackboneCollection(response.comments, app.Comments);
      response.checklists = this.convertToBackboneCollection(response.checklists, app.Checklists);
      if (response.dueDate) response.dueDate = new Date(response.dueDate);
      return response;
    },
    convertToBackboneCollection: function(collection = [], collectionTemplate) {
      return new collectionTemplate(collection, {parse: true});
    },
    initialize: function() {
      this.listenTo(this.get('checklists'), 'change', this.triggerChange);
      this.listenTo(this.get('checklists'), 'remove', this.triggerChange);
    },
    triggerChange: function() {
      this.trigger('change');
    },
    cardMembers: function() {
      var members = [];
      if (this.get("memberIds")) {
        this.get("memberIds").forEach(function(memberId) {
          members.push( app.members.findWhere({ id: memberId }) );
        });
      }
      return members;
    },
    cardLabels: function() {
      var labels = [];
      if (this.get("labelIds")) {
        this.get("labelIds").forEach(function(labelId) {
          labels.push( app.labels.findWhere({ id: labelId }) );
        });
      }
      return labels;
    },
    cardChecklistsInfo: function() {
      var checklistItems = 0;
      var completedChecklistItems = 0;
      if (this.get('checklists')) {
        this.get('checklists').each(function(checklist) {
          checklist.get('checklistItems').each(function(checklistItem) {
            checklistItems += 1;
            if (checklistItem.get('completed')) completedChecklistItems += 1;
          });
        });
      }
      return { total: checklistItems, completed: completedChecklistItems };      
    },
    subscribed: function() {
      return (this.get("subscribedMemberIds") && this.get("subscribedMemberIds").indexOf(app.member.get("id")) >= 0);
    },
    renderData: function() {
      return {
        id: this.get("id"),
        listId: this.get("listId"),
        description: this.get("description"),
        dueDate: this.get("dueDate"),
        renderDate: this.renderDate(),
        labels: _.invoke(this.cardLabels(), "toJSON"),
        members: _.invoke(this.cardMembers(), "toJSON"),
        attachments: (this.get('attachments')) ? this.get('attachments').toJSON(): undefined,
        comments: (this.get('comments')) ? this.get('comments').toJSON() : undefined,
        checklistItems: this.cardChecklistsInfo().total,
        completedChecklistItems: this.cardChecklistsInfo().completed,
        subscribed: this.subscribed(),
        title: this.get("title"),
        completed: this.get("completed"),
        archived: this.get("archived"),
      };
    },
    renderDate: function() {
      if (!this.get('dueDate')) return;

      var date = this.get('dueDate');
      var month = this.MONTHS[date.getMonth()];
      var hour = date.getHours();
      var hrStr = this.hrStr(hour);
      var amPm = hour < 12 ? "AM" : "PM";
      var minStr = date.getMinutes() + "";
      var time;
      
      if (minStr.length === 1) minStr = "0" + minStr;
      time = hrStr + ":" + minStr + " " + amPm;
      
      return { month: month, day: date.getDay() + "", time: time };
    },
    hrStr: function(hour) {
      if (hour === 0 || hour == 12) {
        return "12";
      } else if (hour < 12) {
        return hour + "";
      } else {
        return (hour - 12) + "";
      }      
    },
    MONTHS: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    toggleAttribute: function(attribute, attrId) {
      var collection;
      var index;

      if (!this.get(attribute)) this.set(attribute, []);

      collection = _.clone(this.get(attribute));
      index = collection.indexOf(attrId);
      if (index >= 0) {
        collection.splice(index, 1);
      } else {
        collection.push(attrId);
      }
      this.set(attribute, collection);
    },
    archive: function() {
      this.trigger('removeView');
      this.set('archived', true);
    },
    unarchive: function() {
      this.trigger('removeArchView');
      this.set('archived', false);
      if (!app.board.get('lists').get(this.get('listId')).get('archived')) new app.CardView({ model: this });
      app.board.get('lists').get(this.get('listId')).trigger('renderInPlace');
    },
    toggleSubscribedId: function(id) {
      var subscribedMemberIds = this.get('subscribedMemberIds') || [];
      var index = subscribedMemberIds.indexOf(id);
      var revisedIds;
      if (index >= 0) {
        revisedIds = subscribedMemberIds.filter(function(memberId) {
          return memberId !== id;
        });
      } else {
        revisedIds = subscribedMemberIds.concat(id);
      }
      this.set('subscribedMemberIds', revisedIds);
    },
    toJSON: function() {
      return {
        archived: this.get('archived'),
        attachments: this.get('attachments').toJSON(),
        checklists: this.get('checklists').toJSON(),
        comments: this.get('comments').toJSON(),
        completed: this.get('completed'),
        description: this.get('description'),
        dueDate: this.get('dueDate'),
        id: this.get('id'),
        labelIds: this.get('labelIds'),
        listId: this.get('listId'),
        listSlot: this.get('listSlot'),
        memberIds: this.get('memberIds'),
        subscribedMemberIds: this.get('subscribedMemberIds'),
        title: this.get('title'),
        hasCopyItems: this.get('checklists').length || !!this.get('labelIds') && this.get('labelIds').length ||
                      !!this.get('memberIds') && this.get('memberIds').length || this.get('attachments').length ||
                      this.get('comments').length,
      }
    },
  });
})();