$(document).ready(function() {

  $(".btn.more-pizza").hide();
  $("ul").hide();
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
      //Toppings selected
      let chickenToppings = $('input[name="chicken"]:checked').val()
      let beefToppings = $('input[name="beef"]:checked').val()
      let pepToppings = $('input[name="pep"]:checked').val()
      //Picking name and value
      let chickenTops = $('input[name="chicken"]:checked').serialize('name');
      let beefTops = $('input[name="beef"]:checked').serialize('name');
      let pepTops = $('input[name="pepperoni"]:checked').serialize('name');
      //Split string to be displayed to user
      let chickenTopsStr = chickenTops.split("=");
      let beefTopsStr = beefTops.split("=");
      let pepTopsStr = pepTops.split("=");

      //Calculate total cost of toppings checked according to their values
      let totToppings = ~~parseInt(chickenToppings) + ~~parseInt(beefToppings) + ~~parseInt(pepToppings);

      //Direct input from form
      let sizeOfPizza = $(".size option:selected").val();
      let crustOfPizza = $(".crust option:selected").val();

      let total = parseInt(sizeOfPizza) + parseInt(totToppings) + parseInt(crustOfPizza); 

      //adjustments for size of pizza
      if (sizeOfPizza === "400"){
        total += 200; //crust (+100) & toppings(+100) adjustment for medium pizza
      } else if (sizeOfPizza === "600"){
        total += 400; //crust (+200) & toppings (+200) adjustment for large pizza
      };

      let order = 1;
      let grandTotal = 0;

      $("ul").show();
      $(".btn.order").hide();
      $(".btn.more-pizza").show();
      $(".btn.check-out").show();

      let text = (order + ")"+ $(".size option:selected").text() + ", "+ $(".crust option:selected").text() +" Pizza with the following extra Toppings = "+chickenTopsStr[0] +" "+beefTopsStr[0] +" " + pepTopsStr[0]+", " +"and TOTAL AMOUNT of Selected Pizza"+" @ "+ total );

      $("ul").append($('<li>').text(text));


      function Pizza(size, toppings, crust, total, orderNo) {
          this.size = size;
          this.toppings = toppings;
          this.crust = crust;
          this.total = total;
          this.orderNo = orderNo;
        }

      $('.btn.more-pizza').click(function(event) {
          event.preventDefault();
          let chickenToppings = $('input[name="chicken"]:checked').val()
          let beefToppings = $('input[name="beef"]:checked').val()
          let pepToppings = $('input[name="pep"]:checked').val()
          //Picking name and value
          let chickenTops = $('input[name="chicken"]:checked').serialize('name');
          let beefTops = $('input[name="beef"]:checked').serialize('name');
          let pepTops = $('input[name="pepperoni"]:checked').serialize('name');
          //Split string to be displayed to user
          let chickenTopsStr = chickenTops.split("=");
          let beefTopsStr = beefTops.split("=");
          let pepTopsStr = pepTops.split("=");
        
          let totToppings = ~~parseInt(chickenToppings) + ~~parseInt(beefToppings) + ~~parseInt(pepToppings);
          
          let sizeOfPizza = $(".size option:selected").val();
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
  
          let newHeader = ("  "+ newPizza.orderNo + ")"+ $(".size option:selected").text() + ", "+ $(".crust option:selected").text() +" Pizza with the following extra Toppings = "+chickenTopsStr[0] +" "+beefTopsStr[0] +" " + pepTopsStr[0]+", " +" and TOTAL AMOUNT of Selected Pizza"+" @ "+ newPizza.total);

          $("ul").append($('<li>').text(newHeader));

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
          // $("#grand-total").hide();
          // $("ul").hide();
          $("#order-confirmation").show();
        });
    
        $('#location-btn').click(function(event) {
          event.preventDefault();
          let deliveryLocation = $("#location-input").val();
          $("#order-confirmation").show();
          $("#location-input").hide();
          $("#location-btn").hide();
          // $("#grand-total").hide();
          // $("ul").hide();
          $("#del-confirmation").show();
          $("#del-confirmation span").html(deliveryLocation);
        });
  });
});