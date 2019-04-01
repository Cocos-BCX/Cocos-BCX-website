(function (doc, win) {

    // html元素字体
    // 这里基础字体设置为10在uc, WX上没效果,  不知道为什么
    // 设置为10时, dpr=1的手机, 宽度360, 计算出来html的字体大小为5px, 可能是字体太小了
    // 尽量设置大一些, 这样避免12px字体大小的限制
    var _rootFontSize = window._rootFontSize || 100;

    // 默认不支持缩放
    var _remMetaScalable = typeof window._remMetaScalable === 'undefined'
        ? false
        : !!window._remMetaScalable;

    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

        // 只针对IOS设备
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,

        // 计算缩放比
        scale = 1 / dpr,

        // 检测支持的"缩放"事件
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    docEl.dataset.dpr = dpr;

    // 被iframe引用时，禁止缩放
    dpr = window.top === window.self ? dpr : 1;

    var metaEl = doc.createElement('meta');
    metaEl.name = 'viewport';
    var metaElContent = 'width=device-width, ';

    // 支持缩放
    if (_remMetaScalable) {
        metaElContent += 'initial-scale=' + scale;
    } else {
        metaElContent += (
            'initial-scale=' + scale
            + ',maximum-scale=' + scale
            + ', minimum-scale=' + scale
            + ', user-scalable=no');
    }
    metaEl.content = metaElContent;
    docEl.firstElementChild.appendChild(metaEl);

    // 缩放/旋转设备检测函数
    var recalc = function () {
        var width = docEl.clientWidth;

        // 750为设计用的宽度, 比如它以iphone6标准(宽750)
        // 此时, 按照设计稿的尺寸写就可以了
        // 如: 设计稿为100px, 那么就写4rem(100 / 25), 25是自己设置的
        // 也可以设置成100, 这样就写100px就写1rem
        docEl.style.fontSize = _rootFontSize * (width / 750) + 'px';
    };
    recalc();

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
