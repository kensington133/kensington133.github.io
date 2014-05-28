---
layout: post
title: Week Thirty Four
tags: placement_year
---
This week I played around with the [Steam Web API php SDK](https://github.com/andrewmcwatters/steamweb-php-sdk) created by Andrew McWatters. This SDK allows me to integrate data from steam onto my website to show total games played, how long I have played them and other statistics.

This is currently a work in progress but I have successfully utilised the SDK to call on the Steam API to retrieve my user data so that I can display it on my website at a later date.

For this api to get it to work I had to set it up on my server on a sub-domain as jekyll does not support PHP. To retrieve data from the SDK on my server you use a url like this one `http://php.heybenshort.co.uk/steam/ISteamUser/GetPlayerSummaries/v0002/?steamids=XXXXXXXXXXXXXXX` or http://php.heybenshort.co.uk/steam/ISteamUser/GetPlayerSummaries/v0002/?steamids=XXXXXXXXXXXXXXX.

Each part of the URL has a separate function, the main part of the url which tells the SDK what data to fetch is the `/GetPlayerSummaries/v0002/?steamids=XXXXXXXXXXXXXXX`. The first portion tells the SDK to get the player summary, this returns data about the user in JSON format. The next part is the version of the specified API to call and the last part is the users steam ID.

When all of this is put together it returns something like this:
{% highlight js %}
{
	"response": {
		"players": [
			{
				"steamid": "XXXXXXXXXXXXXXXX",
				"communityvisibilitystate": 3,
				"profilestate": 1,
				"personaname": "kensington133",
				"lastlogoff": 1400798956,
				"profileurl": "http://steamcommunity.com/id/kensington133/",
				"avatar": "http://media.steampowered.com/steamcommunity/public/images/avatars/a8/a85e031dbf77309235ee9272f647455aee1abdf8.jpg",
				"avatarmedium": "http://media.steampowered.com/steamcommunity/public/images/avatars/a8/a85e031dbf77309235ee9272f647455aee1abdf8_medium.jpg",
				"avatarfull": "http://media.steampowered.com/steamcommunity/public/images/avatars/a8/a85e031dbf77309235ee9272f647455aee1abdf8_full.jpg",
				"personastate": 0,
				"realname": "Ben Short",
				"primaryclanid": "103582791429521408",
				"timecreated": 1353607757,
				"personastateflags": 0
			}
		]

	}
}
{% endhighlight %}

In the future I would like to use this data and make it presentable on my website so that people can see what games I own, what ones I play the most and be able to join me online.

Also this week I began work on create a class based postage system for MD Web Solutions admin system. The finished product will allow clients to use the existing catalogue system to add products and then apply postage items that they have previously created which are stored in the MD database.