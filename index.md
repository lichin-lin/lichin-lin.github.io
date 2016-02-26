---
layout: page
title: Home Page
tagline: Supporting tagline
---
{% include JB/setup %}
{% include JB/setup %}
<!--div>
{% assign posts_collate = site.posts %}
{% include JB/posts_collate %}
</div-->
<ul class="posts">
  {% for post in site.posts %}
    <li><section><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a><br><span>{{ post.date | date_to_string }}</span></section></li>
  {% endfor %}
</ul>


