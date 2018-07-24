//入口函数
$(function () {
    function responsive(){

        //bootsrap工具提示插件必须要手动初始化自己才能使用
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();//'[data-toggle="tooltip"]' 选择data-toggle属性值是tooltip的属性来调用这个方法
        });

        $(window).on('resize', function () {
    
            //根据浏览器大小来判断显示隐藏对应的轮播图 现获取浏览器快读
            var windowWidtd = $(window).width();
    
            //获取 所有放轮播图的容器
            var items = $('.carousel-inner .item');
    
            //判断 大于768 就是非移动端 就显示大轮播图 否则显示小轮播图
            if (windowWidtd >= 768) {
                //遍历出所有轮播图容器然后把轮播图图片添加到容器中生成轮播图
                items.each(function (index, ele) {
                    $(ele).html('<div class="pc-img" style="background-image: url(./images/banner' + (index + 1) + '.jpg)"></div>');
                });
            } else {
                items.each(function (index, ele) {
                    $(ele).html('<img class="mobile-img" src="images/slide_0' + (index + 1) + '_640x340.jpg" alt="">');
                })
            }
        }).trigger('resize'); // trigger() 方法是注册完事件后马上触发一下 参数：要触发的事件名称
    }
    //加载js文件之后先调用一次函数生成轮播图
    responsive();
})