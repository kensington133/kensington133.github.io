---
layout: post
title: Week Eleven
tags: placement_year
---
At the beginning of this week I was working on implementing an updated and more streamlined version of the holiday property calendar into the [olive tree website](http://www.olivetreebude.co.uk/holiday.accommodation.bude.cornwall "Olive Tree - holiday accommodation page"). This involved html, php and javascript. I feel now I have learn't how to properly implement the calendar into a website so that if i am required again I will be able to do it a lot faster than today.

My next task of the week was to do some small textual changes on the guitar retreats website as the client had looked at it over the weekend and had some minor changes to make.

Finally, for the rest of the week I was improving upon the tariffs page on the [look out holiday cottages website](http://www.thelookoutincornwall.co.uk/countryside.accommodation.tariffs "The Look Out - Holiday accommodation tariffs page"). Although this seemed like a simple task it turned out to be quite complicated and took most of this week to get it partially working.

The problem was that in the array of tariffs being pulled back from the MD database, it would only contain the tariffs that were explicitly set, so where tariffs weren't set and a default tariffs were used left gaps in the array of missing dates, times and prices. So far this week I have figured out how to do the price changes check to obtain when pricing periods change in order for the tariffs to be displayed properly, but i have yet been unable to determine how to figure out the missing date gaps.

This week I have learnt how to:

- Sort arrays in PHP using usort and uasort (the look out tariffs)
- Various JavaScript date functions (olive tree calendar)
- PHP DateTime and its various functions (the look out tariffs)

