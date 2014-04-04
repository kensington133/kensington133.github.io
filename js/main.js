$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
	typeAhead();
	sendEmail();
	handleActive();
	handleGallery();
});

$(window).resize(function(){
	handleContentHeight();
});

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

function handleGallery()
{
	var images = [];
	$(".gallery_thumb").each( function(){
		var src = $(this).find("img").attr("src")
		// console.log(src);
		images.push(src);
	});
	// console.log(images);

	$.imageloader({
		urls: images,
		onComplete: function(images)
		{
			$('.gallery').fadeIn();
		},
		onUpdate: function(ratio, image)
		{
		},
		onError: function(err)
		{
		}
	});
}