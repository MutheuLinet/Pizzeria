$(document).ready(function() {

  $(".btn.more-pizza").hide();
  $(".btn.check-out").hide();
  $("#delivery-query").hide();
  $("#order-confirmation").hide();
  $("#grand-total").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $("#location-input").hide();
  $("#location-btn").hide();
  $("#del-confirmation").hide();


  $('.btn.order').click(function(event) {
      event.preventDefault();
      let sizeOfPizza = $(".size option:selected").val();
      let toppingsOfPizza = $(".toppings option:selected").val();
      let crustOfPizza = $(".crust option:selected").val();
      let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      let order = 1;
      let grandTotal = 0;

      $(".btn.order").hide();
      $(".btn.more-pizza").show();
      $(".btn.check-out").show();

      $("h6").append(order + ")"+ $(".size option:selected").text() + ","+ $(".crust option:selected").text() +","+$(".toppings option:selected").text() +"," +"TOTAL"+"@"+ total);

      function Pizza(size, toppings, crust, total, orderNo) {
          this.size = size;
          this.toppings = toppings;
          this.crust = crust;
          this.total = total;
          this.orderNo = orderNo;
        }

      $('.btn.more-pizza').click(function(event) {
          event.preventDefault();
          let sizeOfPizza = $(".size option:selected").val();
          let toppingsOfPizza = $(".toppings option:selected").val();
          let crustOfPizza = $(".crust option:selected").val();
          let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
          order = order + 1;
          grandTotal = grandTotal + total;
          let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

          let newHeader = ("  "+ newPizza.orderNo + ")"+ $(".size option:selected").text() +","+ $(".crust option:selected").text() + ","+$(".toppings option:selected").text()+"," +"TOTAL"+"@"+ newPizza.total);

          $("h6").append(newHeader);
      });
  });
});

    
