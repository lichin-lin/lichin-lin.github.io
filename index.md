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
    <li>
    	<section>
  			<ul class="tags">
  			{% for tag in post.tags %}
  			  <li><a href="/tags#{{ tag }}" class="tag">{{ tag }}</a></li>
  			{% endfor %}
  			</ul>
        <ul class="post-info">
      		<a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
      		<br><span>{{ post.date | date_to_string }}</span>
        </ul>
    	</section>
    </li>
  {% endfor %}
</ul>


