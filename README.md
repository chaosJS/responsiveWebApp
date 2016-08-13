1. 响应式图片polyfill：
	1. picturefill库，引入后，可以使用`<picture></picture>`和`<source></source>`标签

2. png压缩  
	1. http://tinypng.com

3. 兼容性
	1. IE9不支持`<picture></picture>`标签
	2. 在IE9上IE条件表达式出现了，在[if lte IE 8]中IE和8之间要加空格
	3. IE8不支持HTML5的标签
	4. csshack：browserhacks.com
	5. html5shiv:使用IE条件表达式引入。	
	6. respond：为老的IE提供媒体查询

4. 移动设备兼容性测试
	1. 安卓：www.genymotion.net 		或者使用虚拟机
	2. IOS：常见

5. 多设备集成调试：www.browsersync.cn  多设备同步测试工具
6. 打包发布工具：gulp
7. 注意css中!important的用法：`color:blue !important;`