//Business Logic
function Pizza(name, size, topping) {
  this.name = name;
  this.size = size;
  this.toppings = topping;
  this.cost = 0;
}

// function Topping(topping) {
//   this.topping = topping;
// }

Pizza.prototype.pizzaSizeCost = function () {
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

// User Interface Logic
$(function() {
  $("#pizza").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedSize = $("#size").val();
    var inputtedToppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      inputtedToppings.push(topping);
    })
    var pizza = new Pizza(inputtedName, inputtedSize, inputtedToppings);
    console.log(pizza);
    pizza.pizzaSizeCost();
    var pizzaCost = pizza.cost;
    $("span#cost").text("$" + pizzaCost);
    $("span#nameOutput").text(inputtedName + ", ")
    $("#output").show();
    $(".clearFields").hide();
    resetFields();
  });

  function resetFields() {
    $("#name").val("");
    $("#size").val("");
    $("#topping").val("");
  };
});
