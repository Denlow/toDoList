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

    $("ul#list").append("<li>" + "<h3>" + newItem.name + "</h3>");

    $("ul#list").append("Hours needed: " + newItem.hours + "<br>" + "<h4>" + "Finished:" + "</h4>" + "<input type='radio' name='finished' value='yes' class='yes'> Yes" + "<br>" + "<input type='radio' name='finished' value='no' class='no'> No" + "</li>");

    $("#show-list").show();


  })
  $("form#finished-form").submit(function(event) {
    event.preventDefault();

    $("ul#list li").forEach(function() {
      if ($("input:radio[value='yes']").is(":checked")) {
        this.remove();
      }

    })
  })
})
