Handlebars.registerHelper('inc', function(num) {
  return +num + 1;
});

Handlebars.registerHelper('listOpenings', function(lists) {
  var listOpenings;
  if (app.board.get("lists").models[0] && lists[0] && app.board.get("lists").models[0].get("id") !== lists[0].id ) {
    listOpenings = lists.concat([{}]);
  } else {
    listOpenings = lists;
  }
  return listOpenings;
});

Handlebars.registerHelper('equal', function(obj1, obj2) {
  return obj1 === obj2;
});

Handlebars.registerHelper('included', function(arr, item) {
  return arr && arr.indexOf(item) >= 0;
});

Handlebars.registerHelper('topTempCardSlot', function(list) {
  return list.id === app.tempCard.get('listId') && app.tempCard.get('listSlot') === 1;
});

Handlebars.registerHelper('botTempCardSlot', function(list) {
  return list.id === app.tempCard.get('listId') && app.tempCard.get('listSlot') > 1;
});

Handlebars.registerHelper('listTitle', function(listId) {
  return app.board.get('lists').get(listId).get('title');
});

Handlebars.registerHelper('dueClass', function(date) {
  var diff = (date - new Date()) / (1000 * 60 * 60 * 24);
  if (diff < -1) {
    return "overdue";
  } else if (diff < 0) {
    return "overdue-recent";
  } else if (diff < 1) {
    return "due-soon";
  } else {
    return "due-later";
  }
});

Handlebars.registerHelper('dueStatus', function(date) {
  var diff = (date - new Date()) / (1000 * 60 * 60 * 24);
  if (diff < -1) {
    return "(past due)";
  } else if (diff < 0) {
    return "(recently past due!)";
  } else if (diff < 1) {
    return "(due soon)";
  }
});

Handlebars.registerHelper('imageDate', function(date) {
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = MONTHS[date.getMonth()];
  var amPm;
  var hour = date.getHours();
  var hrStr;
  var minStr = date.getMinutes() + "";
  var time;
  if (minStr.length === 1) minStr = "0" + minStr;
  if (hour === 0 || hour == 12) {
    hrStr = "12";
  } else if (hour < 12) {
    hrStr = hour + "";
  } else {
    hrStr = (hour - 12) + "";
  }
  amPm = hour < 12 ? "AM" : "PM";
  time = hrStr + ":" + minStr + " " + amPm;
  return month + " " + date.getDay() + ", " + date.getFullYear() + " at " + time;
});

Handlebars.registerHelper('calculateProgress', function(checklistItems) {
  return completionPercentage(checklistItems);
});

Handlebars.registerHelper('progressBarLength', function(checklistItems) {
  return (100 - completionPercentage(checklistItems));
});

function completionPercentage(checklistItems) {
  var completedChecklistItems = checklistItems.filter(function(checklistItem) {
    return checklistItem.completed;
  });
  return Math.round(completedChecklistItems.length * 100 / checklistItems.length) || 0;
};

Handlebars.registerHelper('completedItems', function(checklistItems) {
  var completedChecklistItems = checklistItems.filter(function(checklistItem) {
    return checklistItem.completed;
  });
  return completedChecklistItems.length;
});


