/*
 * 有效数字
 *   1.正数 负数 零
 *   2.小数 整数
 *   -12.4
 *   -12
 *   12
 *   12.4
 *   0
 *   +2
 *   -2
 *   +0
 *   -0
 *   0.5
 *   =====下面两种不行
 *   02.4
 *   2.
 *   .5
 *
 *  分析规则：
 *    1.可以出现+/-号：可以没有，也可以有一个
 *    2.整数 0 12 9 : 一位或者多位数字，一位0~9，多位数字不能以0开头
 *    3.小数部分：可能有可能没有，有小数点后面至少要跟一位数字
 */
// let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;

/*
 * 电话(手机)号码
 *   1. 11位数字
 *   2. 以1开头
 */
// let reg = /^1\d{10}$/;

/*
 * 中文姓名
 *   1. 中文汉字  [\u4E00-\u9FA5]
 *   2. 尼古拉斯·赵四
 */
// let reg = /^[\u4E00-\u9FA5]{2,}(·[\u4E00-\u9FA5]{2,})?$/;

/*
 * 邮箱
 *   xxxx@xxx.xx.xx
 *
 *  第一部分：数字、字母、下划线、-、.，但是-和.不能作为开头，不能连续出现-或者.
 *
 *  第二部分：xxx.xx.xx  xxx.xx  xxx.xx.xx.xx  xxx-xxx-xx.xx.xx
 *
 */
//=>/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/

// let reg = /^\w+([-.]\w+)*@[A-Za-z0-9]+([-.][A-Za-z0-9]+)*(\.[A-Za-z0-9]+)$/;









