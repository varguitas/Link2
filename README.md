Link2
=====

A JQuery based library that allows you to use ajax for transitions betwen pages.

How to use
----------

Add the class .link2_a to those elements where you need to redirect. (Cannot be an A HREF) 
Then, add the attribute data-href, with the url that you want to load.

*This library REQUIRES JQuery and the jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js, jquery.ui.effect.js, jquery.ui.effect-slide.js. Use the hole JQueryUI library or the customized library included in this repository.*

Example
-------
<blockquote>
<!-- This will load the hole page with the contact.html located at the same location of this file. The data-title is for the new title of the site after loading.-->
<div class="link2_a" data-href="contact.html" data-title="Contact">Contact the admin</div>
</blockquote>

