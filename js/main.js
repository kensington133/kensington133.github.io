$(document).ready( function(){
	handleContentHeight();
})

function handleContentHeight(){
	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	//if the content is longer than the minimum viewing height don't set it to the viewable height
	if(documentHeight > viewableHeight)
	{
		console.log('bigger than'+viewableHeight);
		$('.content').height(documentHeight);
	}
	else
	{
		console.log('set to '+documentHeight);
		$('.content').height(viewableHeight);
	}
}