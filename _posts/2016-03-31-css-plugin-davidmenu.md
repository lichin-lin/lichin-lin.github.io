---
layout: post
title: "開發css套件-Davidmenu"
description: "full-screen animation menu"
category: css
tags: [CSS,jquery,template]
img: "img/davidmenu.png"
---

>### # 起因
>   延續之前的套件練習，這一次我又想製作全螢幕式的動態menu。
>	搭配適當的色票所組合而成的背景，以及動畫呈現，
>   於是促成這一個客製化套件的產生。
>
<div class="paragraph-seperate"></div>

>### # demo
>    [Davidmenu](http://lichin.me/Davidmenu "Title")
>    <br><img src="https://raw.githubusercontent.com/lichin-lin/Davidmenu/master/image.png"/>
<br>
<br>

>### # 製作心得
>
>
> #### 背景色挑選 linear-gradient
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;為了讓背景色不單調，於是選擇使用漸層效果。如果仔細看過demo會發現，
>顏色都沿著同一個角度去做變化，這是```linear-gradient```的呈現結果，以下說明兩種筆者最常用的特性，若是讀者想要更進一步了解其他屬性可以參考:[reference](http://www.w3schools.com/css/css_background.asp "Title")
><script src="https://gist.github.com/lichin-lin/03515b60ecb9c54204b5d38b3931e174.js"></script>
>
>
> <br>
>
> #### CSS animation-degree transform
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在```Davidmenu```最後兩種animation裡運用到```rotate```的函式。
>這種函式讓動畫可以轉動，翻滾的呈現，常使用的有```rotate``` , ```rotate3d```,另外也有分別對三個方向描述的```rotateX``` , ```rotateY``` , ```rotateZ```，以下是我實際上運用的函式以及網路範例:
><script src="https://gist.github.com/lichin-lin/751536d078cabafb53cba2b456ea3fc9.js"></script>
>
>	
> #### CSS display-flex
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每次要做排版時，總是綁手綁腳，又或是操作十分麻煩。
>利用 ```flex``` 將可以做到很多以往難達成的排版，而且方法十分乾淨。```flex-direction```可以直覺的控制子物件 
>排列方向，另外以前覺得困擾的垂直至中也可以用輕鬆用 ```justify-content:center``` 來搞定!有興趣的讀者可以再參考下方連結。
> 裡頭有著初步的呈現```flex```的特性。
> <br>
> 
>


>### # 參考
>1.    [display:flex 版面配置](http://zh-tw.learnlayout.com/flexbox.html "Title")
>2.    [快速色票挑選器-coolors](http://coolors.co/ "Title")



