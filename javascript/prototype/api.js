/**原型
 * _proto_
 * prototype
 * constructor
 * instanceof
 * 
 * setPrototypeOf
 * isPrototypeOf
*/   
function Human(){

}
Human.prototype = {
    run: function(){
        console.log('run')
    }
}

function Chinese(){

}
// 操作原型
Chinese.prototype = Object.setPrototypeOf({
    constructor: Chinese,
    say: function(name){
        console.log(name);
    }
}, Human.prototype);

var person = new Chinese();
person.say('小明');


var ming = {
    name: 'ming'
};
Object.defineProperty(ming, 'age', {
    value: 22,
    enumerable: false,
    configurable: true,
    writable: true
});