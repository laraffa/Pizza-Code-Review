
describe('Pizza', function() {
  it("creates a new pizza that describes for the following properties", function() {
    var testPizza = new Pizza(1, "large");
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.equal(1);
  });
  });
