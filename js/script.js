$(document).ready(function(){

  $('#workisfunv2').lazylinepainter(
  {
     "svgData": pathObj,
     "strokeWidth": 2,
     "strokeColor": "#FFF",
     "responsive" : true,
     "drawSequential" : false,


 });

$(window).on('scroll', function(){
  $('#workisfunv2:in-viewport').lazylinepainter('paint');
});

$('#handrawn-linev4').lazylinepainter(
{
   "svgData": pathObj2,
   "strokeWidth": 2,
   "strokeColor": "#60e89d",
   "responsive" : true
});

$(window).on('scroll', function() {
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
