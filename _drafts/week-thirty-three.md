---
layout: posts
title: Week Twenty Three
tags: placement_year
---
beach at bude, changing page layouts + animation, started with the nomada page at the start of the week and progressed on the some other pages of the website
also text updates to animals galore to improve SEO

This week I have worked on changing the layout of certain pages on the beach at bude [website](http://www.thebeachatbude.co.uk/), I also added some animations using jQuery to show and hide content on some [pages](http://www.thebeachatbude.co.uk/hotel.bude.cornwall).

To start off with I added in some extra HTML elements to split up content that was going to be shown and content that would be revealed. Then I went about adding jQuery functions to get the current page (as this is to only run on certain pages), animating the box to slide up by the height of the content or to an offset from the top of the window/page, handling specific types of layouts and offsets and handling the click events.

Below is the function for getting the current page, for example `http://test.com/pages/this-one/` would return `this-one`

{% highlight js %}
function getCurrentPage() {
	var url = window.location.pathname;
	var urlParts = url.split('/').filter( function(item){if(item !== '') return item });

	return urlParts[ urlParts.length -1 ];
}
{% endhighlight %}

Later on in the week I updated the animation to remove the caterpillar like effect of it reducing its heigh then sliding down to doing the opposite, sliding back down and fading out the content.