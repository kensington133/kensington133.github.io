$(document).ready( function(){
	handleContentHeight();
});

$(window).resize(function(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	console.log('Viewable height = '+viewableHeight)
	console.log('Document height = '+documentHeight);

});

function handleContentHeight(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	if(windowHeight > viewableHeight)
	{
		console.log('bigger than'+viewableHeight);
		$('.content').height(documentHeight);
		$('.overlap').height(documentHeight);
	}
	else
	{
		console.log('set to '+documentHeight);
		$('.content').height(viewableHeight);
		$('.overlap').height(viewableHeight);
	}
}