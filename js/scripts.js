//Business Logic
function Pizza(name, size, topping) {
  this.name = name;
  this.size = size;
  this.topping = [topping];
  this.cost = 0;
}

Pizza.prototype.pizzaCost = function () {
  var cost = 0;

};

// User Interface Logic
$(function() {
  $("#pizza").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedSize = $("#size").val();
    var inputtedTopping = $("#topping").val();
    var pizza = new Pizza(inputtedName, inputtedSize, inputtedTopping);
    var pizzaCost = pizza.pizzaCost();
    console.log(inputtedName);
    console.log(inputtedSize);
    console.log(inputtedTopping);
    console.log(pizza);
    console.log(pizza.topping);
    $
  });
});
