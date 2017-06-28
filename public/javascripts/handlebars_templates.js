this["JST"] = this["JST"] || {};

Handlebars.registerPartial("boardDropdownBoard", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<dd data-id=\""
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background-color: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.background : depth0)) != null ? stack1.color : stack1), depth0))
    + "\"><div style=\"background-color: "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.background : depth0)) != null ? stack1.color : stack1), depth0))
    + "\"></div>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<dd data-id=\""
    + alias1(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"id","hash":{},"data":data}) : helper)))
    + "\" style=\"background-image: url(/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.background : depth0)) != null ? stack1.image : stack1), depth0))
    + "); background-size: cover\"><div style=\"background-image: url(/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.background : depth0)) != null ? stack1.image : stack1), depth0))
    + "); background-size: cover;\"></div>";
},"5":function(container,depth0,helpers,partials,data) {
    return " starred";
},"7":function(container,depth0,helpers,partials,data) {
    return "<i class=\"x-icon icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.background : depth0)) != null ? stack1.type : stack1),"color",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "<i class=\"star-icon icon"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.favorite : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></i>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recent : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></dd>";
},"useData":true}));

Handlebars.registerPartial("card", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "arch-card";
},"3":function(container,depth0,helpers,partials,data) {
    return "<i class=\"sub-icon sm-icon\"></i>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=container.lambda;

  return "<i class=\"clock-icon sm-icon "
    + alias2((helpers.dueClass || (depth0 && depth0.dueClass) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"dueClass","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.month : stack1), depth0))
    + " "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.day : stack1), depth0))
    + "</i>";
},"6":function(container,depth0,helpers,partials,data) {
    return "completed";
},"8":function(container,depth0,helpers,partials,data) {
    return "<i class=\"description-icon sm-icon\"></i>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"comment-icon sm-icon\">"
    + container.escapeExpression(((helper = (helper = helpers.totalComments || (depth0 != null ? depth0.totalComments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"totalComments","hash":{},"data":data}) : helper)))
    + "</i>";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"attachment-icon sm-icon\">"
    + container.escapeExpression(((helper = (helper = helpers.totalAttachments || (depth0 != null ? depth0.totalAttachments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"totalAttachments","hash":{},"data":data}) : helper)))
    + "</i>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<i class=\"checklist-icon sm-icon\">"
    + alias4(((helper = (helper = helpers.completedChecklistItems || (depth0 != null ? depth0.completedChecklistItems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedChecklistItems","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.checklistItems || (depth0 != null ? depth0.checklistItems : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"checklistItems","hash":{},"data":data}) : helper)))
    + "</i>";
},"16":function(container,depth0,helpers,partials,data) {
    return "<i class=\"file-icon sm-icon\"> Archived</i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><i class=\"edit-toggle edit-icon sm-icon\"></i><div class=\"cover-image\">"
    + ((stack1 = container.invokePartial(partials.coverImage,depth0,{"name":"coverImage","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><div class=\"card-info\">"
    + ((stack1 = container.invokePartial(partials.cardLabels,depth0,{"name":"cardLabels","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<p>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</p></div><div class=\"card-icons\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.renderDate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.attachments : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checklistItems : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"members\">"
    + ((stack1 = container.invokePartial(partials.cardMembers,depth0,{"name":"cardMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div></div>";
},"usePartial":true,"useData":true}));

Handlebars.registerPartial("cardLabels", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card-label "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"className","hash":{},"data":data}) : helper)))
    + " colorblindable\"></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("cardMembers", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"member-container\"><div class=\"card-member\">"
    + container.escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"initials","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("cardModalLabels", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"member-container\"><div class=\""
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"className","hash":{},"data":data}) : helper)))
    + " label colorblindable\"></div></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("copyCardItems", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input name=\"checklists\" type=\"checkbox\" checked=\"true\">Checklists <span>("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.checklists : stack1)) != null ? stack1.length : stack1), depth0))
    + ")<span></label>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input name=\"labels\" type=\"checkbox\" checked=\"true\">Labels <span>("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.labelIds : stack1)) != null ? stack1.length : stack1), depth0))
    + ")<span></label>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input name=\"members\" type=\"checkbox\" checked=\"true\">Members <span>("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.memberIds : stack1)) != null ? stack1.length : stack1), depth0))
    + ")<span></label>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input name=\"attachments\" type=\"checkbox\" checked=\"true\">Attachments <span>("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.attachments : stack1)) != null ? stack1.length : stack1), depth0))
    + ")<span></label>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label><input name=\"comments\" type=\"checkbox\" checked=\"true\">Comments <span>("
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.comments : stack1)) != null ? stack1.length : stack1), depth0))
    + ")<span></label>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.checklists : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.labelIds : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.memberIds : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.attachments : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.comments : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("coverImage", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cover : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<figure><img src=\"/"
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"src","hash":{},"data":data}) : helper)))
    + "\"></figure>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("dropdownCardPositions", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.id : depth0),(depths[1] != null ? depths[1].currentCardId : depths[1]),{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<option selected=\"selected\" value=\"\">"
    + container.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.inc || (depth0 && depth0.inc) || alias2).call(alias1,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option value=\"last-slot\">"
    + container.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.cards : depth0)) != null ? stack1.length : stack1),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.notCurrentList : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("dropdownLists", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.id : depth0),(depths[1] != null ? depths[1].currentListId : depths[1]),{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option selected class=\"small-option\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " (current)</span></option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("filterLabel", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "<li class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.className : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias3,(helpers.included || (depth0 && depth0.included) || helpers.helperMissing).call(alias3,(depth0 != null ? depth0.filteredLabels : depth0),((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.id : stack1),{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-label-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.label : depth0)) != null ? stack1.name : stack1), depth0))
    + " label (default)</li>";
},"useData":true}));

Handlebars.registerPartial("filterMember", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<li class=\"dark"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.filteredMembers : depth0),((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.id : stack1),{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-member-id=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.id : stack1), depth0))
    + "\"><div data-member-id=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" class=\"member-container\"><div class=\"card-member\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.initials : stack1), depth0))
    + "</div></div>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.fullName : stack1), depth0))
    + " ("
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.member : depth0)) != null ? stack1.username : stack1), depth0))
    + ")</li>";
},"useData":true}));

