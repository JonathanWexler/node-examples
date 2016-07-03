$(document).ready(function(){
  // Print when connected to client
  console.log("CONNECTED");

  // Immediately make ajax get request
  $.ajax({
    url: "/api/data",
    type: "GET",
    success: function(data){
      // Print response
      console.log(data);
      // Call fucntion to format respose on screen
      formatData(data);
    }
  });

  // Prevent form fom submitting and send data
  $('form').submit(function(e){
    e.preventDefault();
    // Make post request with new data and format on index
    $.post("/api/post", {name: $("#name").val(), location: $("#location").val()}, formatData);
    // reset the form
    this.reset();
  });

});

function formatData (data) {
  $('.data').empty();
  $.each(data, function(){
    $('.data').append("<h1>" + this.name +"</h1><br><h3>" + this.location +"</h3><br>")

  });
}