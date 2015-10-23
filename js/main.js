var imgPosition = $('.hills').position();
var imgPositionLeft = imgPosition.left;
var windowWidth = $(window).width();
var imgWidth = 1200;
var imgDelta;

//BAHHHH!!!!!

$(window).bind('wheel mousewheel DOMMouseScroll', function(e){

	if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ) {

		windowWidth = $(window).width();
		imgDelta = imgWidth - windowWidth;

		if ( (imgPositionLeft + windowWidth) > imgDelta ){

			$('.hills').animate({left: '-=1500'},500,function(){});

			imgPosition = $('.hills').position();
			imgPositionLeft = imgPosition.left;

			console.log('left ' + imgPositionLeft);
			console.log('window size ' + windowWidth);
			console.log('img width ' + imgWidth);
			console.log('img delta ' + imgDelta);

		}
		else {

			$('.hills').clone().css('left', (imgPositionLeft + imgWidth)).insertAfter('.hills:first');
			$('.hills:first').remove();

		};
		
	};

});