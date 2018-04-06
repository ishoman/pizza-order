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
  } else if (this.size === "Medium") {
    this.cost += 13;
  } else if (this.size === "Large") {
    this.cost += 16;
  }
};

Pizza.prototype.pizzaToppingCost = function () {
  for (index = 0; index < this.topping.length; index ++) {
    this.cost = this.cost + 1.5;
  }
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
    pizza.pizzaToppingCost();
    var pizzaCost = pizza.cost;
    $("span#cost").text("$" + pizzaCost + "0");
    $("span#nameOutput").text(inputtedName + ", ")
    $("#output").show();
  });

  $("#moreToppings").click(function(){
    $("#add").show();
    $(".new-topping").append('<div class="new-topping">' +
                                  '<label for="pizzaSize">Select Pizza Topping:</label>' +
                                  '<select class="form-control">' +
                                    '<option></option>' +
                                    '<option>Pepperoni</option>' +
                                    '<option>Sausage</option>' +
                                    '<option>Pineapple</option>' +
                                    '<option>Canadian Bacon</option>' +
                                  '</select'> +
                                  '</div>');
  });
});
