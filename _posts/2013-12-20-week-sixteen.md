---
layout: post
title: Week Sixteen
tags: placement_year
---
This week I modified my website crawler, I changed my file full of function into a class with private and public functions.

This required me to change lines of code where I had previously had just `function()` to `$class->function()`. After a brief check it was all up and running and working again. I also created a Google analytics check, this checks the homepage of the website to see if the Google analytics JavaScript had been added to the page. This was a lot easier than I had imagined as all the code snippets have the string `GoogleAnalyticsObject` this allowed me to simple Load the page content in with cURL and search the content for the Google analytics string.

Also this week I decided to update my website using [Foundation](http://foundation.zurb.com) a responsive CSS framework and [Wordpress](http://en-gb.wordpress.com) a blogging platform. This allowed me to create a mobile friendly, tablet friendly and desktop friendly website without the use of sub domains and redirects. Using and customising foundation for my home, contact and links pages was a great learning opportunity as well as installing and modifying various aspects of Wordpress.
