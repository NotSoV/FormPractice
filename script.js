$(document).ready(function() {
  $("#gethelp").on("click", function() {
    window.location.href =
      "mailto:EMAIL@EMAIL.COM?subject=I%20Need%20Assistance%20With%20Online%20Ordering&body=Please%20tell%20us%20how%20we%20can%20help.";
  });
});

/*
Need JS for pulling radio button options and comments into email.
*/



//Transfer form to email
$("#submit").click(function() {

  //NOT WORKING!
    var preset = "";
    if($('#radio-dell-1').is(':checked')){
      preset = "Dell 5050 SFF Desktop"
    };
//test for git

    $("input").each(function(){

    })
console.log(preset);


  /*user field data*/
  var name = document.getElementById("username").value;
  var netid = document.getElementById("usernetid").value;
  var phone = document.getElementById("userphone").value;
  var costcenter = document.getElementById("costcenternumber").value;

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
  var amos = $("#amos-drop-bar").text();
  var other =  $("#other-drop-bar").text();

  /*Comments field*/
  var comments = document.getElementById("textarea-comments").value



  var final =
      //User info fields
      "Name: " +name+ "%0ANetid: " +netid+ "%0APhone: " +phone+ "%0ACost Center: "+costcenter+
               //device customization field
               "%0A%0A---Device Customizations---"+"%0ACPU: " +cpu+ "%0AOS: " +os+ "%0ARAM: " +ram+ "%0AStorage: "+storage+ "%0ADrive: " +drive+

                //software customization and comments
               "%0A%0A---SOFTWARE---"+"%0AAdobe CC: " +adobecc+"%0AStata: " +stata+"%0AVM App: " +vm +"%0ASPSS AMOS: " +amos+"%0AMisc: " +other+ "%0A%0AUser Comments: "+comments;

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

        /*removal of OS option for Mac devices.
        Consider doing some for tablets or changing options?*/
        os.style.display ="flex";
        osdrop.style.display = "flex";
});

$("#lenovo-btn").click(function() {
        dell.style.display = "none";
        apple.style.display = "none";
        $("#lenovo-form-flex-container").fadeIn(350);
        tablets.style.display = "none";

        /*removal of OS option for Mac devices.
        Consider doing some for tablets or changing options?*/
        os.style.display ="flex";
        osdrop.style.display = "flex";
});

$("#tablets-btn").click(function() {

        dell.style.display = "none";
        apple.style.display = "none";
        lenovo.style.display = "none";
        $("#tablets-form-flex-container").fadeIn(350);
        /*removal of OS option for Mac devices.
        Consider doing some for tablets or changing options?*/
        os.style.display ="flex";
        osdrop.style.display = "flex";
});


/*Remember selection made in drop down menu
without this, the drop down menus keep their original values*/
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


$(".drive-drop").click(function() {
  $("#drive-drop-bar").text($(this).text());
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

$(".amos-drop").click(function() {
  $("#amos-drop-bar").text($(this).text());
});


$(".other-drop").click(function() {
  $("#other-drop-bar").text($(this).text());
});

$(".dept-drop").click(function() {
  $("#dept-drop-bar").text($(this).text());
});



//Radio button checked
