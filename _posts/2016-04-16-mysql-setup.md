---
title: MAC-Homebrew安裝MySQL
date: 2016-04-16 00:00:00 Z
categories:
- Database
tags:
- MySQL
layout: post
description: Try to install you first database!
img: img/mysql.jpg
---

>### # 起因
>大二下修了系上一門 Database 的課，主要使用的是利用MySQL，來對飛機航班資料做query。以下是我在Mac OSX從安裝到實作的一些紀錄。
>
>
>

<br>

>### # 安裝Homebrew,MySQL
>首先打開你的terminal，到這裡安裝:[link](http://brew.sh/ "Title")，已經有安裝的也可以更新```brew```。
> 
><script src="https://gist.github.com/lichin-lin/9e8306ced5c41a9268b0d2b9e2d65167.js"></script>


<br>

>### # 開啟MySQL.Server,設定密碼
>請耐心等待第一個步驟，因為會在你的mac上安裝不小的檔案。等到好的時候執行下列指令，通常是使用```root```作為MySQL登入帳號，所以也記得去設定一下```root```的密碼:
>
><script src="https://gist.github.com/lichin-lin/133b52ee2b5bc0a344a322ce3d5f7f44.js"></script>
>p.s.對於第二個指令(mysql_secure_installation)有疑慮的可以參考:[MySQL Documentation](https://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html "Title")

<br>

>### # 開始使用MySQL
>
>如果上述步驟都完成了，就可以試著使用MySQL了 (恭喜!!)，首先是登入然後試著看看你的databases，若是沒問題，就可以開始 Create 作業要的 Database,tables了:
>
><script src="https://gist.github.com/lichin-lin/73e6bb01b19a5f23d74d0bc73d1d0275.js"></script>
>

<br>

>### # 如何替換NA字體
>
>這一步我也還不確定，每台電腦可能狀況不一樣，有很多做法可以達到，也有可能不需要做就能完成作業，提出來大家參考。不知道怎麼確定對錯的時候，可以先自己新增一個小檔案，裡頭自己隨便嘗試幾個狀況，看看結果，對了再更改```csv file```。
>
><script src="https://gist.github.com/lichin-lin/cdff63dc646ae8f357e5025e419bdb63.js"></script>
>這裡也提供一些替換字元正規表示法:[link](http://cpc.richliu.com/Day3/4.grep%20and%20regular%20expression.pdf "Title")

<br>

>### # Import data from CSV file
>
>進入一個database之後，首先要create table，助教也有給上table範例，所以也可以參考:[here](http://stat-computing.org/dataexpo/2009/sqlite.html "Title")，在Import data 時要注意```input type```，例如已經宣告```int```形式了，就沒辦法吃"NA"這樣的input，但是這些飛機航班資料裡面，只要資料沒給齊全就會在那個欄位記上"NA"，因此在import前一定要把資料整理過，不然開始query一定會發生悲劇，慘不忍睹，筆者深受其害。
>
><script src="https://gist.github.com/lichin-lin/155fcdb661d5b7b99badb89ca75631aa.js"></script>


>### # 參考
>1.    [在 Mac 下用 Homebrew 安装 MySQL](http://blog.neten.de/posts/2014/01/27/install-mysql-using-homebrew/ "Title")
>2.    [MySQL 修改密碼、忘記密碼](http://emn178.pixnet.net/blog/post/87659567-mysql修改密碼與忘記密碼重設 "Title")