Handlebars.registerPartial("labelsDropdownLabels", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"label-list\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class=\""
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + " colorblindable\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || alias2).call(alias1,(depths[1] != null ? depths[1].labelIds : depths[1]),(depth0 != null ? depth0.id : depth0),{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"label-background "
    + alias4(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\"></div><div class=\"label-background-overlay\"></div><i class=\"edit-icon icon not-implemented\"></i></li>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<i class=\"check-icon sm-icon\"></i>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"empty\">No Results</div>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<li class=\"not-implemented\">Create a new label</li>";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.filter : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"newLabel\">Create a new \""
    + container.escapeExpression(((helper = (helper = helpers.filter || (depth0 != null ? depth0.filter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"filter","hash":{},"data":data}) : helper)))
    + "\" label</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<ul class=\"light-list\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.labels : depth0)) != null ? stack1["0"] : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<hr><li class=\"toggleColorblind\">Enable color blind friendly mode.</li></ul>";
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("membersDropdownMembers", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<ul class=\"filter-list tall\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || helpers.helperMissing).call(alias1,(depths[1] != null ? depths[1].memberIds : depths[1]),(depth0 != null ? depth0.id : depth0),{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"dark selected\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><i class=\"card-member\">"
    + alias4(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + ")</li>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"dark\" data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "><i class=\"card-member\">"
    + alias4(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + "</i>"
    + alias4(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + ")</li>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<div class=\"empty\">No Results</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.members : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(7, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("menuFilterSearchResults", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.filterLabel,depth0,{"name":"filterLabel","hash":{"filteredLabels":((stack1 = (depths[1] != null ? depths[1].filter : depths[1])) != null ? stack1.labelIds : stack1),"label":depth0},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.filterMember,depth0,{"name":"filterMember","hash":{"filteredMembers":((stack1 = (depths[1] != null ? depths[1].filter : depths[1])) != null ? stack1.memberIds : stack1),"member":depth0},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"day",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"day\">Due in the next day</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"week",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"week\">Due in the next week</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"month",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"month\">Due in the next month</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"overdue",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"overdue\">Overdue</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"no-date",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"no-date\">Has no due date</li><hr><li data-match-all=\"\""
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.matchAll : stack1),{"name":"unless","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Matches any label and any member</li><li data-match-all=\"true\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.matchAll : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Matches all labels and all members</li><hr>";
},"8":function(container,depth0,helpers,partials,data) {
    return "class=\"selected\" ";
},"10":function(container,depth0,helpers,partials,data) {
    return " class=\"selected\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<ul class=\"filter-list tall\"><li class=\"grey dark"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.labelIds : stack1),"no-ids",{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-label-id=\"no-ids\">No Labels</li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<hr><li class=\"dark"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.memberIds : stack1),"no-ids",{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-member-id=\"no-ids\"><div class=\"member-container\"><div class=\"card-member\">?</div></div>Unassigned</li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<hr></ul><ul class=\"filter-list\">"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.localFilter : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<li id='clear-filter'>Clear Filter</li></ul>";
},"usePartial":true,"useData":true,"useDepths":true}));

Handlebars.registerPartial("menuMembers", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"member-container\"><div class=\"card-member "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.admin : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + container.escapeExpression(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + "</div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "admin";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true}));

Handlebars.registerPartial("moveListDropdownBoards", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.id : depth0),(depths[1] != null ? depths[1].currentBoardId : depths[1]),{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option selected=\"selected\" class=\"small-option\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option class=\"small-option\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span></option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.boards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("moveListDropdownPositions", Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.id : depth0),(depths[1] != null ? depths[1].currentListId : depths[1]),{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "<option selected=\"selected\" value=\"\">"
    + container.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<option value=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.inc || (depth0 && depth0.inc) || alias2).call(alias1,(data && data.index),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<option value=\"\">"
    + container.escapeExpression((helpers.inc || (depth0 && depth0.inc) || helpers.helperMissing).call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.lists : depth0)) != null ? stack1.length : stack1),{"name":"inc","hash":{},"data":data}))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.sameBoard : depth0),{"name":"unless","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true}));

Handlebars.registerPartial("progressBar", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"checklist-bar\"><span>"
    + alias3((helpers.calculateProgress || (depth0 && depth0.calculateProgress) || alias2).call(alias1,(depth0 != null ? depth0.checklistItems : depth0),{"name":"calculateProgress","hash":{},"data":data}))
    + "%</span><div><div style=\"right:"
    + alias3((helpers.progressBarLength || (depth0 && depth0.progressBarLength) || alias2).call(alias1,(depth0 != null ? depth0.checklistItems : depth0),{"name":"progressBarLength","hash":{},"data":data}))
    + "%\"></div></div></div>";
},"useData":true}));

