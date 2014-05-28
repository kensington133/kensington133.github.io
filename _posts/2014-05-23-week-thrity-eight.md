---
layout: post
title: Week Thirty Eight
tags: placement_year
---
This week I carried on with my [catalogue demo system](http://catalogue.md-softwaresystems.co.uk/), after finishing the basic shop layout last week, this week I decided to create a basket and PayPal checkout page.

To create the basket page I used JavaScripts AJAX, this allows me to gather or set data using forms without having to change page. I have used this in multiple instances, for example when a used on a [product page](http://catalogue.md-softwaresystems.co.uk/product/Shiba+Inu/1203) has clicked add to basket, the form on the page sends out an AJAX request to a seperate PHP file which does all the things needed to add a product to the basket array.

Another example of AJAX being used it the basket count, when a product is added to the basket an AJAX request is sent off, this time from a JavaScript function to get the amount of items in the basket and update the number next to the basket menu item.

A simple AJAX request looks like this:
{% highlight js %}
function getBasketCount()
{
        var ajaxUrl = siteURL+'/ajax/getbasketcount';

        $.ajax({
                type: 'GET',
                url: ajaxUrl,
        })
        .done( function( data ){
                $('.basket_count_menu').html('('+$.trim(data)+')');
        })
        .fail( function( data ){
                $('.basket_count').html('error retrieving basket items');
        })
}
{% endhighlight %}

This function makes a request to the page `getbasketcount` which is a PHP file which is a very simple page:
{% highlight PHP %}
<?php
$totalItems = count($_SESSION['basket']);
echo $totalItems;
?>
{% endhighlight %}

The data pulled back from this page is then inserted into the html of the basket menu item which shows how many items are in the basket array.

Once the basket page was complete, I created the checkout page which is where the users continues to after checking the items in the basket. I wan't to be able to make a request to the PayPal website to demonstrate what a purchase would look like. I have done some PayPal forms previously, however they were only for one product, not for multiple products. I had to research how to send multiple products to the PayPal page, this was done instead of having one hidden html input with the name of `item_name` and the name of the product as the inputs value, but with mulitple products you simple do lots of hidden inputs with the names of `item_name_1`, `item_name_2` etc.

Now I had figured out how to add multiple products I needed to figure out how to give the right items the right price and the right quantity, this turned out to be exactly the same as the item names, it is simply `amount_1`, `amount_2` and `quantity_1`, `quantity_2`.

So now I loop through each item in the basket array and echo out the item_name, amount and quantity with the iterator on the end so it becomes `item_name_$i`, `amount_$i` and `quantity_$i`.

As well as all the item data, I also created a form which allows the user to input a delivery address and other contact information which is passed along to PayPal and automatically fills out the form on PayPal website for you.

To see this in action simply add a [product](http://catalogue.md-softwaresystems.co.uk/product/Dwarf+Lop/1212) to your [basket](http://catalogue.md-softwaresystems.co.uk/basket/) and then proceed to the [checkout page](http://catalogue.md-softwaresystems.co.uk/checkout/).