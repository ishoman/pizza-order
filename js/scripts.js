//Business Logic
function Pizza(name, size, topping) {
  this.name = name;
  this.size = size;
  this.topping = [topping];
  this.cost = 0;
}

Pizza.prototype.pizzaSizeCost = function () {
  if(this.size !== "Small" && this.size !== "Medium" && this.size !== "Large") {
    alert("Please select Size");
  } else if (this.size === "Small") {
    this.cost += 10;
  } else if (pizza.size === "Medium") {
    this.cost += 13;
  } else if (pizza.size === "Large") {
    this.cost += 16;
  }
  // console.log(cost);
};

// User Interface Logic
$(function() {
  $("#pizza").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedSize = $("#size").val();
    var inputtedTopping = $("#topping").val();
    var pizza = new Pizza(inputtedName, inputtedSize, inputtedTopping);
    pizza.pizzaSizeCost();
    var pizzaCost = pizza.cost;
  
  });
});
