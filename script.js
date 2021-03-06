$(document).ready(function() {

  /*Open email client with help instructions.
  Eventually a webform will be more ideal.*/
$("#gethelp").on("click", function() {
    window.location.href =
      "mailto:EMAIL@EMAIL.COM?subject=I%20Need%20Assistance%20With%20Online%20Ordering&body=Please%20tell%20us%20how%20we%20can%20help.";
  });
});


/*Transfer form to email
I'd like to see pushing this to a mail server via php
or some other method so that a submit is the last thing
the user does.*/
$("#submit").click(function() {

/*If (element value is checked){pull ID}
This should only apply true to the radio buttons on my form.
Maybe make these radio button ID tailored to what the item is?
That should lessen the code required to provide an accurate selection to submit.*/
var device = ""
$( "input" ).each( function(index, el) {
    var elem = $(el);
    if(elem.is(":checked")){
      device = (this.id);
        //target/store the div title below?
      }
  });

/*user field data*/
var name = document.getElementById("username").value;
var netid = document.getElementById("usernetid").value;
var phone = document.getElementById("userphone").value;
var costcenter = document.getElementById("costcenternumber").value;
var department = $("#dept-drop-bar").text();

/*Device Customizations*/
var cpu =  $("#cpu-drop-bar").text();
var os = $("#os-drop-bar").text();
var ram =  $("#ram-drop-bar").text();
var storage = $("#storage-drop-bar").text();
var drive =  $("#drive-drop-bar").text();

/*Device Customizations*/
var adobecc =  $("#adobeCC-drop-bar").text();
var stata = $("#stata-drop-bar").text();
var vm =  $("#vm-drop-bar").text();
var other =  document.getElementById("misc-field").value;

  /*Comments field*/
var comments = document.getElementById("textarea-comments").value


var final =
    //User info fields
    "Name: " +name+ "%0ANetid: " +netid+ "%0APhone: " +phone+ "%0ACost Center: "+costcenter+ "%0ADepartment: " +department+
    //device customization field
    "%0A%0A---Device and Customizations---"+"%0ADevice: "+device+"%0ACPU: " +cpu+ "%0AOS: " +os+ "%0ARAM: " +ram+ "%0AStorage: "+storage+
    //software customization
    "%0A%0A---SOFTWARE---"+"%0AAdobe CC: " +adobecc+"%0AStata: " +stata+"%0AVM App: " +vm+ "%0AMisc: " +other+
    //comments area
    "%0A%0AUser Comments: "+comments;


  window.location.href =
      "mailto:EMAIL@EMAIL.COM?subject=Order%20Submission&body=" + final;
});



//These are not needed if I am not targeting the css. Remove if keeping the animation.
 var dell = document.getElementById("dell-form-flex-container");
 var apple = document.getElementById("apple-form-flex-container");
 var lenovo = document.getElementById("lenovo-form-flex-container");
 var tablets = document.getElementById("tablets-form-flex-container");
 var os = document.getElementById("spec-titles-os");
 var osdrop = document.getElementById("os-drop-bar");



/*Toggle brands*/
//Show/Hide pages for product selection
$("#apple-btn").click(function() {
        dell.style.display = "none";
        $("#apple-form-flex-container").fadeIn(350);
        lenovo.style.display = "none";
        tablets.style.display = "none";

        /*removal of OS option for Mac devices.
        Consider doing some for tablets or changing options?
        This also causes a positioning bug. Check on it.*/
        os.style.display ="none";
        osdrop.style.display = "none";
        //instant show
        //apple.style.display = "block/flex";
});

$("#dell-btn").click(function() {
        $("#dell-form-flex-container").fadeIn(350);

        apple.style.display = "none";
        lenovo.style.display = "none";
        tablets.style.display = "none";

        os.style.display ="flex";
        osdrop.style.display = "flex";
});

$("#lenovo-btn").click(function() {
        dell.style.display = "none";
        apple.style.display = "none";
        $("#lenovo-form-flex-container").fadeIn(350);
        tablets.style.display = "none";

        os.style.display ="flex";
        osdrop.style.display = "flex";
});

$("#tablets-btn").click(function() {

        dell.style.display = "none";
        apple.style.display = "none";
        lenovo.style.display = "none";
        $("#tablets-form-flex-container").fadeIn(350);

        os.style.display ="none";
        osdrop.style.display = "none";
});


/*Remember selection made in drop down menu
without this, the drop down menus keep their original values

Look into looping this.*/
$(".os-drop").click(function() {
  $("#os-drop-bar").text($(this).text());

});

$(".ram-drop").click(function() {
  $("#ram-drop-bar").text($(this).text());
});

$(".cpu-drop").click(function() {
  $("#cpu-drop-bar").text($(this).text());
});

$(".storage-drop").click(function() {
  $("#storage-drop-bar").text($(this).text());
});





$(".adobeCC-drop").click(function() {
  $("#adobeCC-drop-bar").text($(this).text());
});

$(".stata-drop").click(function() {
  $("#stata-drop-bar").text($(this).text());
});

$(".vm-drop").click(function() {
  $("#vm-drop-bar").text($(this).text());
});


$(".other-drop").click(function() {
  $("#other-drop-bar").text($(this).text());
});

$(".dept-drop").click(function() {
  $("#dept-drop-bar").text($(this).text());
});
