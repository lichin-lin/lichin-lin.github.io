---
title: Hover! button animation#3
date: 2016-07-28 00:00:00 Z
categories:
- css
tags:
- design
- CSS
layout: post
description: cool animation about overflow:hidden.
img: img/hoverbtn2/hover_effect.png
---

>### # Demo page
> [hover button](https://lichin.me/hoverbtn2/ "Title")

<br>

>### # Design 由來
> ```Pokemon Go``` 開始在全球發燒，可惜 Taiwan 還未開放，在玩遊戲之前先做個練習。趁實習閒暇之餘做了4顆animation button，
這次運用了很多 ```overflow:hidden``` 來製作按鈕，顏色以及形狀上盡量走簡單風格，主要著重在動畫展現的部分。以下說明我製作的原理以及過程:
>
> 1. Ocean: 波浪效果，以及加入顏色變化，有污物以及珊瑚兩種 style
> 2. Minecraft: 8-bit 效果，以及在按鈕中間加入角色
> 3. Pixar: border opacity 效果，簡單但是個人認為很耐看 
> 4. Pokemon: 營造打開寶貝球的感覺，以及字的活潑動畫

<br>

>### #1 Ocean
>
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這是海洋環境議題相關的按鈕組，左方是污染的過程，右邊則是珊瑚五顏六色的象徵。其實這兩顆都是放入 ```border-radius``` 接近50%的圓角四方形，並且不停的原地旋轉，製造出類似波浪的動畫。
>
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接著是 ```hover```的效果，當滑鼠滑入讓四方形緩緩往上並加入顏色變化，就好像海浪的變化一樣，下方的 gif 可以看到去掉 overflow:hidden之後的狀況，另外，加入不一樣的顏色後還會發現按鈕有著不一樣的生命力。
> <br><br><img src="/img/hoverbtn2/ocean.gif"/><br><br>
>
>
> <br>
>
>### #2 Minecraft
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先是按鈕中間 ```creeper``` 可愛的臉，這單純是用一個 div 裡頭運用 before、after 來達到的簡單作法。文末也放上另外一種方式 [8-bit畫畫工具](https://github.com/jvalen/pixel-art-react/ "Title") ，應該可以做出更多複雜的圖形，讀者可以去玩玩看！
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接著是方格背景，這邊用上 [CSS3 Patterns Gallery](http://lea.verou.me/css3patterns/ "Title") 裡頭的 ```linear-gradient``` 方法，有機會筆者也會多多研究裡頭新奇的技巧。例如這次的按鈕中就發現如果將 ```background-size``` 縮到極小，那麼這些細小方格反而就不會顯示出來，借由hover讓size加大，居然就作出這個特別的按鈕了。
>
> <br>
> <br>
>
>### #3 Pixar
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這兩顆按鈕的做法很像，一個是由大變小，
另一個反之。每個按鈕分別有兩個小 div 組成，剛好就是 ```上下border```、```左右border``` 這兩組。
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以發現再加入 ```width```、```height``` 的長度變化後就可以作出跟一般按鈕 border 不一樣的感覺。雖然做法不難，但是因為加入一點小設計，會給人新鮮的感覺，這是裡頭我看起來覺得很舒服的一組按鈕。
> <br><br><img src="/img/hoverbtn2/InsideOut.gif"/><br><br>
>
> <br>
>
>### #4 Pokemon
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這是一顆寶貝球！我想營造出打開寶貝球的感覺，顯然兩塊背景分別往上下打開，正是寶貝球中的東西要出來了！在這裡，也是運用 overflow:hidden來限制滑出的物件。
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在裡面的字首先會有一道黑色的bar由左到右劃開，接著會有上下兩個文字往中間集中，這裡的動畫參考了 [Inspiration for Text Styles and Hover Effects](http://tympanus.net/codrops/2015/05/13/inspiration-for-text-styles-and-hover-effects/ "Title") 裡面的 ```Mallki``` 字體效果，並且更改上下兩個文字的顏色，維持寶貝球上紅下白的顏色。
> <br><br><img src="/img/hoverbtn2/pokemon.gif"/><br><br>


>
>### # 參考
> 這次的練習主要是想讓一些生活上的東西更能結合到 Web UI 上面，希望不只有練習到技術，也能將想法融入到這些元件之中，製作出富有意義、創新的產物。
>
>1.    [my codepen](http://codepen.io/lichin-lin/ "Title")
>2.    [my hover button](https://lichin.me/hoverbtn2/ "Title")
>3.    [CSS3 Patterns Gallery](http://lea.verou.me/css3patterns/ "Title")
>4.    [pixel-art-react by Javier](https://github.com/jvalen/pixel-art-react/ "Title")
>5.    [Inspiration for Text Styles and Hover Effects](http://tympanus.net/codrops/2015/05/13/inspiration-for-text-styles-and-hover-effects/ "Title")
