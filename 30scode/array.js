// 
//Array.from(arrayLike[, mapFn[, thisArg]])从一个类似数组或可迭代对象中创建一个新的数组实例。
//obj.apply() call() bind() 使一个对象使用本身没有，但是其他对象拥有的方法
//Math.max() 找出一组“能够转换为数字”的数据的最大值

//获取数组中的最大值

const arrMax = arr => Math.max(...arr)

function _toConsumableArray(arr) { 
    if (Array.isArray(arr)) { 
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) 
            { 
                arr2[i] = arr[i]; 
            } 
        return arr2; 
    } else { 
        return Array.from(arr); 
    } 
}  

var arrayMax = function arrayMax(arr) {
  return Math.max.apply(Math, _toConsumableArray(arr));
};
// console.log(Math.max('1','52','45','4'));
// console.log(Array.from('11'));
// console.log(Number(222))
// console.log(Math.min(...[1,10,8,'22',false]))

//拼接两个数组
function ctArray(){
    var arr1 = [1,5,7];
    var arr2 = ['9','10'];
    var arr1= arr1.concat(arr2)

    console.log(arr1)
}
ctArray()

