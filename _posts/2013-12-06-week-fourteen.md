---
layout: post
title: Week Fourteen
tags: placement_year
---
As things are quietening down for the Christmas period, I was given a maintenance job to do.

I was given the task of create a website crawler/checker for all of MD's websites. The crawler had to check it had a sitemap.xml, robots.txt in the root directory. These are essential parts of a website in terms of SEO as the search engines use the files to see how many pages there are in the website and what pages to skip when reading through a website.

The crawler/checker also had to check that a favicon.ico is being used on the website, checking if a cookie notification was being shown and whether a custom 404 page is being show and if it is the actual websites 404 page.

To begin with I started of by checking for the sitemap.xml and robots.txt files as I thought this was the best starting point in terms on complexness.

To create all these elements of the crawler I have used a new part of PHP. The cURL function, this fetches a url and certain data. cURL can return the headers of the page, e.g. 200 = OK or 404 = not found, the page itself e.g. all the HTML and styling or Both. This allowed me to check if I cURL for the sitemap or robots files and if it returned a 404 header I know that the file wasn't there.

For other parts of the crawler such as checking the contents of the robots file or the contents of the 404 pages I used some PHP functions/classes that were new to me, strpos, DOMDocument and DOMXpath. These functions/classes allowed me to load a html page as a DOMDocument that traverse the structure similar to how jQuery works. This allowed me to find images title, alt and src attributes and links src attributes.

Next week I am planning on improving my crawler by adding more functionality, possible a sitemap generator and improving how to the cookies are checked. I would also like to use jQuerys AJAX method to load scripts dynamically on a button click instead of the page taking ages to load for every website that MD has made.


