---
layout: post
title: Week Thirty Five
tags: placement_year
---
This week I continued on with my work on the postage system for MD Web Solutions admin system.

First off I had to plan out the database tables and how they will relate to each other, I did this by sketching them out on paper, first was how many tables should I use, then it was what fields should go into these tables and how do they relate to each other.

After scribbling notes on some paper I came up with these three tables:

|---
| postageid | postagename | postageprice | weightid | departmentid |
|:-:|:-:|:-:|:-:|:-:|
| int(11) | varchar(250) | varchar(100) | int(11) | int(11) |
| 69 | Standard | 3.20 | NULL | 89 |
| 70 | 1kg - 2kg | 4.60 | 2 | 89 |
|---