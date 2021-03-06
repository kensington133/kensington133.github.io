---
layout: post
title: Week Twenty Two
tags: placement_year
---
This week will hopefully be the final week that I am working on the Gecko Headgear quote form.

Amongst other small changes and updates to the form I have added the ability to remove the optional extras. This was done by using the jQuery `:contains` selector. When the remove option button is clicked jQuery finds the selected option and its text. Then each list item in the quote list is checked to see if the text contains the selected option, if it does then this item is removed from the list which in turn calls the calculate price function in order to update the price.

As I managed to get the remove function working at the beginning of the week I was then given the task of creating a mobile website for the Brendon Arms, a pub/restaurant in Bude. I decided to adapt an already working and live mobile website and create a template for the Brendon Arms website. This involved changing how the two columns were aligned, instead of just using `margin-left` on larger screens to make the second column float next to the main column I had to give the fixed column a width of 50% and the fluid column (the one that changes depending on the device width) a width of 45%. This then allowed me to put contact forms, accommodation calendars and other elements that needed to be clicked on in the fixed column as the previous way of aligning the columns inhibited the ability to click on interactive elements in the fixed column.

Also on the Brendon Arms mobile website I learnt how to scale videos and interactive maps to fit in any device width. It is all done using CSS and percentages for the width and heights of certain HTML elements.

