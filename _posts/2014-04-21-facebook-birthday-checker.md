---
layout: project
title: Facebook Birthday Checker
tags: project
---
For a while I was thinking about creating a program/app that would check who posted on my wall for my birthday. I always would wonder when facebook says its such and such's birthday would you like to write on his/her wall, if they posted on my wall for my birthday.

This app uses the facebook [JavaScript API](https://developers.facebook.com/docs/javascript/) to fetch the users profile information and the users facebook wall. To do this I had to request for the right permissions, I had to asked to read the users stream `read_stream` and for the users birthday `user_birthday`.

Using the users birthday pulled back from the `/me` api request I manipulated it using [moment js](http://momentjs.com/) a JavaScript date library. To fetch the posts using the Facebook [graph api](https://developers.facebook.com/docs/graph-api/quickstart/), I first created the users most recent birthday by checking if it had been the users birthday yet and setting the year accordingly. Next I appended the year I generated onto the reformatted users birthday (`-MM-DD`) this allowed me to end up with the current users birthday e.g. 2014-01-01.

Next I needed to add one day onto the users most recent birthday to create a suitable date range in order to get the users birthday posts. Again to do this I used moments js and used the `add()` function to add one day to the date.

Finally to get the users birthday posts I had to format the two date ranges into the unix format, as this is what the graph api accepts.

The final request to get the users birthday feed looks like `/me/feed?since={recent birthday}&until={recent birthday +1 day}`. this allowed me to retrieve the currently logged in users posts from his/her birthday. I also added the extra parameter `{fields: message, from}` this will tell the api only to return the message and from fields from the graph api call.

<a class="button" href='{{site.url}}projects/birthday-checker/'>View the Facebook Birthday Post Checker</a>