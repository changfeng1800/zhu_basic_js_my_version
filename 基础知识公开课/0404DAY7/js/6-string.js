//万能方法封装，用正则

~function (pro) {
    pro.queryURLParameter = function () {	//pro上扩展一个方法，一般都叫这个名queryURLParameter
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;		//
        this.replace(reg, function () {
            var key = arguments[1],
                value = arguments[2] || null;
            obj[key] = value;
        });
        return obj;
    }
}(String.prototype);

var str = 'http://www.zhufengpeixun.cn/stu/?lx=1&name=&sex=#teacher';
console.log(str.queryURLParameter());
