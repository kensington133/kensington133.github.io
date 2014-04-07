$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
	typeAhead();
	sendEmail();
	handleActive();
	handleGalleryLoading();
	handleGallery();
});

$(window).resize(function(){
	handleContentHeight();
	handleCaption();
});

//super handy image pre-loader
;(function ($)
{
  $.imageloader = function(userOptions)
  {

        var options = $.extend({
            urls: [],
            onComplete: function() {},
            onUpdate: function(ratio, image) {},
            onError: function(err) {}
        }, userOptions);

        var loadCount = 0,
            completedUrls = [],
            urls = options.urls,
            len = urls.length;

        $.each(urls, function(i, item)
        {
                var img = new Image(), error = false;
                img.src = item;
                img.onerror = function() {
                  loadCount++;
                  options.onError('Error loading image: ' + item);
                };

                $('<img/>').attr('src', item).load(function(res)
                {

                        loadCount++;
                        options.onUpdate(loadCount/len, urls[loadCount-1]);

                        if (loadCount === len) options.onComplete();
                });
        });

  };

})(jQuery);

function handleContentHeight(){

	var windowHeight = $(window).height();
	var documentHeight = $(document).height();
	var footerHeight = $('.footer').height();
	var headerHeight = $('.header').height();
	var contentHeight = $('.content_inner').height();
	var viewableHeight = windowHeight - (footerHeight + headerHeight);

	//sets the overlapping backgrounds the the window height
	$('.overlap').height(documentHeight);
	$('.gallery_overlay').height(documentHeight);

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
	        template: [
			'<p class="post-name">{{value}}</p>',
			'<p class="post-date">{{date}}</p>'
		].join(''),
	        prefetch: {
	        		url: '../search.json'
	        },
	        engine: Hogan
    	})

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

function handleActive()
{
	var currentPage = window.location.pathname
	var menu = $('.menu_item');

	$(menu).each( function(){
		$(this).removeClass('selected');
		if($(this).attr('href') == currentPage)
		{
			$(this).addClass('selected');
		}
	});

}

function handleGalleryLoading()
{
	var images = [];
	$(".gallery_thumb").each( function(){
		var src = $(this).find("img").attr("src")
		images.push(src);
	});

	$.imageloader({
		urls: images,
		onComplete: function(images)
		{
			$('.loading').fadeOut( function() {
				$('.gallery').fadeIn();
				handleContentHeight();
			});

		},
		onError: function()
		{
			$('.loading').fadeOut( function() {
				$('.gallery').hide();
				$('.fail').fadeIn();
				handleContentHeight();
			});
		}
	});
}

function handleGallery()
{
	$('.gallery_thumb').click( function() {

		var highresURL = $(this).data('highres');
		var caption = $(this).data('caption');

		showGallery(highresURL, caption);
	});

	$('.close').click( function() {
		closeGallery();
	});

	$(document).keyup( function(evt){
		if(evt.keyCode == 27)
		{
			closeGallery();
		}
	})
}

function showGallery(highresURL, caption)
{
	//bodge until I can get the text/image to show in window I clicked
	//probably due to height being doc height now window height ;)
	$('body').scrollTop(0);
	$('.gallery_overlay').fadeIn( function() {
		$('.full_image').attr('src', highresURL);
		$('.image_caption').html(caption);
		$('body').css({overflow: 'hidden'});
		handleCaption();
	});


}

function closeGallery()
{
	$('.gallery_overlay').fadeOut();
	$('body').css({overflow: 'auto'});
	$('.full_image').attr('src', '');
	$('.caption').html('');
}

function handleCaption()
{
	var yOffset = (($(window).height() - $('.full_image').height())/2) + $('.full_image').height();
	var xOffset = (($(window).width() - $('.full_image').width())/2);

	$('.image_caption').css("marginLeft", ""+xOffset+"px");
	$('.image_caption').css("marginTop", ""+yOffset+"px");

	$('.full_image').load( function(){
		var imageWidth = $('.full_image').width();
		$('.image_caption').css({maxWidth: imageWidth+'px'});

		handleCaption();
	});
}