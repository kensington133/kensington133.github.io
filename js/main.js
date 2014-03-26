$(document).ready( function(){
	// handleMenuHeight();
})

function handleMenuHeight(){
	var windowHeight = $(window.top).height();
	$('.content').css({minHeight: windowHeight})
}