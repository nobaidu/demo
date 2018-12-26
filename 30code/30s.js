//1.arrayMax Array.from(arrayLike[, mapFn[, thisArg]])从一个类似数组或可迭代对象中创建一个新的数组实例。
//.apply() call() bind()

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
//console.log(Math.max(...[1,87,8]))
function a(){
    console.log(arguments.length)
}
a(1,'s',2);