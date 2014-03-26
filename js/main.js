$(document).ready( function(){
	handleContentHeight();
});

$(window).resize(function(){
	handleContentHeight();

});

function handleContentHeight(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var contentHeight = $('.contentinner').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	$('.overlap').height(documentHeight);

	if(contentHeight < viewableHeight)
	{
		$('.content').height(viewableHeight);
	}
	else
	{
		$('.content').height('');
	}
}