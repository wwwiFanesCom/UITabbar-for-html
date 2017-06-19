# UITabbar-for-html
仿UITabbar 的HTML 控件，JQuery 插件 ，简单好用


用法：
引用
<script src="src/js/jquery.min.js"></script>
<script src="src/js/tabbar.js"></script>
这两个JS

在你的手机页面上面增加一个DIV 
比如：
<div class="end"></div>

之后调用方法
<script>
    $(document).ready(function() {

        $(".end").tabbar({bar_seleced_title : '首页'});
    });
</script>

另外：
可选参数
bar_title: ['首页','消息','我的'],  //导航的名称
bar_url: ['index.html','message.html','my.html'], //导航跳转的url
bar_ico: ['images/tabbar01.png','images/tabbar02.png','images/tabbar03.png'], //导航的默认图片
bar_selected_ico: ['images/tabbar-selected01.png','images/tabbar-selected02.png','images/tabbar-selected03.png'], //导航选中状态的图片
bar_seleced_title:'首页', // 被选中的导航名称
bar_color:'rgba(51,51,51,1)',//导航字体的颜色
bar_seleced_color:'rgba(38,204,233,1)'//导航选中后的字体颜色

预览图：https://raw.githubusercontent.com/wwwiFanesCom/UITabbar-for-html/master/images/demo.png
