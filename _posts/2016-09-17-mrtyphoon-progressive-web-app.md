---
title: Mr.Typhoon-progressive web app(下篇)
date: 2016-09-17 00:00:00 Z
categories:
- Blog
tags:
- web app
layout: post
description: web that work like an app.
img: img/typhoon/rabbit.png
---

>### # Demo page
> 1.[Mr.typhoon](https://quote-b781f.firebaseapp.com/ "Title"){:target="_blank"}<br/>
> 2.[Github](https://github.com/lichin-lin/typhoonPWA "Title"){:target="_blank"}

<br>

>### # app 由來
> ```Progressive Web App (PWA)``` 第一次聽到是偶然在 google developer 的文件上看到的。稍微看過之後發現，這不就是用網頁在實作app的一項觀念嗎？好奇之下就跟著[教學文件](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en "title"){:target="_blank"}的步驟一步步去實作，以下會簡略說明這三天我的一些收穫，更詳細的介紹可以參考官方文件。(因為在製作app時候也稍微考慮了設計的問題，於是將文章拆成上下兩篇，下篇主要會介紹在設計上的一些心得)

<br>

>### # UI 的五種狀態
> [How to fix a bad user interface](http://scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack "Title"){:target="_blank"} 是我上禮拜看到有關於製作良好UI、提供更好的UX體驗的文章，以下是五種文章內提到的UI狀態：
>
> 1. Ideal State
> 2. Empty State
> 3. Error State
> 4. Partial State
> 5. Loading State
>
> 其實這篇修理 UI 某個層面來說也是在增加使用者的 web 體驗，因此我認為他是有描述到 UX 的部分。
> 讀完後真的開始注意到很多細節整體來說就是不要冷落 user 的任何一個動作，
> 透過回饋，讓他們可以很清楚知道發生了什麼事，以保持用戶的黏著度，接著，在這個基礎層面之上，再加入更多含有個人特色(```標語的語調``` 、 ```活潑的動畫```)的設計，我想，一個很棒的app體驗就會誕生了！

>
>### # 整體版面
>在介紹我做的 UI 狀態前先說明這次 ```Mr.typhoon``` 有以下幾種訊息需要傳遞:
>
> 1. main content - 整體的颱風資訊
> 2. refresh button - 刷新資訊按鈕
> 3. on/off line notification - 連線通知
> 4. author information & Remark - 其他次要訊息
> <br><br><img src="/img/typhoon/total-app.png"/><br><br>
> 
> * • 置頂的 ```是否離線``` 通知，用來告知使用者目前的網路狀態，方便確定資料正確性。
> * • 主要資訊(main content)裡不同字體 ```大小``` 代表的用途：越大的字代表越重要的資訊。
> * • 將時間、距離、說明以及注意用最大字呈現，來凸顯各段落文字。
> * • 用細小的字來補充較不必要的資訊或是簡短說明。
> * • 若對於距離較無概念，也可以透過上方圓形image來知道目前颱風嚴重程度。
> * • 在配色方面，選用藍色為底/黃色為主色，製造出差異配色。
>

>### # UI 的五個狀態(1) 理想/失敗 Ideal/Error
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這個 app 其實目的非常明確，不是成功載入資訊就是失敗。首先這是 ```離線``` 畫面，
> 這樣的離線我認為也是一種 ```理想狀態```，就恰恰跟理想連上網頁相反。這邊我選擇顯示紅色bar配上一小段敘述。直接顯示error是非常糟糕的，至少也要說明原因，另外，直接跳出 alert 視窗也會使人困擾，畢竟他長得很恐怖，真的是可以把錯誤訊息包裝好再呈現出來。
> <br><br><img src="/img/typhoon/state-offline.gif"/><br><br>
> 失敗狀態的話，就是指說在刷新資料時遭遇到錯誤(例如突然斷線)，所要做出的回饋。
> 當我的資料獲取遇到終止時，我依舊會跳出紅色bar，並且禁止透過 refresh 在獲得資料。
> 當然重整的時候還是會去檢查是否 ```Cache``` 裡已經存有過往的資料，可以先呈現出來。
> <br><br><img src="/img/typhoon/state-loadingFail.gif"/><br><br>
>

>### # UI 的五個狀態(2) 載入/空白 Loading/Empty
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當使用者按下 ```refresh``` 之後，會進入等待，這邊我加入了一個 spinner。基本上如果不加入一個等待示意圖，會造成使用者困惑的。 Facebook 在載入的時候
選擇加入 [Skeleton Screens](https://www.sitepoint.com/how-to-speed-up-your-ux-with-skeleton-screens/ "title"){:target="_blank"}，這是非常棒的使用者體驗，除了讓等待的過程不再只是一般的 spinner，也讓使用者更能瞭解到待會兒要呈現出來的內容。
> <br><br><img src="/img/typhoon/state-loading.gif"/><br><br>
> 空白狀態也很重要，如果整頁空空的不只會讓使用者困惑，甚至也會第一時間不知道該怎麼去操作。現在很多 app 都會在空白時加入一個引導的圖片(可以是 ```第一次拜訪嗎?``` 、 ```或許可以試試看？```)來讓使用者更快速地上手，並且不會出現呆滯的尷尬狀況。我則選擇加入一些文字說明，配上一個大大的重新整理按鈕。也許看完簡單的說明後，使用者會有預期心理，那麼在操作上也就不會太不明所以了。
> <br><br><img src="/img/typhoon/state-init.gif"/><br><br>
>

>### #UI 的五個狀態(3) 沒有加入的狀態
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;載入局部資料我並沒有多加考慮，原因是我的資料量還少，可以一次呈現或是都不要呈現。與其呈現部分資訊，我選擇直接顯示錯誤，會讓app更單純一點。
><br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外，在這篇[頁面的第 6 種狀態：極限狀態](http://blog.akanelee.me/posts/384307-sixth-state-of-the-page-maximum-state/ "title"){:target="_blank"}也是另外一種需要去考慮的因素點，基於我的 app 還沒有那麼複雜的功能，這項極限狀態也不在這次的考量範圍內。


>### # 小結
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;透過這篇文章裡的例子，真的獲得很多新知，
> 其實從使用者的角度去思考，或是把自己想得沒那麼聰明，往往就可以再多發現自己 app 的盲點，這個 ```Mr.typhoon``` 當然還有很多待改進、討論的地方。希望能慢慢導入良好UX，讓不只這個 web app，以及往後的作品有更棒的使用者體驗！
>
>1.    [How to fix a bad user interface](http://scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack "Title"){:target="_blank"}
>2.    [How to write a great error message](https://medium.com/@thomasfuchs/how-to-write-an-error-message-883718173322#.nzfz1q374 "Title"){:target="_blank"}

