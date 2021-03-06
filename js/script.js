window.onload = function() {
	// initialize AOS library to handle animation while scrolling
	AOS.init();

	jQuery('.hero-video-block .svg-masked').addClass('zoom');

	var isModalOpened = false;
	
	setTimeout(() => {
		jQuery('.hero-video-block .svg-masked #path1').hide();
		jQuery('.hero-video-block .svg-masked #path2').show();

		jQuery('.hero-video-block .video .ic').fadeTo('fast', 1);

		var path2 = d3.select("#path2");
		var fromShape = "M126.73,213.42c49.81,4.31,105.59,63.26,133.35-5.25s-11.26-152-89.65-159.55S40.86,56.85,22,130.37,76.9,209.12,126.73,213.42Z";
		var toShape = "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45\n"
		+ "c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2\n"
		+ "c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7\n"
		+ "c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z";
		var interpolator = flubber.interpolate(fromShape, toShape);
		path2
		  .transition()
		  .delay(0)
		  .duration(4000)
			.attrTween("d", function() { return interpolator; })
			.on("end", function() { 
				if (!isModalOpened) {
					jQuery('.hero-video-block .svg-masked #path2').hide();
					jQuery('.hero-video-block .svg-masked #path3').show();
				}
			});
	}, 8000);

	jQuery('.hero-video-block .svg-masked').off('click').on('click', function(e) {
		isModalOpened = true;
		var p = jQuery(".hero-video-block .svg-masked path:visible");
		p.attr('mask', '');
		p.attr('fill', 'url(#linearGradient-1)');	
		var offset = p[0].getBoundingClientRect();

		jQuery('body').append('<div id="overlay" class="overlay"></div>');
		jQuery(this).appendTo('#overlay');
		setTimeout(() => {
			jQuery('.svg-masked').css({top: offset.top, left: offset.left, position: 'absolute'});
		});
		
		var fromShapeVideo = p.attr('d');
		if (!fromShapeVideo) {
			console.log('nulllll');

			fromShapeVideo = "M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4\n"
			+ "c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6\n"
			+ "c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8\n"
			+ "C48.9,198.6,57.8,191,51,171.3z"
		}

		var toShapeVideo = "M945,798.59c232,32.45,411.37,67.48,458-100.71,29-104.59-41.69-226-26-341.29,18.77-137.85,30.35-274.18-23-321.51-89.5-79.41-316.12.47-434.5,3C804.91,40.57,865.25,54.27,673,47.67S128.8-40.59,51,51.94C-6,119.73-2,287.27,10,413.16,24.76,568-32.76,695.76,31,793.75,99.05,898.34,713,766.15,945,798.59Z";
		var interpolatorVideo = flubber.interpolate(fromShapeVideo, toShapeVideo);
		var path4 = d3.select("#path4");

		path4
		.transition()
		.delay(500)
		.duration(2000)
		.attrTween("d", function() { return interpolatorVideo; })
		
		;

		jQuery('.svg-masked #path1').hide();
		jQuery('.svg-masked #path2').hide();
		jQuery('.svg-masked #path3').hide();
		jQuery('.svg-masked #path4').show();

		jQuery('#overlay .svg-masked').addClass('show');


		TweenMax.to(jQuery('#overlay .svg-masked')[0], 2,{
			attr:{
				viewBox: "0 0 1411 835",
			},
			x: -610,
		});
		// TweenLite.to("#path4", 1, {morphSVG:toShapeVideo});

	

		// setTimeout(() => {
		// 	// jQuery('#overlay .svg-masked').attr('viewBox', '0 0 1411 835');
		// 	// jQuery('#overlay .svg-masked').addClass('move');
		// 	jQuery('#overlay .svg-masked').css({
		// 		left: ((window.innerWidth - 1170)/2) + 'px',
		// 		top: ((window.innerHeight - 694)/2) + 'px',
		// 	})
		// }, 2000);
	});
}