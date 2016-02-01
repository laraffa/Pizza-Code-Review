// Business Logic
//BDD
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small") {
    return 10;
  } else if (this.size === "medium") {
  return 15;
  } else if (this.size === "large") {
return 20;
  }
}
Pizza.prototype.pizzaPrice = function() {
  var sizePrice = this.sizePrice(this.size);
  var totalPrice = sizePrice + (this.toppings * 0.50);
  return totalPrice;
  }

  //User Interface Logic
  $(document).ready(function() {
    $("#myBtn").click(function() {
      $("#myModal").modal();

      var toppings = 0;
      var toppingArray = [];
        $(".toppings:checked").each(function()  {
          toppingArray[toppings++] = parseInt($(this).val());
        });

      var size = $(".size:checked").val();
      var quantity = $("input#pizzaQuantity").val();
      var newPizza = new Pizza(toppings, size);
      var total = newPizza.pizzaPrice() * quantity;
