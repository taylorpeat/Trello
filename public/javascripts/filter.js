var app = app || {};

(function() {
  app.filter = {
    toggleFilterId: function(type, id) {
      var filterIds = this[type + 'Ids'];
      if (filterIds.indexOf(id) >= 0) {
        filterIds.splice(filterIds.indexOf(id), 1);
      } else {
        filterIds.push(id);
      }
      this.trigger('change');
    },
    setDate: function(newDate) {
      this.date = newDate;
      this.trigger('change');
    },
    setMatchAll: function(newMatchAll) {
      if (this.matchAll && !!newMatchAll || !this.matchAll && !newMatchAll) return;
      this.matchAll = !this.matchAll;
      this.trigger('change');
    },
    checkCard: function(card) {
      if (this.empty()) return true;
      if (this.matchAll) {
        return this.matchAllFilters(card);
      } else {
        return this.matchAnyFilter(card);
      }
    },
    matchAnyFilter: function(card) {
      return this.checkIds('labelIds', card) ||
             this.checkIds('memberIds', card) ||
             this.checkDate(card);
    },
    matchAllFilters: function(card) {
      return this.checkAllIds('labelIds', card) &&
             this.checkAllIds('memberIds', card) &&
             this.checkDate(card);
    },
    checkIds: function(idType, card) {
      if (!this[idType].length) return false;
      if (this[idType].indexOf('no-ids') >= 0 &&
          !card.get(idType) ||
          card.get(idType) && !card.get(idType).length) {
        return true;
      }
      if (!card.get(idType)) return;
      return this[idType].some(function(id) {
        return card.get(idType).indexOf(id) >= 0;
      }.bind(this));
    },
    checkAllIds: function(idType, card) {
      if (!this[idType].length) return true;
      if (this[idType].indexOf('no-ids') >= 0 && this[idType].length === 1 && (!card.get(idType) || !card.get(idType).length)) return true;
      if (!card.get(idType)) return false;
      return this[idType].every(function(id) {
        return card.get(idType).indexOf(id) >= 0;
      }.bind(this));
    },
    checkDate: function(card) {
      var currentTime = new Date();
      if (!this.date) {
        return this.matchAll;
      } else if (this.date === 'day') {
        return this.checkDay(card, currentTime);
      } else if (this.date === 'week') {
        return this.checkWeek(card, currentTime);
      } else if (this.date === 'month') {
        return this.checkMonth(card, currentTime);
      } else if (this.date === 'overdue') {
        return card.get('dueDate') < currentTime;
      } else if (this.date === 'no-date') {
        return !card.get('dueDate');
      }
    },
    checkDay: function(card, currentTime) {
      var tomorrow = new Date(new Date().setDate(currentTime.getDate() + 1));
      return card.get('dueDate') > currentTime &&
             card.get('dueDate') < tomorrow;
    },
    checkWeek: function(card, currentTime) {
      var nextWeek = new Date(new Date().setDate(currentTime.getDate() + 7));
      return card.get('dueDate') > currentTime &&
             card.get('dueDate') < nextWeek;
    },
    checkMonth: function(card, currentTime) {
      var nextMonth = new Date(new Date().setDate(currentTime.getDate() + 30));
      return card.get('dueDate') > currentTime &&
             card.get('dueDate') < nextMonth;
    },
    parseQuery: function(query) {
      this.resetSilent();
      var params = query.replace(/@/g, '').split(',').forEach(this.parseQueryElement.bind(this));
      this.trigger('change');
    },
    parseQueryElement: function(queryEl) {
      var type = queryEl.substring(0, queryEl.indexOf(':'));
      var val = queryEl.substring(queryEl.indexOf(':') + 1);
      switch (type) {
        case 'label':
          this.labelIds.push(this.retreiveLabelId(val));
          break;
        case 'date':
          this.date = val;
          break;
        case '':
          this.memberIds.push(this.retreiveMemberId(val));
          break;
        case 'match':
          this.matchAll = true;
          break;
      }
    },
    retreiveLabelId: function(val) {
      if (val === 'none') {
        return 'no-ids'
      } else {
        return app.labels.findWhere({ name: val }).get('id');
      }
    },
    retreiveMemberId: function(val) {
      if (val === 'none') {
        return 'no-ids'
      } else {
        return app.members.findWhere({ username: val }).get('id');
      }
    },
    paramString: function() {
      var paramString = '?'
      paramString += this.addParams('labelIds', app.labels, 'name', 'label:');
      paramString += this.addParams('memberIds', app.members, 'username', '@');
      paramString += app.filter.date ? 'date:' + app.filter.date + ',' : '';
      paramString += this.matchAll ? 'match:all,' : '';
      if (paramString.length === 1) return '';
      return paramString.replace(/,$/, '');    
    },
    addParams: function(idType, collection, attr, typeName) {
      var paramString = '';
      app.filter[idType].forEach(function(id) {
        var name = (id === 'no-ids')  ? 'none' : collection.get(id).get(attr);
        paramString += (typeName + name + ',');
      });
      return paramString;
    },
    resetSilent: function() {
      this.labelIds = [];
      this.memberIds = [];
      this.date = '';
      this.matchAll = false;
    },
    reset: function() {
      this.resetSilent();
      this.trigger('change');
    },
    empty: function() {
      return !this.labelIds.length && !this.memberIds.length && !this.date;
    },
    labelIds: [],
    memberIds: [],
    matchAll: false,
  };

  _.extend(app.filter, Backbone.Events);
})()