describe("Cards Spec", function() {
  var cards;
  var card;

  beforeEach(function() {
    app.init();
    lists = app.boards.get("1").get("lists");
    list = lists.get("1");
  });

  it("list collection contains seed data", function() {
    expect(list.get("title")).toEqual("Stuff to try (this is a list)");
    expect(lists.length).toEqual(3);
  });

  it("toJSON identifies subscribed user", function() {
    app.member.set("id", "1");
    expect(list.toJSON().subscribed).toEqual(true);
  });

  it("toJSON identifies unsubscribed user", function() {
    app.member.set("id", "100");
    expect(list.toJSON().subscribed).toEqual(false);
  })
});