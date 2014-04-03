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
	        name: 'searchData',
	        prefetch: '/search.json',
	        engine: Hogan
    	}).bind('typeahead:opened', function (obj, datum) {
                console.log(obj);
                console.log(datum);
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
		$(form).fadeOut( function(){
			$('.loading').fadeIn();
			$.ajax({
				type: 'POST',
				url: url,
				data: $(form).serialize(),
				success: function(data)
				{
					// alert(data);
					$('.loading').fadeOut( function(){
						$('.success').fadeIn();
					});

				},
				fail: function()
				{
					$('.loading').fadeOut( function(){
						$('.fail').fadeIn();
					});
				}
			});
		});

	});
}