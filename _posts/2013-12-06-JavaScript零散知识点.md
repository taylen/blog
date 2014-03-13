---
layout: post
title: JavaScript零散知识点
---

{{ page.title }}
=================

<p class="meta">06 Dec 2013 - JavaScript零散知识点</p>
<p class="meta">Author: Taylen</p>


<h3>1. location.replace 与 location.href</h3>
<p>
	location的replace方法和href属性都是修改URL的方法，但是replace方法是通过替换history的当前URL实现跳转的，不能通过返回按钮回到被替换的页面，<b>这个特点对于做一些过渡页面非常有用！</b>；<br/>
	而href属性是往history里push了一条记录，从而实现修改URL，是可以通过返回按钮返回的。

</p>

<h3>Fiddler配置抓取HTTPS后，仍然抓取不到部分HTTPS，显示为Tunnel to</h3>
<p>
	当开启Fiddler抓包HTTPS后，发现仍有部分站点的HTTPS抓取不到，网上搜索了半天终于找到了一遍文章：<br/>
	<a href="http://stackoverflow.com/questions/16171277/fiddler-tunnelled-http-requests-to-port-443" target="_blank">http://stackoverflow.com/questions/16171277/fiddler-tunnelled-http-requests-to-port-443</a><br/>
	<img src="{{site.baseurl}}/images/fiddler/https.png"/>
</p>
<p class="pre">
	英文不太好的我，看了半天终于明白他的含义，简单翻译下。即使开启Fiddler Https抓包后，仍然可能获取不到Https的原因有一下几点：
	1. 是否在HTTPS选项卡中过滤了该域名；
	2. 是否windows系统已经信任了Fiddler的Root 证书；
	3. 可能是Fiddler不信任你发送请求的客户端的安全证书，所以中断你的请求，导致网页打不开（我就是遇到了这种情况）

	对于Fiddler不信任客户端的安全证书的情况怎么办呢？相信很多https请求，Fiddler都不信任他们的安全证书，简单的说装一个就行了。
	网上爬虫了很久很久，终于找到了这篇文章：
	http://blogs.telerik.com/automated-testing-tools/posts/12-12-21/using-fiddler-with-apple-ios-devices
	<img src="{{site.baseurl}}/images/fiddler/solver.png" />
	安装后一切搞定，可以抓到手机上任何的HTTPS请求，但是HTTPS一般都是涉及支付或者安全操作使用的协议，你不想别人把你的安全信息偷取吧，所以不要用别人的Fiddler，或者公共的免费Wifi，小心信息被盗！
</p>

<p>
	持续更新中...
</p>


