//Business Logic
function Pizza(name, size, topping) {
  this.name = name;
  this.size = size;
  this.toppings = [topping];
  this.cost = 0;
}

// function Topping(topping) {
//   this.topping = topping;
// }

Pizza.prototype.pizzaSizeCost = function () {
  debugger;
  if(this.size !== "Small" && this.size !== "Medium" && this.size !== "Large") {
    alert("Please select Size");
  } else if (this.size === "Small") {
    this.cost += 10;
  } else if (this.size === "Medium") {
    this.cost += 13;
  } else {
    this.cost += 16;
  }
    this.cost = this.cost + (this.toppings.length * 1.5)
};

// Pizza.prototype.pizzaToppingCost = function () {
//   for (index = 0; index < this.toppings.length; index ++) {
//     this.cost = this.cost + 2;
//   }
// };

// User Interface Logic
$(function() {
  $("#pizza").submit(function(event){
    event.preventDefault();
    debugger;
    var inputtedName = $("#name").val();
    var inputtedSize = $("#size").val();
    var inputtedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
    })
    var pizza = new Pizza(inputtedName, inputtedSize, inputtedToppings);
    console.log(pizza);

  //   $("#topping").each(function() {
  //    var secondTopping = $(this).find("#topping").val();
  //    console.log(secondTopping);
  //   //  var newTopping = new Topping(secondTopping);
  //    pizza.toppings.push(topping);
  //  });

    pizza.pizzaSizeCost();
    // pizza.pizzaToppingCost();
    var pizzaCost = pizza.cost;
    $("span#cost").text("$" + pizzaCost);
    $("span#nameOutput").text(inputtedName + ", ")
    $("#output").show();
    $(".clearFields").hide();
    resetFields();
  });

  $("#moreToppings").click(function(){
    $("#pizzaToppings").append('<div id="topping">' +
                                '<div class="clearFields">' +
                                  '<div class="form-group">' +
                                    '<label for="pizzaSize">Select Pizza Topping:</label>' +
                                    '<input id="name" class="form-control" type="text" placeholder="Enter Topping">' +
                                  '</div>' +
                                '</dive>' +
                              '</div>');
  });

  function resetFields() {
    $("#name").val("");
    $("#size").val("");
    $("#topping").val("");
  };
});
