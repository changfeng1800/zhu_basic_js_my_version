/*
 * 变量提升
 *   var foo;
 *   bar=aaafff000;
 */
var foo = 1;
function bar() {
    /*
     * 形参赋值：无
     * 变量提升
     *    var foo;  (不管条件是否成立，都要进行变量提升，新浏览器中对于判断体中的函数只是提前声明)
     */
    if (!foo) {//=>!undefined =>TRUE
        var foo = 10;
    }
    console.log(foo);//=>10
}
bar();




//study 1  2  3  4  5  6 7  8  9  10  11  12 13