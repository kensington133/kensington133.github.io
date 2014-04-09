---
layout: post
title: Week Fifteen
tags: placement_year
---
This week I have updated my site crawler by using jQuery. I used jQuery's AJAX method to call separate php scripts to load different information depending on which button is pressed on the [crawler](http://dev.md-softwaresystems.co.uk/crawler/index.php "MD Web Solutions - Website checker/crawler").

Also I made my image checker which was a stand alone page AJAX into the page as well for the best user experience possible.

In the middle of the week I did a few small updates to Alchemist Jewellery, this included changing some links to go the correct pages and only displaying the news headline, date and link to the news item on the news page. This will allow for the news page to become less cluttered when multiple news articles are posted

Finally at the end of the week I changed the sitemap to automatically download once it had generated by the crawler. This was a bit of a challenge to start as jQuery doesn't return PHP headers just the html content so I had to create a separate download script that is added to the page.

This is added to the page using AJAX, this adds an iframe with the src being set to the download script with the appropriate PHP download headers. this then allows for the file to be downloaded by only clicking one button.
