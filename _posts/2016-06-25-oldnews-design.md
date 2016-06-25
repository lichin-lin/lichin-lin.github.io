---
layout: post
title: "OldNews design"
description: "connect your FB post with latest news!"
category: Blog
tags: [design]
img: "img/Oldnews/OldNews-desktop.png"
---
>### # Demo page
> [OldNews](https://lichin.me/OldNews "Title")

<br>

>### # Design 由來
> SoftBank 一個月前在 Youtube 上放了一段科技創新的影片，並真的將技術實際應用在偏鄉地方。裡頭有著非常貼心的設計，再不改變原本居民的生活習慣之下，加入了很多好的點子。其中我對於報紙結合社群動態的想法非常有興趣，於是就產生了 ```OldNews``` 的想法。讓年邁的老人在讀報之餘也能追蹤小孩們的近況。以下是這次設計中遇到的問題
>
> 1. 利用 FB developers 連結 ```OldNews```
> 2. 利用 ```Jquery get``` 取得 google新聞
> 3. 整體報紙設計理念
>

<br>

>### # 流程
>
> #### FB developer
>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先要到這邊創立一個應用程式以連結 FB user [link](https://developers.facebook.com "Title")，而登入方式在 [link](https://developers.facebook.com/docs/facebook-login/web "Title") 也有基本的介紹。FB Doc算是非常的清楚，登入的 ```button``` 、 權限規定......等等都有規範，照著複製上去，或是做少許變更都不會花上太多時間。
>其中遇到困難的地方是額外送```取得用戶權限```給FB審核，需要3~5個工作天等待，這是因為我需要獲得用戶動態```posts```與```photos```而送出的請求。([Graph API 測試工具](https://developers.facebook.com/tools/explorer/ "Title")，可以提供線上API操作，模擬使用情形。)
> <br><br><img src="/img/OldNews/OldNews-straight.png"/><br><br>
>
>
> <br>
>
> #### 報紙內文
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;這裡是第一版的報紙內容，可以看到展示了圖片與內文，
以及發文時間跟人物。一開始的想法有：
>
> 1. 文字方向: 亞洲許多地方的文字皆可以直向書寫，於是我也照著排版。但是在後來遇到英文字無法直向閱讀，以及中文斷句無法正確切分的問題
就只能改成橫向的了。
> 2. 排版: 報紙是非常多字，非常多字的一種閱讀物品，因此 ```background-color```、```border``` 我都盡量少用，製造出一塊塊文字群以區分不同新聞。
>
> 排版好之後就加入網路新聞，下一段會說明遭遇到的一些小問題。
> <br><br><img src="/img/OldNews/OldNews-init.png"/><br><br>
>
> #### 瀑布流排版-Masonry & get news
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以發現一般的 css style 會將每一個新聞post自動齊高，造成每一篇結尾時，下方留下不必要的空白，整個觀感非常僵硬。網路上有一套能達到不齊高的套件-[Masonry](http://masonry.desandro.com "Title")，順利地解決了空間上的問題，讓整體的排版更緊密。
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因為我的blog是使用```https```，而目前許多家網路新聞都仍然使用```http```，顯然一般的 Jquery get 是會被[拒絕](http://stackoverflow.com/questions/15375908/ajax-get-request-over-https "Title")的。最後在 [google news](https://news.google.com.tw "Title")這裡發現使用```https```，因此就可以用 ajax get 把想要的標題與url連結存放到array，以方便隨機產生新聞到```OldNews```上。
> <br><br><img src="/img/OldNews/OldNews-select.png"/><br><br>
>
>
> #### 傾斜 & 細節修改
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;排版告一段落之後就需要修改```FB login widget```，因為原本的fb按鈕與整體的設計相差甚遠，放在上面顯得突兀。尤其字體上有霓虹的感覺，不需要一個填滿的實心按鈕。([FGD](https://sellfy.com/freegoodies "Title")這裡有許多的設計素材，這一次的標題也是使用這個團隊所提供的字體)
>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另外在整個報紙的擺放上參考了[Mary Lou的作品](http://tympanus.net/codrops/2016/05/25/isometric-and-3d-grids/ "Title")，其中的傾斜讓我很感興趣，於是也做了一個一樣的顯示效果。可以看到整體有一種展示新產品的感覺，讓原本平面的東西添加一點活力。
> <br><br><img src="/img/OldNews/OldNews-fbBtn.png"/><br><br>
> 附上電腦版的```OldNews```，在scroll時還會有一些小動畫:
> <br><br><img src="/img/OldNews/OldNews-desktop.png"/><br><br>
> 以及手機版，會將整個標題固定在上方:
> <br><br><img src="/img/OldNews/OldNews-mobile.png"/><br><br>

>
>### # 參考
>1.    [OldNews](https://lichin.me/OldNews "Title")
>2.    [Analog Innovation-SoftBank](https://m.youtube.com/watch?feature=youtu.be&v=yY12m7tjghI "Title")
>3.    [Cascading grid layout-Masonry](http://masonry.desandro.com "Title")
>4.    [Isometric and 3D Grids-Mary Lou](http://tympanus.net/codrops/2016/05/25/isometric-and-3d-grids/ "Title")
