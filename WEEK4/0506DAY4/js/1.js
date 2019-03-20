////1  2  
//// banner.js : 功能已经全了，注意 xhr.status === 200 获取不到数据，我这里要写成xhr.status === 0
//// banner-plugin.js :想要看到效果，必须把banner.html最下的那个script执行
//// banner-委托.js 看不懂，不知为何物






animate(box, {
    top: 300,
    left: 500,
    opacity: 0.2
}, 500, function () {
    utils.css(box, {
        borderRadius: '50%',
        background: 'lightblue'
    });
});