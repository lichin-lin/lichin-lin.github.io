---
title: IE8! the miserable monster
date: 2016-08-27 00:00:00 Z
categories:
- Blog
tags:
- html
- css
layout: post
description: People still using IE8 to browse your website today.
img: img/IE8/IE-suck.png
---

>### # IE8 的洗禮
> 最近實習接了一份需要向下相容到IE8的專案。原本以為問題不會太棘手，寫好整份前端版型與function後，到了 Microsoft
> 下載了虛擬機需要的[檔案](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/ "Title")，打開之後開啟網頁...頓時陷入絕望。
> 因此特別寫了這篇簡易心得，紀錄一些筆者查詢過好用的script，希望給往後也踏上這條不歸路的同伴一些依靠...
>

<br>

>### #前言
> 這篇[文章](https://www.kycosoftware.com/blog/getting-foundation-5-to-work-in-ie8 "Title")中已經記錄很多方便的套件，其中的四段是很多網站在 ```<head>``` 會去匯入的，下面會解釋其中神奇的套件:
> <script src="https://gist.github.com/lichin-lin/cc25fa886eb5945ac37872666725af1b.js"></script>
>

<br>

>### #1 IE8 認識新朋友
> 感謝 ```aFarkas``` 的貢獻，用[html5shiv](https://github.com/aFarkas/html5shiv "Title")讓IE8認識HTML5的世界。這是一段讓 IE6、IE7、IE8 支援 HTML5 標籤的 JavaScript。
> 記得要 include 在任何HTML5 tag 之前，不然預先讀到的tag，IE8還是不認識啊！
>

<br>

>### #2 RWD一下好嗎
> 現在每個人都有著手機，用手機瀏覽website的比例，已經超過全部瀏覽數的一半。儘管IE8不需要顯示mobile版本的畫面，
> 但是對於大螢幕還是需要做響應式的設計，筆者使用過 ```scottjehl``` 提供的[Respond.js](https://github.com/scottjehl/Respond "Title")，真的是解了心頭愁。
> 另外也附上[css3-mediaqueries.js](https://github.com/livingston/css3-mediaqueries-js "Title")以及兩者之間在[stackoverflow](http://stackoverflow.com/questions/12837568/css3-mediaqueries-js-vs-respond-js "Title")上討論的差異。
>

<br>

>### #3 我的小孩是誰？
> 大家在做 css 樣式時，可能會去針對特定元素做style control，例如 ```nth-child(2)``` 、 ```nth-child(odd)``` ...等等。
> 利用[selectivizr](http://selectivizr.com/ "Title")這個javascript，將可以繼續平常用的 CSS3 selectors。但是在效能上會大打折扣，
> 因為這個script其實會去做二次loading原本的style，使用上還是要注意保持網頁流暢性。
>

<br>


>### #4 背景圖你在哪裡
> 很多人會利用 ```background-size: cover``` 來解決圖片比內容小時的問題，但是這件事在IE8上他並不懂，圖片只會赤裸裸的呈現在你眼前。
> 因為這樣 ， ```louisremi``` 開發了一套 [background polyfill](https://github.com/louisremi/background-size-polyfill "Title")！
> 藉由在專案裡頭加入 ```htc``` 檔案，讓IE8也能支援這個方便的屬性。其原理是產生一個 ```<img />``` 並計算模擬出跟內容一樣大小的 background-image。
> 但畢竟，img 並非 background， ```background-position``` 也無法用在style裡面。是美中不足的地方。
>

<br>

>### #5 console.log("Fail")
> console是我每次在debug時會用的方式，但是在IE8使用上非常麻煩，若是沒有先開啟開發者工具(IE Dev Tools)，整個網頁會掛掉給你看，
> 筆者深受其害，發現這個問題的[原因]("https://msdn.microsoft.com/library/gg589530(v=vs.85).aspx" "Title")之後實在很悲傷，
> 可以養成習慣把 console.log 清乾淨，或是用下述的方式來繼續使用 console.log。下次，請一定要注意！
> <script src="https://gist.github.com/lichin-lin/35592d21a3842f41dddc0e134f0ecb78.js"></script>
>

<br>

>### # 參考
> 這次的專案做起來實在費神，除了寫寫一般人看的前端，還要特別照顧IE browser user。令外，很多 Framework 特效以及style在IE8上也不再支援，
> 希望使用者可以盡快升級自己的瀏覽器，想想看，一台手機多貴都肯買了，瀏覽器免費升級應該是沒那麼困難吧！以下也附上一些連結，有興趣可以參考看看：
>
>1. [modernizr](https://modernizr.com/ "Title")
>2. [react work on IE8](https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills "Title")
>3. [web browser analysis](https://clicky.com/marketshare/global/web-browsers/ "Title")
>4. [what is htc file](https://css-tricks.com/forums/topic/what-is-a-htc-file/ "Title")
