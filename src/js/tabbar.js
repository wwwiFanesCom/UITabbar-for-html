/**
 * 这时一个仿造tabbar 的JS扩展库
 * 引用该js之前需要引用jquery
 * Created by 317744017qq.com on 2017/6/19.
 */


(function ($) {
    $.fn.extend({
        "tabbar":function(options){
            //do something
            var opts = $.extend({},defaluts,options);
            var $this = $(this); //获取当前dom 的 jQuery对象

            var bar = '<style>.tabbar{width:100%;height:1rem;background-color:white;border-top:.01rem solid rgba(233,233,233,1);position:fixed;bottom:0;font-size:.2rem;color:'+opts.bar_color+'}.tabbar ul li{width:33.3333%;height:1rem;float:left;text-align:center}.selected div{color:'+opts.bar_seleced_color+'}.tabbar ul li a{text-decoration:none;color:rgba(51,51,51,1)}.selected a{color:rgba(38,204,233,1)}.tabbar ul li .bar{width:.38rem;height:.44rem;background-size:100%;margin:.13rem auto .03rem auto}</style>';
            var bar_ico_name = new Array();

            bar = '<style>';
            bar += '.tabbar{width:100%;height:1rem;background-color:white;border-top:.01rem solid rgba(233,233,233,1);position:fixed;bottom:0;font-size:.2rem;color:'+opts.bar_color+'}.tabbar ul li{width:33.3333%;height:1rem;float:left;text-align:center}.selected div{color:'+opts.bar_seleced_color+'}.tabbar ul li a{text-decoration:none;color:rgba(51,51,51,1)}.selected a{color:rgba(38,204,233,1)}.tabbar ul li .bar{width:.38rem;height:.44rem;background-size:100%;margin:.13rem auto .03rem auto}';


            for (i in opts.bar_title)
            {
                var index_ico  = i;
                var index_selected_ico = i;
                if(index_ico >=opts.bar_ico.length)
                {
                    index_ico =  opts.bar_ico.length - 1;
                }
                if(index_selected_ico >=opts.bar_selected_ico.length)
                {
                    index_selected_ico =  opts.bar_selected_ico.length - 1;
                }

                bar += '.tabbar ul li .ifanes_plus_tabbar'+i+'{background-image:url("'+opts.bar_ico[index_ico]+'")}  .tabbar ul .selected .ifanes_plus_tabbar'+i+'{background-image:url("'+opts.bar_selected_ico[index_selected_ico]+'")}';
            }
            bar += '</style>';



            bar += '<div style=\"height: 1rem\"></div>';
            bar += '<div class=\"tabbar\"><ul>'




            for (i in opts.bar_title)
            {
                if(opts.bar_title[i] == opts.bar_seleced_title)
                {
                    bar+= '<li class=\"selected\">';
                    bar+= '<a href=\"#\"><div class=\"bar  ifanes_plus_tabbar'+i+' \"></div><div >'+opts.bar_title[i]+'</div></a>'
                }
                else
                {
                    bar+= '<li>';
                    bar+= '<a href=\"'+opts.bar_url[i]+'\"><div class=\"bar  ifanes_plus_tabbar'+i+' \"></div><div >'+opts.bar_title[i]+'</div></a>'
                }


                bar+= '</li>';
            }


             bar+= '</ul></div>'
            $this.html(bar);

        }
    });

    var defaluts = {
        bar_title: ['首页','消息','我的'],
        bar_url: ['index.html','message.html','my.html'],
        bar_ico: ['images/tabbar01.png','images/tabbar02.png','images/tabbar03.png'],

        bar_selected_ico: ['images/tabbar-selected01.png','images/tabbar-selected02.png','images/tabbar-selected03.png'],

        bar_seleced_title:'首页',
        bar_color:'rgba(51,51,51,1)',
        bar_seleced_color:'rgba(38,204,233,1)'
    };

})(window.jQuery);