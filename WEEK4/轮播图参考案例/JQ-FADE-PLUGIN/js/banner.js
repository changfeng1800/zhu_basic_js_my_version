////轮播图参考案例
    //JQ-FADE-PLUGIN 用JQ来写fade轮播图
    //jquery-banner.min.js 和 banner.js是一样的，是压缩之后的代码

    ////CSS3魔方 没学过


~function ($) {
    function pluginBanner(options) {
        var $container = this,
            $wrapper = $container.children('.wrapper'), ////找到所有的后代元素
            $focusBox = $container.children('.focusBox'),
            $arrowLeft = $container.children('.arrowLeft'),
            $arrowRight = $container.children('.arrowRight');
        var $slideList = null,
            $imgList = null,
            $focusList = null,
            bannerData = null;

        //=>INIT PARAMETERS
        var _default = {    ////设置init parameters,如果不传参赛，就以这里为默认值
            initIndex: 0,
            autoInterval: 2000,
            showFocus: true,
            needFocus: true,
            eventFocus: 'mouseenter',
            showArrow: true,
            eventArrow: 'click',
            needAuto: true,
            url: null
        };

        options && $.each(options, function (key, value) {  ////如果有传新值就update对应的数据
            if (options.hasOwnProperty(key)) {
                _default[key] = value;  ///update对应的数据
            }
        });
        var initIndex = _default.initIndex,
            autoInterval = _default.autoInterval,
            showFocus = _default.showFocus,
            needFocus = _default.needFocus,
            eventFocus = _default.eventFocus,
            showArrow = _default.showArrow,
            eventArrow = _default.eventArrow,
            needAuto = _default.needAuto;

        //=>GET DATA & BIND DATA
        ~function () {
            $.ajax({    ////有了ajax就不用http 四步曲了
                url: _default.url,
                method: 'get',
                dataType: 'json',
                async: false,
                success: function (result) {
                    bannerData = result;
                }
            });

            var str = ``,
                strFocus = ``;
            $.each(bannerData, function (index, item) {
                str += `<li class="slide">
                <img src="" data-img="${item.img}" alt="">
            </li>`;

                if (showFocus) {
                    strFocus += `<li class="${index === bannerData.length - 1 ? 'last' : ''}"></li>`;
                }
            });
            $wrapper.html(str); ////相当于 innerHTML
            showFocus ? $focusBox.html(strFocus) : null;

            //->GET ELEMENT
            $slideList = $wrapper.children();
            $imgList = $wrapper.find('img');    ////搜索所有的后代元素
            showFocus ? $focusList = $focusBox.children() : null;
        }();

        //=>INIT SHOW
        ~function () {
            $slideList.css({
                opacity: 0,
                zIndex: 0
            }).eq(initIndex).css({
                opacity: 1,
                zIndex: 1
            });

            if (showFocus) {
                $focusList.removeClass('select')    ////jQuery很多方法自带each,会遍历其中每一个
                    .eq(initIndex).addClass('select');
            }
        }();

        //=>LAZY IMG    ////???
        $(window).on('load', function () {  //////页面属性、图片、内容完全加载完，执行
            $imgList.each(function (index, item) {
                var tempImg = new Image;
                tempImg.onload = function () {
                    item.src = this.src;
                    item.style.display = 'block';
                    tempImg = null;
                };
                tempImg.src = $(item).data('img');//<=>item.getAttribute('data-img')
            });
        });

        //=>CHANGE BANNER
        var autoTimer = null,
            count = bannerData.length;

        needAuto ? autoTimer = setInterval(autoMove, autoInterval) : null;
        function autoMove() {
            initIndex++;
            initIndex === count ? initIndex = 0 : null;
            change();
        }

        //=>OTHER CHANGE
        $container.on('mouseenter', function () {
            needAuto ? clearInterval(autoTimer) : null;

            if (showArrow) {
                $arrowLeft.css('display', 'block');
                $arrowRight.css('display', 'block');
            }
        }).on('mouseleave', function () {
            needAuto ? autoTimer = setInterval(autoMove, autoInterval) : null;

            if (showArrow) {
                $arrowLeft.css('display', 'none');
                $arrowRight.css('display', 'none');
            }
        });

        if (showArrow) {
            $arrowRight.on(eventArrow, autoMove);
            $arrowLeft.on(eventArrow, function () {
                initIndex--;
                initIndex === -1 ? initIndex = count - 1 : null;
                change();
            });
        }

        if (showFocus && needFocus) {
            $focusList.on(eventFocus, function () {
                initIndex = $(this).index();    ////其相对于同胞元素的 index 位置
                change();
            });
        }

        //=>CHANGE  ////ok
        function change() {
            var $curSlide = $slideList.eq(initIndex);   ////找到index= initIndex的那个元素
            $curSlide.css('zIndex', 1)
                .siblings().css('zIndex', 0);   ////当前元素的所有siblings元素，不包括自己,全部设置css('zIndex', 0)
            $curSlide.stop().animate({opacity: 1}, 1000, function () {
                $curSlide.siblings().css('opacity', 0); ////当前元素的所有siblings元素，不包括自己,全部设置css('opacity', 0)
            });

            //->focus
            if (showFocus) {
                $focusList.eq(initIndex).addClass('select')
                    .siblings().removeClass('select');
            }
        }
    }

    $.fn.extend({
        pluginBanner: pluginBanner
    });
}(jQuery);  ////传jQuery进去，里面就可以用jQuery的方法