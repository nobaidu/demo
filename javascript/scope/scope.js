//作用域

var sex = '男';

function fn1() {
    return function () {
        console.log('sex:' + sex, 'height:' + height, 'age:' + age);

        var height = 185;
    }
    var age = 22;
}

// fn1()();

function fn2(callback) {
    var num = 10;
    callback();
}

fn2(function () {
    console.log(num); //Uncaught ReferenceError: num is not defined ?????
    /*
    num 变量
    1.当前作用域:fn2 不存在
    2.上级作用域:全局作用域 why?  
        注意: 判断函数作用域不是依据函数在哪里调用,而是依据函数在哪里编写
            -->所以作用域一般叫做--词法作用域
    */
})

// 注: 变量能否被访问和页面是否加载完(window.onload)成没有任何关系