//Business Logic
function Pizza(name, size, topping) {
  this.name = name;
  this.size = size;
  this.topping = topping;
  this.cost = 0;
}

// User Interface Logic
$(function() {
  $("#pizza").submit(function(event){
    event.preventDefault();
    alert("it works")
  });
});
