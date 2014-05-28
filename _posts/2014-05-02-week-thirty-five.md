---
layout: post
title: Week Thirty Five
tags: placement_year
---
This week I continued on with my work on the postage system for MD Web Solutions admin system.

First off I had to plan out the database tables and how they will relate to each other, I did this by sketching them out on paper, first was how many tables should I use, then it was what fields should go into these tables and how do they relate to each other.

After scribbling notes on some paper I came up with these three tables:
![Postage Types Table]({{ site.url }}assets/blog/tblpostagetypes.png)
![Postage Weight Units Table]({{ site.url }}assets/blog/tblpostageunits.png)
![Product Postage Table]({{ site.url }}assets/blog/tblproductpostage.png)

Next I went about create the postage class which will contain all the methods, getters and setters to interact with the database for storing and retrieving the postage data. This was probably the longest part of the process as I had to learn how the database was structured and how class files are laid out in order to follow MD's coding styles.

This week I have managed to create the tables ready for population by my postage class which is well on its way to be able to add data into the tables.