---
layout: post
title: "開發css套件-JulieAlert"
description: "customized for better alert"
category: css
tags: [css,jquery,template]
---

>### # 起因
>   有鑒於每一次寫好一份css檔，都無法沿用到下一次開發，或是整個架構需要大修改，
>	我竟然在腦中浮現出 “不然做成模組化吧” 的想法。另外，也在看過 [sweetalert](http://t4t5.github.io/sweetalert/ "title")
>   之後，對於類似的動畫很有興趣，於是就開始著手製作這個套件。
>
<div class="paragraph-seperate"></div>

>### # demo
>    [Juliealert](http://lichin.me/Juliealert "Title")
>    <br><img src="https://raw.githubusercontent.com/lichin-lin/Juliealert/master/JulieAlert.gif" width="300" height="300" />
<br>
<br>

>### # 製作心得
>
>
> #### css preprocessor-Stylus
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;preprocessor可以說是開發css時所必備的工具，避免重複寫一樣的class-name，改以巢狀式的coding style，
>  讓開發減少複雜性以及加快速率。另外，這些preprocessor還加入變數```variable```、函式```functions```...等等十分好用的新功能，為傳統的css打造更方便的開發方式。
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;筆者所使用的preprocessor是[stylus](http://stylus-lang.com "title")這一套，這裡也提供將其轉成css的方式:。希望還沒接觸的人也可以嘗試看看另外:[SASS](http://sass-lang.com "title")、[LESS](http://lesscss.org "title")。
> <br>
>
> #### animation-keyframe介紹
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```animation```用來描述一段動畫的起始、結束、還有運行時間函式等等。其中```@keyframe```是更仔細敘述動畫的呈現方式，以下是基本樣式：
><script src="https://gist.github.com/lichin-lin/03507294bfcf3028395f.js"></script>

<p data-height="268" data-theme-id="0" data-slug-hash="mPWROZ" data-default-tab="result" data-user="lichin-lin" class="codepen">See the Pen <a href="http://codepen.io/lichin-lin/pen/mPWROZ/">Animations Keyframes</a> by lichin-lin (<a href="http://codepen.io/lichin-lin">@lichin-lin</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

>
>	
> #### stop the scrolling
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在pop out動畫出現時，要能夠順利停止scrolling event。
> 方法是:在欲停止捲動的div加上``` overflow:hidden``` 就可以成功達到效果。
>但如果要讓彈出式闖可以捲動請參考:[Prevent body scrolling but ALLOW overlay scrolling](http://codepen.io/anon/pen/xZBovY?editors=0110 "title")這篇文章裡頭有詳細的介紹，
> <br>
> 
>
> #### javascript/css minify
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當開發專案的css、js file開始肥起來後，免不了會影響讀取網頁的速度，進而讓使用著感受到不便。這邊有提供線上minify的方式:[minifier.org](http://www.minifier.org "title")。
另外，也有一套名為[webpack](http://rhadow.github.io/2015/03/23/webpackIntro/ "title")的工具，筆者目前還在研究它的使用方法，也許下一次就可以跟大家做個小分享。
> 


>### # 參考
>1.    [週末長知識: Facebook's "theater" View](http://pymaster.logdown.com/post/238286-weekend-long-knowledge-facebooks-theater-view/ "Title")
>2.    [sweetalert-github](https://github.com/t4t5/sweetalert "Title")
