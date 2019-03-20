//// mouse_follow.html
//// event-delegate.html  用css的hover功能实现子元素的显示隐藏
//// navigation.html 用事件委托的方法做导航，用jQuery


/*
 * 事件委托（事件代理）
 *   利用事件的冒泡传播机制，如果一个容器的后代元素中，很多元素的点击行为（其它事件行为也是）都要做一些处理，此时我们不需要在像以前一样一个个获取一个个的绑定了，我们只需要给容器的CLICK绑定方法即可，这样不管点击的是哪一个后代元素，都会根据冒泡传播的传递机制，把容器的CLICK行为触发，把对应的方法执行，根据事件源，我们可以知道点击的是谁，从而做不同的事情即可
 */
