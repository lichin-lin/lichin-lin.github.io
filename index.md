---
layout: page
title: Home Page
tagline: Supporting tagline
---
{% include JB/setup %}
<!--div>
{% assign posts_collate = site.posts %}
{% include JB/posts_collate %}
</div-->
<ul class="posts">
  {% for post in site.posts %}
    <li>
      <img src="{{ post.img }}">
    	<section>
  			<ul class="tags">
  			{% for tag in post.tags %}
  			  <li><a href="/tags#{{ tag }}" class="tag">{{ tag }}</a></li>
  			{% endfor %}
        <br>
        <span>{{ post.date | date_to_string }}</span>
  			</ul>
        <ul class="post-info">
      		<a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
        </ul>
    	</section>
    </li>
  {% endfor %}
</ul>

<!-- Hotjar Tracking Code for http://lichin.me -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:182692,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>


