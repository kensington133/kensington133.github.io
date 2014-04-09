---
layout: gallery
title: heybenshort.co.uk
tags: portfolio
galleryid: heybenshort
---
After using [foundation](http://foundation.zurb.com/) and [wordpress](http://en-gb.wordpress.org/) to create my portfolio website previously I thought it was time for a change, and that change was [jekyll](http://jekyllrb.com/) and [github pages](https://pages.github.com/).

However before any form of programming started I thought it would be best to actually plan and design my website, instead of jumping straight in like I have done previously.
<!--cut-->
With this I mind I opened up PhotoShop and started creating ideas. I eventually came up with this design which you are seeing right now, I wanted it to use more colours than my old website as I feel my old website was black, dull and uninteresting. To choose the perfect colours I used Adobe's [Kuler](https://kuler.adobe.com/create/color-wheel/), This allowed me to pick colours that worked together and suited each other.

The various stages of design and re-design can be seen in the gallery at the bottom of the page.

I chose to replace my blogging platform from wordpress to Jekyll as Jekyll doesn't rely on databases to store posts. It uses flat files such as markdown(.md), textile or HTML. This means that the website is much easier to manage as all I have to do to create another post is start writing in a text editor and away I go!

I also chose Jekyll because of its ability to include files using the syntax {% raw %}`{% include file.html %}`{% endraw %}, this allowed me to create various files that I could include such as a header, footer and other common elements.

Jekyll uses yaml files for storing data, I took advantage of this when creating my gallery pages by creating a [galleries.yml](https://github.com/kensington133/kensington133.github.io/blob/master/_data/galleries.yml) in a folder called `_data`, this is interpreted by Jekyll and can be accessed by using {% raw %}`{% for gallery in site.data.galleries %}`{% endraw %} as Jekyll know to look in the `_data` folder and in the file called galleries.

Although I have created nearly all of this website from scratch, After a few attempts at trying to get my gallery to work, I decided to use this [gallery](https://github.com/duncanmcdougall/Responsive-Lightbox) to save a lot of headache and hassle, and to avoid re-inventing the wheel. After a few modifications in the CSS and JavaScript to change the loading gif to a spinning icon from [font awesome](http://fortawesome.github.io/Font-Awesome/icons/), the various buttons to pure HTML and CSS buttons instead of images and a few colour changes including the overlay and captions the gallery was up and running.

Compared to my previous website, I feel I have learnt a lot more about CSS media queries, design and colours by doing it myself from scratch, rather than using a framework like foundation that does a lot of the work for me.