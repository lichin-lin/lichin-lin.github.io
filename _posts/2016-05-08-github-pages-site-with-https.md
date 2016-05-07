---
layout: post
title: "github pages-site with HTTPS"
description: ""
category: Blog
tags: [web-tech]
img: "img/HTTPS.jpg"
---
>### # HTTPS intro
> HTTPS是超文字傳輸安全協定（英語：Hypertext Transfer Protocol Secure)，利用SSL/TLS來對封包進行加密，比起 HTTP 更安全。
> 以下幾點優點(來自[google 說明](https://support.google.com/webmasters/answer/6073543?hl=zh-Hant "Title"))，簡而言之就是，使用 ```HTTPS``` 更能保障隱私及安全性:
>
> 1. 加密：對交換的資料進行加密，防止資料遭到竊取。也就是說，當使用者在瀏覽網站時，任何人都無法「竊聽」其對話、追蹤他們在多個網頁之間轉換的活動，或竊取其資訊。
> 2. 資料完整性：系統會偵測出資料在傳輸過程中是否遭到有意或無意的修改或破壞。
> 3. 驗證：驗證您的使用者是否與預期的網站進行通訊。這能預防攔截式攻擊並建立使用者的信任感，進而促進其他商業利益。
>

<br>

>### # HTTPS setup
> 以下是我在使用 ```HTTPS``` 的步驟：
>
> 1. Sign up：[cloudflare](https://www.cloudflare.com/ "Title")。
> 2. Add your website： 可以是github pages: ```yourname.github.io```，或是 custom domain name (例如此網站:```lichin.me```)，並檢查自動產生的 record 有沒有與 Registrar’s website 上相等。
> <br><br><img src="/img/cloudflare1.png"/><br><br>
> 3. 到 Registrar’s website 並修改 Domain Name Servers(DNS)，Cloudflare上有提供需要修改的資料。
> 4. 到 CloudFlare Domain Dashboard 上並修改 SSL Setting 到 “Flexible SSL”。
> <br><br><img src="/img/cloudflare3.png"/><br><br>
> 5. 到 Page Rules 上新增一條 rule，Redirect 使用者回 HTTPS。打上原本連結 http://yourwebsite.com ，並在下方 setting 選擇 Always Use HTTPS 這個項目，存好設定後並開啟即可。
> <br><br><img src="/img/cloudflare2.png"/><br><br>
>
> 實際操作不用十分鐘，看完之後如果也想幫自己的website 升成 HTTPS，不妨可以試試看，讓自己的網頁更加安全吧！

<br>


>### # 參考
>1.    [HTTP vs. HTTPS for SEO](https://ahrefs.com/blog/http-vs-https-for-seo/ "Title")
>2.    [Set Up SSL on Github Pages With Custom Domains for Free](https://sheharyar.me/blog/free-ssl-for-github-pages-with-custom-domains/ "Title")
