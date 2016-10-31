//BIZ logic
function Item(name, hours) {
  this.name = name;
  this.hours = hours;
};







//front end logic starts//
$(document).ready(function() {
  $("form#list-form").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var hours = $("input#hours").val();

    var newItem = new Item(name, hours);

    $("ul#list").append("<li>" + "<div class='form-group'>" + "<h3>" + newItem.name + "</h3>" + "<br>" + "Hours needed: " + newItem.hours + "<br>" + "<br>" + "<label for='sel1'>Finished</label><select class='form-control'><option value='yes'>Yes</option><option value='no'>No</option></select>" + "</div>" +"</li>");

    $("#show-list").show();


  });

  $("form#finished-form").submit(function(event) {
    event.preventDefault();

    $("ul#list li").each(function() {
      if ($("option[value='yes']").is(":selected") === true) {
        $(this).remove();
      }
      // else if ($("option[value='no']").is(":selected") == true) {
      //   alert("no");
      // }



    });
  });
});
