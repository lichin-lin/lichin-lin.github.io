---
layout: post
title: "form animation"
description: "sign-in form with slide effect."
category: CSS
tags: [Animation]
---
##學校近日在寫NCTU online-judge的平台，我有幸能參與其中的前端設計。以下是我製作的 sign-in form，以及幾個小技巧分享。
---

>### # form上使用的技巧
>1.    Sign-in/sign-out 標籤: ```hover``` animation，以及轉換登入註冊時的animation。
>2.    Input: 輸入時 ```focus``` animation ， jquery tab keycode ignore。
>3.    Form: button ```hover``` & ```click``` animation ， slide effect。
>
><p data-height="527" data-theme-id="0" data-slug-hash="qbeNjE" data-default-tab="result" data-user="lichin-lin" class='codepen'>See the Pen <a href='http://codepen.io/lichin-lin/pen/qbeNjE/'>NCTUOJ-form</a> by lichin-lin (<a href='http://codepen.io/lichin-lin'>@lichin-lin</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
>

>### # 技巧分享
>1.    利用css ```:hover``` 搭配 ```transition``` 可以做出更多動畫。
>2.    利用 ```transition``` 的 ```cubic-bezier()``` timing-function 動畫會更有趣。
>3.	   sign in/out 其實是一個 width 200% 的 ```div```，其動畫是利用 parent element 的 ```overflow:hidden```，搭配左右移100%來呈現 slide animation。
>4.    在用tab來跳至下一個 ```input``` 時，會發生 slide animation bug，因此找到 jquery keycode event，ignore 使用者按下的tab鍵來解決問題。
>

>### # 參考
>1.    [NCTUOJ](https://oj.nctu.me/, title)
>2.    [jquery tab keycode ignore - Stackoverflow](http://stackoverflow.com/questions/1314450/jquery-how-to-capture-the-tab-keypress-within-a-textbox, title)
>3.    [CSS Form design](http://collectui.com/challenges/form, title)
>