Handlebars.registerPartial("tempCard", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"card-info\">"
    + ((stack1 = container.invokePartial(partials.cardLabels,depth0,{"name":"cardLabels","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><textarea name=\"add-card\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><div class=\"members\">"
    + ((stack1 = container.invokePartial(partials.cardMembers,depth0,{"name":"cardMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true}));

this["JST"]["activitiesSection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<li class=\"activity-section\"><h2 class=\"activity-icon icon\">Activity</h2><ul class=\"horiz-list\"><li class=\"not-implemented\">Show Details</li></ul><ul class=\"modal-activity-list\"><li><div class=\"member-container\"><div class=\"card-member\">TP</div></div><h3>Taylor Peat</h3><div class=\"comment static-comment\"><span>The activities are not functional.</span></div><small>22 minutes ago - <span class=\"link\">Edit</span> - <span class=\"link\">Delete</span></small><div class=\"comment\"><label><textarea required rows=\"1\">The activities have not been implemented yet.</textarea><div><a class=\"light-button card-icon sm-icon\"></a><a class=\"light-button smiley-icon sm-icon\"></a><a class=\"light-button email-icon sm-icon\"></a></div><div><p>You haven't typed anything!</p><input type=\"submit\" class=\"button not-implemented\" value=\"Send\"><i class=\"x-icon icon\"></i></div></label></div></li><li><div class=\"member-container\"><div class=\"card-member small-size\">VR</div></div><p><span class=\"member-name\">Victor Reyes</span> changed the background of this board <small>yesterday at 4:53 PM</small></p></li><li class=\"activity-comment\"><div class=\"member-container\"><div class=\"card-member\">VR</div></div><h3>Victor Reyes</h3><div class=\"comment static-comment\"><span>Example of a comment.</span></div><small>22 minutes ago - <span class=\"link\">Edit</span> - <span class=\"link\">Delete</span></small><div class=\"comment\"><label><textarea required rows=\"1\">Example of a comment.</textarea><div><a class=\"light-button card-icon sm-icon\"></a><a class=\"light-button smiley-icon sm-icon\"></a><a class=\"light-button email-icon sm-icon\"></a></div><div><p>You haven't typed anything!</p><input type=\"submit\" class=\"button not-implemented\" value=\"Send\"><i class=\"x-icon icon\"></i></div></label></div></li></ul></li>";
},"useData":true});

this["JST"]["addOptionsDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Options<i class=\"x-icon sm-icon\"></i></h2><ul><li class='ao-members'>Members...</li><li class='ao-labels'>Labels...</li><li class='ao-position not-implemented'>Position...</li></ul>";
},"useData":true});

this["JST"]["archiveAllDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Archive All Cards in this List?<i class=\"x-icon sm-icon\"></i><i class=\"back-icon sm-icon\"></i></h2><div><p>This will remove all the cards in this list from the board. To view archived cards and bring them back to the board, click \"Menu\" > \"Archived Items.\"</p><div class=\"button\">Archive All</div></div>";
},"useData":true});

this["JST"]["archivedCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.card,depth0,{"name":"card","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<span>Send to Board</span> - <span>Delete</span>";
},"usePartial":true,"useData":true});

this["JST"]["archivedList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</i><div class=\"send-back\"><i class=\"send-icon sm-icon\"></i>Send to Board</div>";
},"useData":true});

this["JST"]["attachment"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "Remove Cover";
},"3":function(container,depth0,helpers,partials,data) {
    return "Make Cover";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<figure><img src=\"/"
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\"></figure><div><p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p><p>Added "
    + alias4((helpers.imageDate || (depth0 && depth0.imageDate) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"imageDate","hash":{},"data":data}))
    + "</p><ul class=\"horiz-list\"><li class=\"download-icon sm-icon not-implemented\">Download</li><li class=\"cover-icon sm-icon\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.cover : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</li><li class=\"x-icon sm-icon\">Delete</li><li class=\"comment-icon sm-icon not-implemented\">Comment</li></ul></div>";
},"useData":true});

this["JST"]["attachmentsSection"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"attachment-icon icon\">Attachments</h2><ul class=\"attachment-list\"></ul><ul class=\"light-list\"><li class=\"not-implemented\">Add an attachment...</li></ul>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.attachments : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["background"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span style=\"background-color:"
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + ";\"></span>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span style=\"background-image: url(/"
    + container.escapeExpression(((helper = (helper = helpers.thumb || (depth0 != null ? depth0.thumb : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"thumb","hash":{},"data":data}) : helper)))
    + ");\"><div class=\"bg-cover\">Options</div></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.type : depth0),"color",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["backgroundOptionsDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"check-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<h2>Background Options<i class=\"x-icon sm-icon\"></i></h2><ul><li class=\"title\">Display Type</li><li class=\"cover-item\">Cover"
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.size : depth0),"cover",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><li class=\"tile-item\">Tile"
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,(depth0 != null ? depth0.size : depth0),"auto",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><hr><li class=\"title\">Board Text</li><li class=\"light-item\">Light"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.darkFont : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><li class='dark-item'>Dark"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.darkFont : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><hr><a class=\"all-activity delete-bg\">Delete background</a></ul>";
},"useData":true});

this["JST"]["boardMembersDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Members<i class=\"x-icon sm-icon\"></i></h2><input type=\"text\" class=\"dropdown-input\" placeholder=\"e.g. taco@trello.com\"><p>Search for a person in Trello by name or email address, or enter an email address to invite someone new.</p><hr><p class=\"light-button not-implemented\">Invite people by giving them a special link...</p>";
},"useData":true});

this["JST"]["boardsDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<dt data-board-type=\"starred\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starredHidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"star-icon sm-icon\"></i>Starred Boards<i class=\"plus-icon icon\"></i><i class=\"dash-icon icon\"></i></dt><div>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.starredBoards : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "class=\"collapsed\"";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.boardDropdownBoard,depth0,{"name":"boardDropdownBoard","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<dt data-board-type=\"recent\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recentHidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"clock-icon sm-icon\"></i>Recent Boards<i class=\"plus-icon icon\"></i><i class=\"dash-icon icon\"></i></dt><div>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.recentBoards : depth0),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.boardDropdownBoard,depth0,{"name":"boardDropdownBoard","hash":{"recent":"true","favorite":(depth0 != null ? depth0.favorite : depth0),"id":(depth0 != null ? depth0.id : depth0),"background":(depth0 != null ? depth0.background : depth0),"title":(depth0 != null ? depth0.title : depth0)},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<dt data-board-type=\"personal\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.personalHidden : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><i class=\"trello-icon sm-icon\"></i>Personal Boards<i class=\"plus-icon icon\"></i><i class=\"dash-icon icon\"></i></dt><div>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.personalBoards : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<input type=\"text\" class=\"dropdown-input\" placeholder=\"Find boards by name...\"><dl>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.starredBoards : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.recentBoards : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.personalBoards : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</dl><ul class=\"boards-options\"><li class=\"not-implemented\">Create new board...</li><li class=\"not-implemented\">Always keep this menu open.</li><li class=\"not-implemented\">See closed boards...</li></ul>";
},"usePartial":true,"useData":true});

