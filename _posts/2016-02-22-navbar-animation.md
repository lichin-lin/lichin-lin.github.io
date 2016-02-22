---
layout: post
title: "navbar animation-漸變效果transition"
description: "navbar animation with scrolling"
category: CSS
tags: [Animation]
---
## 這是我在製作本網站navbar時，所運用到的css技巧。利用transition這項元素，可以完成很多簡單的動畫。
---

###步驟
>1.    產生一個 `div` 元素 (此範例class name為 `navbar`)，在CSS給予 `position:fixed` 的元素，以其來製作動畫。
>2.    利用jquery的 `.scroll()` Browser Events，於一定條件之下對navbar增減class (此範例增減的class name為 `color-change`)。
>3.    利用 `transition` 即可以對 `background-color` `height` 做出圓滑動畫。
><p data-height="300" data-theme-id="0" data-slug-hash="Goapqy" data-default-tab="result" data-user="lichin-lin" class='codepen'>See the Pen <a href='http://codepen.io/lichin-lin/pen/Goapqy/'>navbar scroll animation</a> by lichin-lin (<a href='http://codepen.io/lichin-lin'>@lichin-lin</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


###Transiton 介紹
>CSS Syntax
>
>
>	transition: [property] [duration] [timing-function] [delay];
>	default: all 0s ease 0s;
>
>*	property(屬性): 指定要套用上動畫的css元素。
>*	duration(動畫持續時間): 指動畫會持續幾秒鐘，0為default value。
>*	timing-function(變換函式):動畫的形式，這裡可以瞭解更多[transition-timing-function](http://cubic-bezier.com/ "Title")。
>*	delay(延遲時間): 可以控制動畫多久之後才開始。

###參考
>1.    [css-trick transition](https://css-tricks.com/almanac/properties/t/transition/, "Title")
>2.    [jquery .scroll()](https://api.jquery.com/scroll/, "Title")
>3.    [30+ Scroll animation](http://ninodezign.com/30-jquery-plugins-for-scrolling-effects-with-css-animation/, "Title")
