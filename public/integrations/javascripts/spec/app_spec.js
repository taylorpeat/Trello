describe("App Spec", function() {
  beforeEach(function() {
    app.init();
  });

  it("App is defined", function() {
    expect(app).toBeDefined();
  });

  it("Seed data exists", function () {
    expect(seedLabels).toContain({ id: "1", labelClass: "green", })
  });

  it("App has seed data", function() {
    expect(app.members).toBeDefined();
    expect(app.boards.length).toEqual(2);
    expect(app.boards.get("1").get("title")).toEqual("My Title")
  });
});