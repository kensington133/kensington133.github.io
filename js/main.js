$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
	typeAhead();
	// sendEmail();
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
		$('.menu').slideToggle( function(){
		 $(".arrow").html($('.menu').is(':visible') ? '&#x25B2;' : '&#x25BC;');
		});
	});
}

function typeAhead()
{
	var search = $('#search').typeahead({
	        prefetch: '/search.json',
	        engine: Hogan
    	});

	search.on('typeahead:selected', function (evt, data) {
		window.location = data.url;
	});
}
function sendEmail()
{
	form = $("#contact_form");
	$(form).submit(function(e) {
	e.preventDefault();
	alert('hello?');
	url = 'http://php.heybenshort.co.uk/send.php'
	$.ajax({
		type: 'POST',
		url: url,
		data: $(form).serialize(),
		success: function(data)
		{
			alert(data);
		}
	 });
});
}