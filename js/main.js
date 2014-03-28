$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
});

$(window).resize(function(){
	handleContentHeight();

});

function handleContentHeight(){

	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var contentHeight = $('.content_inner').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	//sets the overlapping backgrounds the the window height
	$('.overlap').height(documentHeight);

	//if the content is less then the window set it to the window height
	if(contentHeight < viewableHeight)
	{
		$('.content').height(viewableHeight);
	}
	else
	{
		$('.content').height('');
	}
}

function mobileMenu()
{
	$('.menu_toggle').click( function(){
		// $('.menu').animate({
		// 	width: 'toggle'
		// }, 'easeOutQuart');
		$('.menu').slideToggle( function(){
		// $('.arrow').html('&#x25B2');
		 $(".arrow").html($('.menu').is(':visible') ? '&#x25B2;' : '&#x25BC;');
		});
	});
}