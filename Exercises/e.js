function time(){
    var date = new Date();
    //整年
    //console.log(date.getFullYear());    
    //一个月的第几天
    //console.log(date.getDate());        
    //一周的第几天
    //console.log(date.getDay());         
    var week=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    console.log('今天是:',week[date.getDay()]);
    
    var ap;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if( h-12<0 ){
        ap = "AM"
    }else{
        ap = "PM"
    }
    console.log(ap,h,m,s)
}
//time();

function printCon(){
    var bodyHtml = window.document.body.innerHTML;
    var startPrint = '<!-- 打印开始 -->';
    var endPrint = '<!-- 打印结束 -->';
    var printHtml = bodyHtml.substring(bodyHtml.indexOf(startPrint),bodyHtml.indexOf(endPrint));
    var printIframe = document.getElementById('printIframe');
    printIframe.contentDocument.write(printHtml);
    printIframe.contentDocument.close();
    printIframe.contentWindow.print();

    console.log(printIframe.contentDocument);
}
document.getElementsByClassName('inputCon')[0].addEventListener('click',printCon);
document.getElementsByClassName('inputPage')[0].addEventListener('click',function(){
    window.print();
})
