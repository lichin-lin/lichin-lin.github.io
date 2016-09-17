---
title: Mr.Typhoon-progressive web app(上篇)
date: 2016-09-12 00:00:00 Z
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
> 2.[GitHub](https://github.com/lichin-lin/typhoonPWA "Title"){:target="_blank"}

<br>

>### # app 由來
> ```Progressive Web App (PWA)``` 第一次聽到是偶然在 google developer 的文件上看到的。稍微看過之後發現，這不就是用網頁在實作app的一項觀念嗎？好奇之下就跟著[教學文件](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en "title"){:target="_blank"}的步驟一步步去實作，以下會簡略說明這三天我的一些收穫，更詳細的介紹可以參考官方文件。(因為在製作app時候也稍微考慮了設計的問題，於是將文章拆成上下兩篇，上篇主要會介紹PWA的技術)

<br>

>### #1 why
> 1. How to design and construct an app using the “app shell” method
> 2. How to make your app work offline
> 3. How to store data for use offline later
>
> 這裡主要說明了PWA的理念。到底為什麼一個web 可以將資料存起來供離線使用，以下附上一般網頁與PWA，在 ```有網路的情況``` 重新整理之後的畫面:
> <br><br><img src="/img/typhoon/pwa.gif"/><br><br>
> 以及來看看 ```沒有網路``` 的情況下:
> <br><br><img src="/img/typhoon/pwa-offline.gif"/><br><br>
> 顯然透過上面的 gif 大家應該能發現東西被保存下來，儘管離線下，還是可以看到一些已存過的資料。
>
>### #2 先說明結論
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那到底這個技術的功用是什麼呢？簡而言之，google 希望就算是用 web 來模擬 app 的行為，在各種不一樣的環境下還是能實現某一部份的功能，在越完美的情況下越接近app(所以稱之為 progressive, 漸進的應用程式)。主要的特點如下:
>
> 1. 離下還是有功能
> 2. 推播通知
> 3. 可以安裝到手機主畫面(會有logo)
> 4. 瀏覽時沒有一般網頁的 url bar(看起來就是一個 app)
> 5. 安裝並不需要去 app store，方便很多
>
> <br>
>
>### #3 新的理念？
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想這個PWA的想法並不會跟現在的前端架構(react.js, vue.js...)相衝突，相對的，某些Github上的專案也慢慢引入在網頁加上這個存取 ```Cache``` 的概念，讓網頁的功能更強大。所以要是有多餘時間，真的可以去學習一下 on/off line的概念，其實呢，在2014年時也已經有類似的[概念](https://jakearchibald.com/2014/offline-cookbook/ "title"){:target="_blank"}應用在網頁上了。
>
> <br>
>
>### #4-1 App Shell
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當我們在讀取網頁的時候往往會重複load進 UI(html, css, js 都包含在內)的部分，App Shell 可以想成是將這些[不斷載入卻又不會改變]的部分存入 Cache，那麼整個網頁只要專心載入新的資訊即可，UI的部分將會在下次load時```立即```載入。因此，好的 App Shell Architecture 設計就變得非常重要了，哪些是必須存下來的、哪些又是非立即性需要被看到的...都是需要考量的點了。
>
> <br>
>
>### #4-2 App Shell design
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以我的 Mr.Typhoon 為例，我就將以下的部分寫在 ```index.html```，再把它存起來供離線使用， 舉一反三，基本的 css, js, img 我也把他們寫進去，以便離現時正常顯示整個 web：
> <br><br><img src="/img/typhoon/pic-1.png"/><br><br>
>
>
>### #5 Service Workers
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;當我們告訴整個Shell 要存下哪些東西時，就換到整個 Service worker 來發會功用了，SW有自己的生命週期，而且跟網頁是完全分開的
。
>通常 SW 會有 ```install```、```activate```、```fetch```。首先有關於install，我們必須先去註冊(register)，當你成功註冊一個 SW 之後，瀏覽器就會在背景執行一個 Service Worker。需要注意的是，install這個階段會把需要Cache的檔案存取來，只要一有任何檔案存取失敗，就不會進入```activate```。如果成功install，會進入 ```activate``` 的狀態，這邊會去等待舊的 worker 被 kill掉或是清除舊的Cache。最後是 ```fetch``` 的部分，這裡就有關於資料取得的部分， 
>礙於篇幅長度，以及準確的例子，更詳細的部分可以查閱[Mozilla-Using Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers "title"){:target="_blank"}。
> <br><br><img src="/img/typhoon/pic-2.png"/><br><br>
> <br>
>
>### #6 Web App Manifest-加入logo
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想另外一個PWA最棒的部分就是，他可以客製化一個logo!真的是逼近原本mobile app 該有的樣貌。另外，也可以製作 ```splash screen``` 讓登入的使用者等待時候可以有個簡單的畫面擋住loading 中的資料，以下是我在iphone上的 Mr.typhoon logo。
>
> <br>
>
>### #7 其他注意事項
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在使用整個PWA時，只能允許 ```localhost```、```https```以提供基本安全防護，另外目前主流的瀏覽器支援也不高，面對廣泛的使用者，還是會有大多數人不能看到最棒的app狀態:
> <br><br><img src="/img/typhoon/pic-4.png"/><br><br>
>
> <br>
>
>
>### # 小結
> <img src="/img/typhoon/pwa-show.gif"/><br><br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上面是範例的畫面，當有連線時會先把Cache裡的data放進去，再透過network 去抓api 已更新資料。當如果今天把網路關掉，那重整畫面過後，cache data 還是可以呈現出來，不會因為離線而不見。
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這次主要運用在獲得颱風的距離，由於還沒很熟悉整體框架，思考上可能會有很多問題，需要再多加改善(或是加入推播通知)。下面附上一些更大的應用以及學習資源，希望大家也能打造出自己的簡單app!
> 對了，要是喜歡這篇文章，也請持續關心下一篇文章 ```Mr.typhoon``` 設計篇！
>
>1.    [web-telegram](https://web.telegram.org/#/login "Title"){:target="_blank"}
>2.    [web-flipkart](http://www.flipkart.com "Title"){:target="_blank"}
>3.    [web-pokedex](https://www.pokedex.org "Title"){:target="_blank"}
>4.    [github-learing PWA](https://github.com/ragingwind/learning-pwa "Title"){:target="_blank"}
>5.    [google web start kit](https://github.com/google/web-starter-kit "Title"){:target="_blank"}
