
//1.JavaScript中除了 null和undefined，所有变量都是对象
console.log(
    false.toString(),//'false'
    [1,2,3].toString(),//'1,2,3'
)
function Fun(){}
Fun.bar = 1;
console.log(Fun,Fun.bar)

//2.一个常见的误解是数字的字面值（literal）不是对象。这是因为 JavaScript 解析器的一个错误， 它试图将点操作符解析为浮点数字面值的一部分。
console.log(
    //2.toString()//SyntaxError
    2..toString(), // 第二个点号可以正常解析
    2 .toString(), // 注意点号前面的空格
    (2).toString(), // 2先被计算
)

//3.对象的属性 for in 和 hasOwnProperty

Object.prototype.name='add';
var obj = {
    age:'20',
    sex:'male'
};
for(var item in obj){
    if (obj.hasOwnProperty(item)) {
        console.log(item);
    }
}