this["JST"]["cardModal"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<div class=\"archived-banner\"><i class=\"file-icon icon\"></i>This card is archived.</div>";
},"3":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"5":function(container,depth0,helpers,partials,data) {
    return "<li class=\"unarchive-button\"><i class=\"send-icon sm-icon\"></i>Send to board</li><li class=\"red-button\"><i class=\"minus-icon sm-icon\"></i>Delete</li>";
},"7":function(container,depth0,helpers,partials,data) {
    return "<li class=\"archive-button\"><i class=\"file-icon sm-icon \"></i>Archive</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<i class=\"x-icon icon\"></i><div class=\"cover-image\">"
    + ((stack1 = container.invokePartial(partials.coverImage,depth0,{"name":"coverImage","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<header><i class=\"card-icon icon\"></i><textarea class=\"list-title\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><p>in list <a class=\"link\">"
    + alias3((helpers.listTitle || (depth0 && depth0.listTitle) || alias2).call(alias1,(depth0 != null ? depth0.listId : depth0),{"name":"listTitle","hash":{},"data":data}))
    + "</a><i class=\"sub-icon sm-icon"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></i></p></header><section class=\"modal-main\"><ul class=\"modal-outer-list\"></ul></section><!----><aside class=\"modal-buttons\"><h2>Add</h2><ul><li class=\"member-button\"><i class=\"person-icon sm-icon\"></i>Members</li><li class=\"label-button\"><i class=\"label-icon sm-icon\"></i>Labels</li><li class=\"checklist-button\"><i class=\"checklist-icon sm-icon\"></i>Checklist</li><li class=\"date-button not-implemented\"><i class=\"clock-icon sm-icon\"></i>Due Date</li><li class=\"attachment-button not-implemented\"><i class=\"attachment-icon sm-icon\"></i>Attachment</li></ul><h2>Actions</h2><ul><li class=\"move-button\"><i class=\"forward-icon sm-icon\"></i>Move</li><li class=\"copy-button\"><i class=\"card-icon sm-icon\"></i>Copy</li><li class=\"subscribe-button\"><i class=\"sub-icon sm-icon\"></i>Subscribe<i class=\"check-icon sm-icon"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"></i></li><hr>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.archived : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul><ul class=\"light-list\"><li class=\"not-implemented\">Share and more...</li></ul></aside>";
},"usePartial":true,"useData":true});

this["JST"]["checklist"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"checklist-icon icon\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><ul class=\"horiz-list\"><li>Hide completed items</li><li>Show completed items ("
    + alias4((helpers.completedItems || (depth0 && depth0.completedItems) || alias2).call(alias1,(depth0 != null ? depth0.checklistItems : depth0),{"name":"completedItems","hash":{},"data":data}))
    + ")</li><li>Delete...</li></ul><form class=\"checklist-icon icon\"><textarea class=\"textarea-toggle\" rows=\"1\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><div><div class=\"button\" value=\"Save\">Save</div><i class=\"x-icon icon\"></i></div></form><p id=\"description-edit-options\" class=\"hidden\">You have unsaved edits on this field. <span class=\"link edit-button\">View edits</span> - <span class=\"link discard-button\">Discard</span></p>"
    + ((stack1 = container.invokePartial(partials.progressBar,depth0,{"name":"progressBar","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<ul class=\"checklist\"></ul><form><textarea placeholder=\"Add an item...\" class=\"dropdown-input focus-only\"></textarea><div><input type=\"submit\" class=\"button\" value=\"Add\"><i class=\"x-icon icon\"></i><div class=\"light-button\"><i class=\"more-icon icon\"></i></div></div></form>";
},"usePartial":true,"useData":true});

this["JST"]["checklistDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Add Checklist<i class=\"x-icon sm-icon\"></i></h2><form><label>Title</label><input type=\"text\" class=\"dropdown-input\" value=\"Checklist\"><label>Copy Items From...</label><select><option default>(none)</option></select><input type=\"submit\" class=\"button\" value=\"Add\"></form>";
},"useData":true});

this["JST"]["checklistItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "checked=\"true\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<input type=\"checkbox\" class=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><form><textarea class=\"textarea-toggle\" rows=\"1\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div><div class=\"button\" value=\"Save\">Save</div><i class=\"x-icon icon\"></i><div class=\"light-button delete-button\">Delete</div><div class=\"light-button\">Convert to Card</div><div class=\"light-button\"><i class=\"more-icon icon\"></i></div></div></form><s class=\"\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</s><p id=\"description-edit-options\" class=\"hidden\">You have unsaved edits on this field. <span class=\"link edit-button\">View edits</span> - <span class=\"link discard-button\">Discard</span></p>";
},"useData":true});

this["JST"]["closeBoardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Close Board?<i class=\"x-icon sm-icon\"></i></h2><div><p>You can re-open the board by clicking the \"Boards\" menu from the header, selecting \"View Closed Boards,\" finding the board and clicking \"Re-open.\"</p><div class=\"button not-implemented\">Close</div></div>";
},"useData":true});

this["JST"]["commentsSection"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2 class=\"comment-icon icon\">Add Comment</h2><div><div class=\"member-container\"><div class=\"card-member\">TP</div></div><div class=\"comment\"><label><textarea required rows=\"1\" placeholder=\"Write a comment...\"></textarea><div><a class=\"light-button card-icon sm-icon\"></a><a class=\"light-button smiley-icon sm-icon\"></a><a class=\"light-button email-icon sm-icon\"></a><a class=\"light-button attachment-icon sm-icon\"></a></div><div><input type=\"submit\" class=\"button not-implemented\" value=\"Send\"></div></label></div></div>";
},"useData":true});

