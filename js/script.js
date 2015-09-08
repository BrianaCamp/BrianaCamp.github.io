$(document).ready(function(){

//ANIMATED TEXT INTRO
  $('#workisfunv2').lazylinepainter(
  {
     "svgData": pathObj,
     "strokeWidth": 2,
     "strokeColor": "#FFF",
     "responsive" : true,
     "drawSequential" : false,


 });

 $('#handrawn-linev4').lazylinepainter(
 {
    "svgData": pathObj2,
    "strokeWidth": 2,
    "strokeColor": "#60e89d",
    "responsive" : true
 });

$(window).on('scroll', function(){
  $('#workisfunv2:in-viewport').lazylinepainter('paint');
  $('#handrawn-linev4:in-viewport').lazylinepainter('paint');
});



//from paululund.co.uk

$('a[href^="#"]').on('click',function (e) {
	  e.preventDefault();

	  var target = this.hash;
	  var $target = $(target);

	  $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});

var caption = $(".caption"),
    thumbnail = $(".thumbnail");

if( $(window).width() >= 500) {
  $(caption).hide();
  $(thumbnail).mouseover(function () {
    $(this).find(caption).show().addClass("transform");
  });
} else {
  $(caption).show();
}
