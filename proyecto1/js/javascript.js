$(document).ready(function() {
    /* This is basic - uses default settings */
	
	$("a#imagen1").fancybox();
	$("a#imagen2").fancybox();
	$("a#imagen3").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});

 });