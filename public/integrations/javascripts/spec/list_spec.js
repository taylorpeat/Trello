describe("Lists Spec", function() {
  var lists;
  var list;
  var App1;
  var App2;
  var App3;

  beforeEach(function() {
    App.init();
    lists = App.boards.get("1").get("lists");
    list = lists.get("1");
  });

  it("list collection contains seed data", function() {
    expect(list.get("title")).toEqual("Stuff to try (this is a list)");
    expect(lists.length).toEqual(3);
  });

  it("toJSON identifies subscribed user", function() {
    App.member.set("id", "1");
    expect(list.toJSON().subscribed).toEqual(true);
  });

  it("toJSON identifies unsubscribed user", function() {
    
    expect(list.toJSON().subscribed).toEqual(false);
  });
});