(function () {
    var deviceWidth;
    var html = document.getElementsByTagName('html')[0];

    function setHtmlFontSizePc() {
        deviceWidth = document.documentElement.clientWidth >= 1200 ? 1200 : document.documentElement.clientWidth;
        html.style.cssText = 'font-size:' + deviceWidth / 12 + 'px !important';
    }
    function setHtmlFontSizeMb() {
        deviceWidth = document.documentElement.clientWidth <= 768 ? document.documentElement.clientWidth : 768;
        html.style.cssText = 'font-size:' + deviceWidth / 7.68 + 'px !important';
    }
    setHtmlFontSizePc();
    setHtmlFontSizeMb();

    window.addEventListener('resize', function () {
        if (document.documentElement.clientWidth > 768) {
            setHtmlFontSizePc();
        } else {
            setHtmlFontSizeMb();
        }
    })
})()