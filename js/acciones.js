// JavaScript Document
var panel ='<div data-role="panel" id="mipanel" data-theme="a" data-display="push"><div class="panel-content" align="center"> <h3>Menu</h3> <div data-role="controlgroup"> <a data-role="button" href="#Principal">Principal</a> <a data-role="button" href="#Vibrar">ORIGEN</a>  <a data-role="button" href="#Beep">COMIENZOS Y DEBUT</a>  <a data-role="button" href="#page4">(2003-2005)</a> <a data-role="button" href="#PAGE" >2006-2008</a> </div> </div> </div>';

		$(document).on('pagebeforecreate', '[data-role=page]', function () {
  if ($(this).find('[data-role=panel]').length === 0) {
    $('[data-role=header]').before(panel);
  }
});



$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
   $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
   $('#B_beep').tap(function(){
    navigator.notification.beep(2);
  });
 },false); //deviceready
}); //document ready
