---
layout: post
title: "React.js-intro"
description: "Javascript library with totally new view"
category: React
tags: [css,react]
---
## 這個三月我去找了實習，在只會一些html/css的能力下所能找到的機會實在有限。正好這時候看到有一家新創公司正在徵 React.js 相關技能的實習生，就趁著這個機會來學習一下新技術。
---

>### # 學習資源
>1.    Sign-in/sign-out 標籤: ```hover``` animation，以及轉換登入註冊時的animation。
>2.    Input: 輸入時 ```focus``` animation ， jquery tab keycode ignore。
>3.    Form: button ```hover``` & ```click``` animation ， slide effect。
>
><p data-height="301" data-theme-id="0" data-slug-hash="MKMezg" data-default-tab="result" data-user="lichin-lin" class="codepen">See the Pen <a href="http://codepen.io/lichin-lin/pen/MKMezg/">Plus Minus button with React</a> by lichin-lin (<a href="http://codepen.io/lichin-lin">@lichin-lin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
>

>### # 心得分享
>1.    利用css ```:hover``` 搭配 ```transition``` 可以做出更多動畫。
>2.    利用 ```transition``` 的 ```cubic-bezier()``` timing-function 動畫會更有趣。
>3.	   sign in/out 其實是一個 width 200% 的 ```div```，其動畫是利用 parent element 的 ```overflow:hidden```，搭配左右移100%來呈現 slide animation。
>4.    在用tab來跳至下一個 ```input``` 時，會發生 slide animation bug，因此找到 jquery keycode event，ignore 使用者按下的tab鍵來解決問題。
>

>### # 參考
>1.    [React.js](https://facebook.github.io/react "Title")
>2.    [REACT FOR DESIGNERS](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/ "Title")
>3.    [Flux-單向資料流介紹](https://exma-square.gitbooks.io/mobious-cookbook/content/Front-End/Flux/Data-flow.html/ "Title")
>
>


