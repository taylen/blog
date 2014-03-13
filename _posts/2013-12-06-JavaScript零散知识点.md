---
layout: post
title: JavaScript零散知识点
---

{{ page.title }}
=================

<p class="meta">06 Dec 2013 - JavaScript零散知识点</p>
<p class="meta">Author: Taylen</p>

<h2>JavaScript零散知识点</h2>

<h3>1. location.replace 与 location.href</h3>
<p>
	location的replace方法和href属性都是修改URL的方法，但是replace方法是通过替换history的当前URL实现跳转的，不能通过返回按钮回到被替换的页面，<b>这个特点对于做一些过渡页面非常有用！</b>；<br/>
	而href属性是往history里push了一条记录，从而实现修改URL，是可以通过返回按钮返回的。
	
</p>

<h3>Fiddler配置抓取HTTPS后，仍然抓取不到部分HTTPS，显示为Tunnel to</h3>
<p>
	当开启Fiddler抓包HTTPS后，发现仍有部分站点的HTTPS抓取不到，网上搜索了半天终于找到了一遍文章：<a href="http://stackoverflow.com/questions/16171277/fiddler-tunnelled-http-requests-to-port-443" target="_blank">http://stackoverflow.com/questions/16171277/fiddler-tunnelled-http-requests-to-port-443</a><br/>
	<img src="{{site.baseurl}}/images/fiddler/https.png"/><br/>
	英文不太好的我，看了半天终于明白他的含义，简单描述如下：
	即使开启Fiddler Https抓包后，仍然可能获取不到Https的原因有一下几点：<br/>
	1. 是否在HTTPS选项卡中过滤了该域名；<br/>
	2. 是否windows系统已经信任了Fiddler的Root 证书；<br/>
	3. 可能你请求的服务器不信任Fiddler的安全证书，中断你的请求，导致网页打不开（我就是遇到了这种情况）<br/>
</p>
<p>
	对于服务器不信任Fiddler安全证书的情况怎么办呢？
	
</p>

<p>
	持续更新中...
</p>


