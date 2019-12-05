// import css
import 'hamburgers'
import 'main';

// main
$( document ).ready( function() {
    reviewsRender();
    footerRender();
    analyticsRender();
});

function reviewsRender() {
    if ( location.pathname != '/' ) return;
    const swiper = new Swiper('.swiper-container', {
        pagination : { el: '.swiper-pagination', loop: true, clickable: true,dynamicBullets: true}
    });
}

function footerRender() {
    const html = `<div class="groups"> <div class="links"> <a href="http://ksria.com/simpread" class="logo"><span></span></a> <ul> <li><a target="_blank" href="http://service.weibo.com/share/share.php?url=http://ksria.com/simpread&title=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&pic=http://ksria.com/simpread/assets/image/introduce.png"><span class="icon weibo"></span></a></li><li><a target="_blank" href="https://www.douban.com/share/service?href=http://ksria.com/simpread&name=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95"><span class="icon douban"></span></a></li><li><a target="_blank" href="https://twitter.com/intent/tweet?via=wanglei001&amp;text=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&amp;url=http://ksria.com/simpread"><span class="icon twitter"></span></a></li><li><a target="_blank" href="https://www.facebook.com/dialog/feed?app_id=1528743474024441&link=http://ksria.com/simpread&picture=http://simpread.qiniudn.com/introduce.png&name=simpread&description=%E7%AE%80%E6%82%A6%EF%BC%88SimpRead%EF%BC%89-%20%E8%AE%A9%E4%BD%A0%E7%9E%AC%E9%97%B4%E8%BF%9B%E5%85%A5%E6%B2%89%E6%B5%B8%E5%BC%8F%E9%98%85%E8%AF%BB%E7%9A%84%20Chrome%20%E6%89%A9%E5%B1%95&redirect_uri=http://ksria.com/simpread"><span class="icon facebook"></span></a></li><li><a target="_blank" href="https://plus.google.com/share?url=http://ksria.com/simpread"><span class="icon gplus"></span></a></li><li><a target="_blank" href="https://t.me/simpread"><span class="icon telegram"></span></a></li></ul> </div><div class="links"> <h1>支持</h1> <a href="http://ksria.com/simpread/changelog.html">更新日志</a> <a href="http://ksria.com/simpread/docs/#/" target="_blank">帮助</a> <a href="http://ksria.com/simpread/docs/#/入门指南（-操作指引-）" target="_blank">新手入门</a> <a href="https://github.com/kenshin/simpread/issues" target="_blank">反馈</a> </div><div class="links"> <h1>关于</h1> <a href="http://kenshin.wang" target="_blank">关于作者</a> <a href="http://weibo.com/23784148" target="_blank">微博</a> </div><div class="links"> <h1>产品</h1> <a href="http://ksria.com/simptab" target="_blank">简 Tab - 极简的 Chrome 新标签页扩展</a> <a href="http://ksria.com/gnvm" target="_blank">GNVM - 使用 Go 语言编写的 Node.js 多版本管理器</a> <a href="http://ksria.com/emoji" target="_blank">+Emoji - 简单、可靠、纯粹的中文语义化 Emoji 扩展</a> <a href="http://ksria.com/sov2ex" target="_blank">sov2ex - 一个便捷的 v2ex 站内搜索引擎</a> </div></div><div class="copywrite"> <span>简悦 SimpRead - 如杂志般沉浸式阅读体验的扩展</span> <span>&nbsp;©&nbsp;2017 ~ 2019 <a href="http://ksria.com/simpread">ksria.com</a> by <a href="http://kenshin.wang" target="_blank">Kenshin Wang</a></span> </div>`;
    $( ".footer" ).html( html );
}

// google analytics
function analyticsRender() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-405976-9');
}
