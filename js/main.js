$(document).ready( function(){
	handleContentHeight();
	mobileMenu();
	typeAhead();
	sendEmail();
	handleActive();
	handleGallery();
	loadFacebook()
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
					//something went wrong sending the email
					if(data == 'error')
					{
						$('.loading').fadeOut( function() {
							$('.fail').fadeIn();
						});
					}
					else
					{
						$('.loading').fadeOut( function() {
							$('.success').fadeIn();
						});
					}
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
	var prevPage = document.referrer;
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

//gallery: https://github.com/duncanmcdougall/Responsive-Lightbox
function handleGallery()
{
	$('.gallery a').lightbox();
}

function loadFacebook()
{
	window.fbAsyncInit = function() {
	FB.init({
		appId      : '614464138634550',
		status     : true, // check login status
		cookie     : true, // enable cookies to allow the server to access the session
		xfbml      : true  // parse XFBML
	});

	FB.Event.subscribe('auth.authResponseChange', function(response) {

		switch(response.status)
		{
			case 'connected':
				getBirthdayData();
			break;
			case 'not_authorized':
				FB.login();
			break;
			default:
				FB.login();
			break;
		}
	});
};

	// Load the SDK asynchronously
	(function(d){
		var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "//connect.facebook.net/en_US/all.js";
		ref.parentNode.insertBefore(js, ref);
	}(document));
}

function getBirthdayData() {

	FB.api('/me', function(response) {

		var birthday = moment(response.birthday, 'MM/DD/YYYY');
		var curDate = moment();

		var birthMonth = birthday.format('MM');
		var curMonth = curDate.format('MM');

		//have they had their birthday yet??
		var year = (birthMonth > curMonth)? curDate.format('YYYY') -1 : curDate.format('YYYY');

		var currentBirthday = year + '-' + birthday.format('MM-DD');
		var epocBirthday = moment(currentBirthday, 'YYYY-MM-DD')
		var since = epocBirthday.format('X');
		var until = epocBirthday.add('d', 1).format('X');



		FB.api('/me/feed?since='+since+'&until='+until, {fields: 'message, from'} ,function(response) {

			var count = 0;
			for(var i = 0; i < response.data.length; i++)
			{
				var posted_date = response.data[i].created_time;
				// var posted_on = moment(posted_date).format("MMMM Do YYYY, h:mm:ss a");
				var posted_on = moment(posted_date).format("h:mm:ss a");

				var messageData = response.data[i].message;
				var name = response.data[i].from.name;
				var user_id = response.data[i].from.id;

				if(messageData !== undefined)
				{
					if( (messageData.toLowerCase().indexOf('birthday') !== -1) || (messageData.toLowerCase().indexOf('happy birthday') !== -1) || (messageData.toLowerCase().indexOf('bday') !== -1) )
					{
						count++;
						var message = messageData;

						$('#fb-root').append("<div class='person panel'><div class='fb_img'><img src='http://graph.facebook.com/"+user_id+"/picture?type=square' /></div><div class='text'><h4>"+name+"</h4><p>"+message+"</p></div><div class='clear'></div><p class='date_posted'>Posted: "+posted_on+"</p></div>");

						$('#fb-root').fadeIn( function(){
							handleContentHeight();
							searchPeople();
						});

					}
				}


			}
		});
	});
}

//case insensitive :contains()
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
                return function( elem ) {
                        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
                };
        });

function searchPeople()
{
	$('.name_search').keyup( function(){
		var value = $(this).val();
                var items = $('.person h4');

                if(value.length > 0)
                {
                        // items.filter(':contains('+value+')').parent().parent().css('background', 'red');
                        // items.filter(':not(:contains('+value+'))').parent().parent().css('background', '');

                        items.filter(':contains('+value+')').parent().parent().show( function(){
                        	handleContentHeight();
                        })
                        items.filter(':not(:contains('+value+'))').parent().parent().hide(function(){
                        	handleContentHeight();
                        })
                }
                else
                {
                        items.parent().parent().show(function(){
                        	handleContentHeight();
                        })
                }
	})
}