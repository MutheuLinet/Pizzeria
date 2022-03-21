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
      let chickenToppings = $('input[name="chicken"]:checked').val()
      let beefToppings = $('input[name="beef"]:checked').val()
      let pepToppings = $('input[name="pep"]:checked').val()
      let totToppings = ~~parseInt(chickenToppings) + ~~parseInt(beefToppings) + ~~parseInt(pepToppings);

      let crustOfPizza = $(".crust option:selected").val();
      let total = parseInt(sizeOfPizza) + parseInt(totToppings) + parseInt(crustOfPizza);
      let order = 1;
      let grandTotal = 0;
      //adjustments for size of pizza
      if (sizeOfPizza === "400"){
        total += 200; //crust (+100) & toppings(+100) adjustment for medium pizza
      } else if (sizeOfPizza === "600"){
        total += 400; //crust (+200) & toppings (+200) adjustment for large pizza
      };

      $(".btn.order").hide();
      $(".btn.more-pizza").show();
      $(".btn.check-out").show();

      $("h6").append(order + ")"+ $(".size option:selected").text() + ","+ $(".crust option:selected").text() +","+$('input[id="chicken"]:checked').serialize() +" "+$('input[id="beef"]:checked').serialize() +" " + $('input[id="pep"]:checked').serialize()+" " +"TOTAL"+"@"+ total);


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
          // let toppingsOfPizza = $(".toppings option:selected").val();
          let chickenToppings = $('input[name="chicken"]:checked').val()
          let beefToppings = $('input[name="beef"]:checked').val()
          let pepToppings = $('input[name="pep"]:checked').val()
          let totToppings = ~~parseInt(chickenToppings) + ~~parseInt(beefToppings) + ~~parseInt(pepToppings);
          let crustOfPizza = $(".crust option:selected").val();
          let total = parseInt(sizeOfPizza) + parseInt(totToppings) + parseInt(crustOfPizza);
                //adjustments for size of pizza
          if (sizeOfPizza === "400"){
            total += 200; //crust (+100) & toppings(+100) adjustment for medium pizza
          } else if (sizeOfPizza === "600"){
            total += 400; //crust (+200) & toppings (+200) adjustment for large pizza
          };

          order = order + 1;
          grandTotal = grandTotal + total;

          let newPizza = new Pizza(sizeOfPizza, totToppings, crustOfPizza, total, order);

          let newHeader = ("  "+ newPizza.orderNo + ")"+ $(".size option:selected").text() +","+ $(".crust option:selected").text() + ","+$('input[id="chicken"]:checked').serialize() +" "+$('input[id="beef"]:checked').serialize() +" " + $('input[id="pep"]:checked').serialize()+" " +"TOTAL"+"@"+ newPizza.total);

          $("h6").append(newHeader);
      });
        $(".btn.check-out").click(function() {
          $(".btn.order").hide();
          $(".btn.more-pizza").hide();
          $(".btn.check-out").hide();
          $("#grand-total").show();

          $("#delivery-query").show();
          $(".btn.yes").show();
          $(".btn.no").show();
          $("#order-confirmation").hide();      
          $("#location-input").hide();
          $("#location-btn").hide();

          grandTotal = grandTotal + total;
    
          $("#grand-total span").html(grandTotal);
        });
    
        $(".btn.yes").click(function() {
          $("#delivery-query").hide();

          $("#location-input").show();
          $("#location-btn").show();

          $(".additional-info h5").hide();
          $(".btn.yes").hide();
          $(".btn.no").hide();
          $(".order-confirmation").hide();
          $("#grand-total span").html(grandTotal + 300);
        });
    
        $(".btn.no").click(function() {
          $("#delivery-query").hide();
          $(".btn.yes").hide();
          $(".btn.no").hide();
          $("#grand-total").hide();
          $("h6").hide();

          $("#order-confirmation").show();
        });
    
        $('#location-btn').click(function(event) {
          event.preventDefault();
          let deliveryLocation = $("#location-input").val();
          $("#order-confirmation").show();
          $("#location-input").hide();
          $("#location-btn").hide();
          $("#grand-total").hide();
          $("h6").hide();
          $("#del-confirmation").show();
          $("#del-confirmation span").html(deliveryLocation);
        });
  });
});