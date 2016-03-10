---
layout: post
title: "React.js-intro"
description: "Javascript library with totally new view"
category: React
tags: [css,react]
---
## 這個三月我去找了實習，在只會html/css的能力下所能找到的機會實在有限。正好這時看到有家新創公司正在徵 React.js 相關技能的實習生，就趁著這個機會來學習一下新技術。
---

>### # 學習資源
>1.    官方 React.js 有詳細的demo跟步驟解釋，一步步跟著做就能暸解他獨特的理念。
>2.    [React.js](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/ "Title")的應用小範例。
>
>
<div class="paragraph-seperate"></div>

>### # 心得分享
>
>
> #### 虛擬DOM
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.js 是一套顛覆以往想法的前端UI框架。Facebook當初推動時，就是為了解決使用者複雜的元素操作，提高網頁效率。在這裡 React.js 引入 `VirtualDOM` 的機制。
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當一個UI有資料變動而牽扯到畫面改變更新時，React.js 會根據新的狀態重新繪製一份 VirtualDOM，並且比對新舊差異，不同的差異之處才會真正的更新到 DOM ，反應在使用者的網頁上。
>
> <br>
>
> #### 組件(Component)化的思維
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Virtual DOM 不僅僅帶來速度上的便利，也使得UI有了可組合性。 Virtual DOM 的機制讓每個 UI 都視為一個個的組件，而每一個組件都有其要呈現的樣貌以及事件控制，經過封裝與組合最後有系統的成為完整的大UI。
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這有別於MVC的前端思維，將 表現-數據-控制器 三項分離，開發者必須去設計每個 UI 相互的影響，在大型專案裡，這會變得十分錯綜複雜，以及難以維護。
React.js 則開創了新的想法， 開發者僅僅需要維護好每個組件，就能不斷擴充網頁。
>
> <br>
>
<div class="paragraph-seperate"></div>
>### # 練習
>	藉由兩個按鈕以及一個顯示分數說明 React.js 的特性，定義好每個組件的事件以及呈現，就能實作出功能簡單的分數版。
>	更多 React.js 的學習心得會在下次與大家分享喔～
><p data-height="301" data-theme-id="0" data-slug-hash="MKMezg" data-default-tab="result" data-user="lichin-lin" class="codepen">See the Pen <a href="http://codepen.io/lichin-lin/pen/MKMezg/">Plus Minus button with React</a> by lichin-lin (<a href="http://codepen.io/lichin-lin">@lichin-lin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

>### # 參考
>1.    [REACT FOR DESIGNERS](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/ "Title")
>2.    [Flux-單向資料流介紹](https://exma-square.gitbooks.io/mobious-cookbook/content/Front-End/Flux/Data-flow.html "Title")
>3.    [Getting started with Redux](https://egghead.io/series/getting-started-with-redux "Title")
>


