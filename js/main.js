$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
	typeAhead();
	sendEmail();
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
	var form = $("#contact_form");
	$(form).submit(function( evt ) {
		evt.preventDefault();
		var url = 'http://php.heybenshort.co.uk/send.php'

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

// function checkEmpty()
// {
// 	var form = $('#contact_form');
// 	errMsg = '';
// 	errCount = 0;
// 	if($('.contact_name').length === 0)
// 	{
// 		errCount++;
// 		errMsg += "Please provide a contact name\n";
// 	}

// 	if($('.contact_email').length === 0)
// 	{
// 		errCount++;
// 		errMsg += "Please provide an email address\n";
// 	}

// 	if($('.contact_message').length === 0)
// 	{
// 		errCount++;
// 		errMsg += "Check what you entered for your message\n";
// 	}

// 	if(errCount > 0)
// 	{
// 		return false;
// 		alert(errMsg);
// 	}
// 	else
// 	{
// 		return true;
// 	}
// }