## wooyun-node
这是wooyun.org镜像的go-server-js版本，修改自 
https://github.com/acgpiano/wooyun-node

支持标题，作者，类型，厂商检索。
![](http://oevuw60db.bkt.clouddn.com/wooo.png?imageView2/2/w/640/q/90)  
方便新手小白使用，搭建方法非常简单。  

把该项目克隆到本地  
```
git clone https://github.com/zengming00/go-server-js-wooyun.git
```  
下载wooyun的静态资源（十几个G）:  
链接: [百度网盘](https://pan.baidu.com/share/init?shareid=3613354206&uk=4113422303) 密码: mqnp  
需要解压到go-server-js-wooyun/public/bugs/   
文件夹下面(自行新建bugs文件夹)  

到下面的地址下载go-server-js

https://github.com/zengming00/go-server-js/releases

go-server-js自带了sqlite3数据库，不依赖环境，整个服务器只有一个文件，特别适合这种项目使用，因为它是捆绑一个商城发布的，里面的其它文件是不需要的，下载解压后把go-server-js.exe (在linux或mac下是go-server-js) 拿出来放到 go-server-js-wooyun/ 下面运行就可以了

默认port端口是8080，可以在config.json里面修改  
打开浏览器 http://127.0.0.1:8080 就可以使用了。


仅供自学使用