this["JST"]["copyBoardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Copy Board<i class=\"x-icon sm-icon\"></i></h2><label>Title<input type=\"text\" class=\"dropdown-input\" placeholder='Like \"Calvinball Meetup Schedule\"...'></label><label>Team</label><p>Teams make sharing and working within a group even easier. It doesn't look like you are a member of any teams. <span class=\"link\">Create a team.</span></p><p class=\"hidden\"><i class=\"private-icon sm-icon\"></i> This board will be <strong>Private</strong>. <span class=\"link\">Change</span></p><ul class=\"privacy-list\"><li><i class=\"private-icon sm-icon\"></i>Private<i class=\"check-icon sm-icon\"></i><p>The board is private. Only people added to the board can view and edit it.</p></li><li><i class=\"people-icon sm-icon\"></i>Team<i class=\"check-icon sm-icon hidden\"></i><p>The board is visible to members of the team. Only people added to this board can edit it. The board must be added to a team to enable this.</p></li><li><i class=\"globe-icon sm-icon\"></i>Public<i class=\"check-icon sm-icon hidden\"></i><p>The board is public. it's visible to anyone with the link and will show up in search engines like Google. Only people added to the board can edit it.</p></li></ul><label><input type=\"checkbox\" checked=\"true\">Keep Cards</label><p>Activity and members will not be copied to the new board.</p><a class=\"button not-implemented\">Create</a>";
},"useData":true});

this["JST"]["copyCardDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<label>Keep...</label><fieldset class=\"checkboxes\">"
    + ((stack1 = container.invokePartial(partials.copyCardItems,depth0,{"name":"copyCardItems","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</fieldset>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Copy Card<i class=\"x-icon sm-icon\"></i></h2><form><label for=\"copy-card-title\">Title</label><textarea name=\"card-title\" class=\"dropdown-input\" id=\"copy-card-title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.title : stack1), depth0))
    + "</textarea>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.currentCard : depth0)) != null ? stack1.hasCopyItems : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<label>Copy to...</label><fieldset class=\"select-menus\"><label class=\"dropdown-select-label\"><span>Board</span><select name=\"board-title\" id=\"board-title\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.moveListDropdownBoards,depth0,{"name":"moveListDropdownBoards","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><label class=\"dropdown-select-label\"><span>List</span><select name=\"list-title\" id=\"list-title-select\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.dropdownLists,depth0,{"name":"dropdownLists","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><label class=\"dropdown-select-label\"><span>Position</span><select name=\"card-position\" id=\"card-positions\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.dropdownCardPositions,depth0,{"name":"dropdownCardPositions","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label></fieldset><input type=\"submit\" class=\"button\" value=\"Create Card\"></form>";
},"usePartial":true,"useData":true});

this["JST"]["copyListDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>Copy List<i class=\"x-icon sm-icon\"></i><i class=\"back-icon sm-icon\"></i></h2><form><label for=\"copy-title\">Name</label><textarea name=\"copy-title\" class=\"dropdown-input\" id=\"copy-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea><input type=\"submit\" class=\"button\" value=\"Create List\"></form>";
},"useData":true});

this["JST"]["createBoardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Create<i class=\"x-icon sm-icon\"></i></h2><ul><li class=\"not-implemented\">Create Board...<p>A board is a collection of cards ordered in a list of lists. Use it to manage a project, track a collection, or organize anything.</p></li><li class=\"not-implemented\">Create Personal Team...<p>A team is a group of boards and people. Use it to group boards in your company, team, or family.</p></li><li class=\"not-implemented\">Create Business Team...<p>With Business Class, your team has more security, administrative controls and superpowers.</p></li></ul>";
},"useData":true});

this["JST"]["deleteCardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Delete Card?<i class=\"x-icon sm-icon\"></i></h2><div><p>All actions will be removed from the activity feed and you won't be able to re-open the card. There is no undo.</p><div class=\"button\">Delete</div></div>";
},"useData":true});

this["JST"]["detailsSection"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"members-section\"><h3>Members</h3>"
    + ((stack1 = container.invokePartial(partials.cardMembers,depth0,{"name":"cardMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"member-container\"><i class=\"plus-icon sm-icon\"></i></div></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<li class=\"labels-section\"><h3>Labels</h3>"
    + ((stack1 = container.invokePartial(partials.cardModalLabels,depth0,{"name":"cardModalLabels","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"member-container\"><i class=\"plus-icon sm-icon\"></i></div></li>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return "<li class=\"due-date-section\"><h3>Due Date</h3><div id=\"dueDateDisplay\" class=\""
    + alias3((helpers.dueClass || (depth0 && depth0.dueClass) || alias2).call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"dueClass","hash":{},"data":data}))
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"><input id=\"dueDateCheckbox\" type=\"checkbox\" class=\"checkbox\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.month : stack1), depth0))
    + " "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.day : stack1), depth0))
    + " at "
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.time : stack1), depth0))
    + " <span>"
    + alias3((helpers.dueStatus || (depth0 && depth0.dueStatus) || alias2).call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"dueStatus","hash":{},"data":data}))
    + "</span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return " completed";
},"8":function(container,depth0,helpers,partials,data) {
    return "checked";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"modal-details-list\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.members : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li></ul><form class=\"description\"><p>Description</p><span id=\"description-edit\" class=\"link\">Edit</span><p class=\"textarea-overlay\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><textarea class=\"textarea-toggle\" rows=\"1\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div><div class=\"button\" value=\"Save\">Save</div><i class=\"x-icon icon\"></i></div><p id=\"description-edit-options\" class=\"hidden\">You have unsaved edits on this field. <span class=\"link\">View edits</span> - <span class=\"link\">Discard</span></p></form>";
},"usePartial":true,"useData":true});

this["JST"]["header"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"3":function(container,depth0,helpers,partials,data) {
    return "</li><li class=\"private private-icon icon\">Private</li>";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.visibility : stack1),"team",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    return "</li><li class=\"private people-icon icon\">Team</li>";
},"8":function(container,depth0,helpers,partials,data) {
    return "</li><li class=\"private globe-icon icon\">Public</li>";
},"10":function(container,depth0,helpers,partials,data) {
    return "<div class=\"subscribed\"><i class=\"sub-icon sm-icon\"></i>Subscribed</div>";
},"12":function(container,depth0,helpers,partials,data) {
    return "<div class=\"filter-header\"><i class=\"filter-icon sm-icon\"></i><span>Filtering is on.</span><i class=\"x-icon sm-icon\"></i></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<ul><li id=\"title\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.title : stack1), depth0))
    + "</li><li class=\"star-icon icon"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.favorite : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.visibility : stack1),"private",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</ul><div class=\"menu\"><i class=\"more-icon sm-icon\"></i>Show Menu</div>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.board : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.filter : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["infoDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>Information<i class=\"x-icon sm-icon\"></i></h2><figure><img src=\"/"
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><figcaption>Join A Webinar To Take Your Productivity To The Next Level</figcaption></figure><p class=\"not-implemented\">Get a new tip.</p><hr><ul><li>Tour</li><li class=\"not-implemented\">Pricing</li><li class=\"not-implemented\">Apps</li><li class=\"not-implemented\">Blog</li><li class=\"not-implemented\">More...</li></ul>";
},"useData":true});

