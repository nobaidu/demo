function time() {
    var date = new Date();
    //整年
    //console.log(date.getFullYear());    
    //一个月的第几天
    //console.log(date.getDate());        
    //一周的第几天
    //console.log(date.getDay());         
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    console.log('今天是:', week[date.getDay()]);

    var ap;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h - 12 < 0) {
        ap = "AM"
    } else {
        ap = "PM"
    }
    console.log(ap, h, m, s)
}
//time();


//4.编写一个 javascript 程序来查找三角形的区域, 其中三个边的长度为 5, 6, 7。
function area(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
}
//area(5,6,7);

//5.编写一个 javascript 程序, 通过定期从字符串末尾删除一个字母并将其附加到前面, 将字符串 "w3resource" 向右反转。
function rstr(str) {
    var count = 0;
    var endstr = '';
    setInterval(function () {
        if (count < str.length) {
            count++;
            var lice = str.substr(str.length - count, 1);
            endstr += lice;
            console.log('第' + count + '次截取字符:', lice);
            console.log('第' + count + '次拼接字符:', endstr);
        }
    }, 300)
}
//rstr('js')

//6.闰年
function isrun(year) {
    var x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    console.log(x);
}

//isrun(1000);  

//7.自加函数
var add = (function() {
    // 声明一变量,由于下面 return所以变量只会声明一次
    var count = 0; 
    return function() {
      return console.log(count++);
    };
})();
add();
add();