this["JST"]["labelsDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"back-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Labels<i class=\"x-icon sm-icon\"></i>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.backArrow : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2><div><input type=\"text\" class=\"dropdown-input\" placeholder=\"Search labels...\"><div class=\"labels-search-results\">"
    + ((stack1 = container.invokePartial(partials.labelsDropdownLabels,depth0,{"name":"labelsDropdownLabels","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div></div>";
},"usePartial":true,"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"sub-icon sm-icon\"></i>";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"add-dropdown add-top active-card\"><div class=\"card\">"
    + ((stack1 = container.invokePartial(partials.tempCard,(depth0 != null ? depth0.tempCard : depth0),{"name":"tempCard","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-dropdown add-top\"><div class=\"card\">";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"add-dropdown add-bottom active-card\"><div class=\"card\">"
    + ((stack1 = container.invokePartial(partials.tempCard,(depth0 != null ? depth0.tempCard : depth0),{"name":"tempCard","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "<div class=\"add-dropdown add-bottom\"><div class=\"card\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing;

  return "<div class=\"list-background\"><div class=\"list\"><a class=\"more-icon sm-icon\" href=\"\"></a>"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div><input type=\"text\" class=\"list-title\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.title : stack1), depth0))
    + "\"></div>"
    + ((stack1 = helpers["if"].call(alias1,(helpers.topTempCardSlot || (depth0 && depth0.topTempCardSlot) || alias4).call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"topTempCardSlot","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><a class=\"button\">Add</a><i class=\"x-icon icon\"></i><div class=\"add-options\"><span>...</span></div></div><div id=\"cards-container\" data-id=\"list-"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.list : depth0)) != null ? stack1.id : stack1), depth0))
    + "-cards\"></div>"
    + ((stack1 = helpers["if"].call(alias1,(helpers.botTempCardSlot || (depth0 && depth0.botTempCardSlot) || alias4).call(alias1,(depth0 != null ? depth0.list : depth0),{"name":"botTempCardSlot","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "</div><a class=\"button\">Add</a><i class=\"x-icon icon\"></i><div class=\"add-options\"><span>...</span></div></div><div class=\"add-card-toggle\" data-position=\"bottom\">Add a card...</div></div></div>";
},"usePartial":true,"useData":true});

this["JST"]["listActionsDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"check-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>List Actions<i class=\"x-icon sm-icon\"></i></h2><ul><li class=\"la-add-card\" data-position=\"top\">Add Card...</li><li class=\"la-copy-list\">Copy List...</li><li class=\"la-move-list\">Move List...</li><li class=\"la-subscribe selected\">Subscribe"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><hr><li class=\"la-move-all\">Move All Cards in This List...</li><li class=\"la-archive-all\">Archive All Cards in This List...</li><hr><li class=\"la-archive-one\">Archive This List</li></ul>";
},"useData":true});

this["JST"]["lists"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"list-container\" class=\"list-container\"><div id=\"existing-lists\" class=\"existing-lists\"></div><div id=\"new-list\" class=\"new-list\"><span>Add a list...</span><input type=\"text\" placeholder=\"Add a list...\"><div><input type=\"submit\" class=\"button\" value=\"Save\"><i class=\"x-icon icon\"></i></div></div></div>";
},"useData":true});

this["JST"]["membersDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"back-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Members<i class=\"x-icon sm-icon\"></i>"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.backArrow : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</h2><div><input type=\"text\" class=\"dropdown-input\" placeholder=\"Search members\"><div class=\"members-search-results\">"
    + ((stack1 = container.invokePartial(partials.membersDropdownMembers,depth0,{"name":"membersDropdownMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div></div>";
},"usePartial":true,"useData":true});

this["JST"]["menu"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i>";
},"useData":true});

this["JST"]["menuArchived"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i><h1>Archive</h1><div class=\"menu-contents\"><input class=\"dropdown-input\" placeholder=\"Search archive...\"><a class=\"light-button\">Switch to <span>lists</span><span>cards</span></a><ul class=\"archived-content-list\"></ul><div class='no-results'>No archived cards</div></div>";
},"useData":true});

this["JST"]["menuArchivedContent"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"archived-cards-list\"></ul>";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class='no-results'>No archived cards</div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.lists : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.filter : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["menuBackgrounds"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i><h1>Change Background</h1><div class=\"menu-contents\"><ul id=\"colors\" class=\"bg-samples\"></ul><h3>Photos</h3><ul id=\"images\" class=\"bg-samples\"></ul><h3>Patterns and Textures</h3><ul id=\"patterns\" class=\"bg-samples\"></ul><h3>Custom</h3><ul class=\"bg-samples locked\">Get <span class=\"private-icon icon not-implemented\">Business Class.</span></ul></div>";
},"useData":true});

this["JST"]["menuFilter"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " selected";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.filterLabel,depth0,{"name":"filterLabel","hash":{"filteredLabels":((stack1 = (depths[1] != null ? depths[1].filter : depths[1])) != null ? stack1.labelIds : stack1),"label":depth0},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.filterMember,depth0,{"name":"filterMember","hash":{"filteredMembers":((stack1 = (depths[1] != null ? depths[1].filter : depths[1])) != null ? stack1.memberIds : stack1),"member":depth0},"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "class=\"selected\" ";
},"9":function(container,depth0,helpers,partials,data) {
    return " class=\"selected\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i><h1>Filter Cards</h1><div class=\"menu-contents\"><input class=\"dropdown-input\"><p>Type to filter by term or search for labels, members, or due times.</p><hr><div class=\"filter-search-results\"><ul class=\"filter-list tall\"><li class=\"grey dark"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.labelIds : stack1),"no-ids",{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-label-id=\"no-ids\">No Labels</li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<hr><li class=\"dark"
    + ((stack1 = helpers["if"].call(alias1,(helpers.included || (depth0 && depth0.included) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.memberIds : stack1),"no-ids",{"name":"included","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-member-id=\"no-ids\"><div class=\"member-container\"><div class=\"card-member\">?</div></div>Unassigned</li>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.members : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<hr></ul><ul class=\"filter-list\"><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"day",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"day\">Due in the next day</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"week",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"week\">Due in the next week</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"month",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"month\">Due in the next month</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"overdue",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"overdue\">Overdue</li><li "
    + ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.date : stack1),"no-date",{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "data-date=\"no-date\">Has no due date</li><hr><li data-match-all=\"\""
    + ((stack1 = helpers.unless.call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.matchAll : stack1),{"name":"unless","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Matches any label and any member</li><li data-match-all=\"true\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.filter : depth0)) != null ? stack1.matchAll : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">Matches all labels and all members</li><hr><li id='clear-filter'>Clear Filter</li></ul></div></div>";
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["menuMain"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i><h1>Menu</h1><div class=\"menu-contents\"><div class=\"members\">"
    + ((stack1 = container.invokePartial(partials.menuMembers,depth0,{"name":"menuMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><div class=\"add-members\"><i class=\"add-icon sm-icon\"></i>Add Members...</div><hr><ul class=\"menu-list\"><li class=\"background-item\">Change Background</li><li class=\"filter-icon menu-icon\">Filter Cards</li><li class=\"power-icon menu-icon not-implemented\">Power-Ups</li><li class=\"stickers-icon menu-icon not-implemented\">Stickers</li><li class=\"more-icon menu-icon\">More</li><hr><li class=\"activity-icon menu-icon not-implemented\">Activity</li></ul><ul class=\"activity-list\"><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> changed the background of this board <small>yesterday at 4:53 PM</small></p></li><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> sent <span class=\"link\">Use the + in the top menu to make your first board now.</span> to the board <small>4 hours ago</small></p></li><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> archived <span class=\"link\">Use the + in the top menu to make your first board now.</span> <small>4 hours ago</small></p></li><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> changed the background of this board <small>5 hours ago</small></p></li><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> changed the background of this board <small>6 hours ago</small></p></li><li><i class=\"member-icon\"></i><p><span class=\"member-name\">Taylor Peat</span> changed the background of this board <small>yesterday at 10:23 PM</small></p></li></ul><a class=\"all-activity not-implemented\">View all activity...</a></div>";
},"usePartial":true,"useData":true});

this["JST"]["menuMore"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"check-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<i class=\"back-icon icon\"></i><i class=\"x-icon icon\"></i><h1>More</h1><div class=\"menu-contents\"><ul class=\"menu-list\"><li class=\"gear-icon menu-icon not-implemented\">Settings</li><li class=\"label-icon menu-icon not-implemented\">Labels</li><li class=\"file-icon menu-icon\">Archived Items</li><hr><li class=\"email-icon menu-icon not-implemented\">Email-to-board Settings</li><li class=\"sub-icon menu-icon\">Subscribe"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><li class=\"trello-icon menu-icon\">Copy Board</li><li class=\"export-icon menu-icon not-implemented\">Print and Export</li><hr><li class=\"no-icon menu-icon\">Close Board...</li><hr></ul><div class=\"board-link\"><span>Link to this board</span><input type=\"text\" value=\"https://trello.com/b/Hw2h7nDr\"><p class=\"private-icon sm-icon\">Private. Only visible to members on the board.</p></div></div>";
},"useData":true});

this["JST"]["moveAllDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,(helpers.equal || (depth0 && depth0.equal) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.id : depth0),((stack1 = (depths[1] != null ? depths[1].currentList : depths[1])) != null ? stack1.id : stack1),{"name":"equal","hash":{},"data":data}),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"inactive\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + " (current)</li>";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + ">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h2>Move All Cards in List<i class=\"x-icon sm-icon\"></i><i class=\"back-icon sm-icon\"></i></h2><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.lists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true,"useDepths":true});

this["JST"]["moveCardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Move Card<i class=\"x-icon sm-icon\"></i></h2><form><label class=\"dropdown-select-label\"><span>Board</span><select name=\"board-title\" id=\"board-title\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.moveListDropdownBoards,depth0,{"name":"moveListDropdownBoards","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><label class=\"dropdown-select-label\"><span>List</span><select name=\"list-title\" id=\"list-title-select\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.dropdownLists,depth0,{"name":"dropdownLists","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><label class=\"dropdown-select-label\"><span>Position</span><select name=\"card-position\" id=\"card-positions\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.dropdownCardPositions,depth0,{"name":"dropdownCardPositions","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><input type=\"submit\" class=\"button\" value=\"Move\"></form>";
},"usePartial":true,"useData":true});

this["JST"]["moveListDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Move List<i class=\"x-icon sm-icon\"></i><i class=\"back-icon sm-icon\"></i></h2><form><label class=\"dropdown-select-label\"><span>Board</span><select name=\"board-titles\" id=\"board-titles\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.moveListDropdownBoards,depth0,{"name":"moveListDropdownBoards","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><label class=\"dropdown-select-label\"><span>Position</span><select name=\"board-positions\" id=\"board-positions\" class=\"dropdown-select\">"
    + ((stack1 = container.invokePartial(partials.moveListDropdownPositions,depth0,{"name":"moveListDropdownPositions","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</select></label><input type=\"submit\" class=\"button\" value=\"Move\"></form>";
},"usePartial":true,"useData":true});

this["JST"]["nav"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul><li class=\"boards trello-icon icon\"><span>Boards</span></li><li class=\"search-container\"><div class=\"search search-icon icon\"></div><div class=\"active-search\"><div><input type=\"text\"></input></div><i class=\"x-icon icon\"></i><i class=\"goto-icon icon\"></i></div></li></ul><h1>Trello</h1><ul class=\"user-info\"><li class=\"send-icon icon\"></li><li class=\"create-icon icon\"></li><li class=\"split-button-1\">"
    + alias4(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + "</li><li class=\"split-button-2\">"
    + alias4(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fullName","hash":{},"data":data}) : helper)))
    + "</li><li class=\"info-icon icon\"></li><li class=\"notifications-icon icon\"></li></ul>";
},"useData":true});

this["JST"]["notificationsDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Notifications<i class=\"x-icon sm-icon\"></i></h2><div><i class=\"clock-icon icon\"></i><p><span class=\"link\">Add all the cards and lists you need.</span> on <span class=\"link\">My Title</span> was due June 1 at 12:00 PM <small>June 1 at 12:03 PM</small></p></div><ul><li class=\"not-implemented\">See All Notifications</li><li class=\"not-implemented\">Change Notification Email Frequency</li><li class=\"not-implemented\">Allow Desktop Notifications</li></ul>";
},"useData":true});

this["JST"]["privateDropdown"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<i class=\"check-icon sm-icon\"></i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<h2>Change Visibility<i class=\"x-icon sm-icon\"></i></h2><ul class=\"privacy-list\"><li data-visibility=\"private\"><i class=\"private-icon sm-icon\"></i>Private"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["private"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>The board is private. Only people added to the board can view and edit it.</p></li><li data-visibility=\"team\"><i class=\"people-icon sm-icon\"></i>Team"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.team : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>The board is visible to members of the team. Only people added to this board can edit it. The board must be added to a team to enable this.</p></li><li data-visibility=\"public\"><i class=\"globe-icon sm-icon\"></i>Public"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["public"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<p>The board is public. it's visible to anyone with the link and will show up in search engines like Google. Only people added to the board can edit it.</p></li></ul>";
},"useData":true});

this["JST"]["profileDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2>"
    + alias4(((helper = (helper = helpers.initials || (depth0 != null ? depth0.initials : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"initials","hash":{},"data":data}) : helper)))
    + " ("
    + alias4(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"username","hash":{},"data":data}) : helper)))
    + ")<i class=\"x-icon sm-icon\"></i></h2><ul><li class=\"not-implemented\">Profile</li><li class=\"not-implemented\">Cards</li><li class=\"not-implemented\">Settings</li><hr><li class=\"not-implemented\">Help</li><li class=\"not-implemented\">Shortcuts</li><li class=\"not-implemented\">Change Langauge...</li><hr><li class=\"not-implemented\">Log Out</li></ul>";
},"useData":true});

this["JST"]["quickEdit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cover : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img src=\"/"
    + container.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"src","hash":{},"data":data}) : helper)))
    + "\">";
},"4":function(container,depth0,helpers,partials,data) {
    return "<i class=\"sub-icon sm-icon\"></i>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<i class=\"clock-icon sm-icon overdue\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.month : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.renderDate : depth0)) != null ? stack1.day : stack1), depth0))
    + "</i>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<i class=\"description-icon sm-icon\"></i>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"comment-icon sm-icon\">"
    + container.escapeExpression(((helper = (helper = helpers.totalComments || (depth0 != null ? depth0.totalComments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"totalComments","hash":{},"data":data}) : helper)))
    + "</i>";
},"12":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"attachment-icon sm-icon\">"
    + container.escapeExpression(((helper = (helper = helpers.totalAttachments || (depth0 != null ? depth0.totalAttachments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"totalAttachments","hash":{},"data":data}) : helper)))
    + "</i>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<i class=\"checklist-icon sm-icon\">"
    + alias4(((helper = (helper = helpers.completedChecklists || (depth0 != null ? depth0.completedChecklists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"completedChecklists","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.totalChecklists || (depth0 != null ? depth0.totalChecklists : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalChecklists","hash":{},"data":data}) : helper)))
    + "</i>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"card\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.attachments : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class=\"card-info\">"
    + ((stack1 = container.invokePartial(partials.cardLabels,depth0,{"name":"cardLabels","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div><form id=\"quickEditForm\"><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</textarea></form><div class=\"card-icons\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.renderDate : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.attachments : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.checklists : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class=\"members\">"
    + ((stack1 = container.invokePartial(partials.cardMembers,depth0,{"name":"cardMembers","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div></div><input form=\"quickEditForm\" type=\"submit\" class=\"button\" value=\"Save\"><aside><a class=\"label-icon sm-icon\">Edit Labels</a><a class=\"person-icon sm-icon\">Change Members</a><a class=\"forward-icon sm-icon\">Move</a><a class=\"card-icon sm-icon\">Copy</a><a class=\"clock-icon sm-icon not-implemented\">Change Due Date</a><a class=\"file-icon sm-icon\">Archive</a></aside>";
},"usePartial":true,"useData":true});

this["JST"]["renameBoardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h2>Rename Board<i class=\"x-icon sm-icon\"></i></h2><label>Name</label><input type=\"text\" class=\"dropdown-input\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\"><div class=\"button\">Rename</div>";
},"useData":true});

this["JST"]["resetBoardDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Reset Board?<i class=\"x-icon sm-icon\"></i></h2><div><p>Board will revert to the default lists and cards.</p><div class=\"button\">Reset Board</div></div>";
},"useData":true});

this["JST"]["searchDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Saved Searches</h1><div> <p class=\"light-button\">My Cards <span>@me</span></p></div><p>Refine your search with operators like @member, #label, is:archived, and has:attachments. <span class=\"link\">Learn more...</span></p><h1>Looking for help using Trello?</h1><p>Visit <span class=\"link\">our help site</span> or read the <span class=\"link\">getting started guide</span></p>";
},"useData":true});

this["JST"]["unsubscribeDropdown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h2>Unsubscribe?<i class=\"x-icon sm-icon\"></i></h2><div><p>You can re-subscribe via the board menu.</p><div class=\"button\">Unsubscribe</div></div>";
},"useData":true});