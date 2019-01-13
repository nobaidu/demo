// 函数式
// function $(id){
//     return document.getElementById(id);
// }

// //对象式
// var getEle = {
//     getClass:function(claName){
//         return document.getElementsByClassName(claName)[0];
//     }
// }

//1.为什么这么写
var LIB = function(_this){
    return new GetElement(_this);
}
function GetElement(_this){
    //2.为什么弄个数组
    this.elements = [];

    if(_this != undefined){
        this.elements[0] = _this;
    }

    this.getId = function(id){
        this.elements.push(document.getElementById(id));
        return this;
    }

    this.getClass = function(cls){
        var clss = document.getElementsByClassName(cls);
        for(var i = 0;i<clss.length;i++){
            this.elements.push(clss[i])          
        }
        return this;
    }
        
}
GetElement.prototype.css = function(attr,value){
    //为什么 i<this.elemnets
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length == 1){
            //www
            if(typeof window.getComputedStyle != 'undefined'){
                return window.getComputedStyle(this.elements[i],null)[attr];                
            }
            //ie
            else if(typeof this.elements[i].currentStyle != 'undefined'){
                return this.elements[i].currentStyle[attr];
            }
        }else{
            this.elements[i].style[attr] = value;
        }
    }
    return this;
}
//如果没传入参数
GetElement.prototype.text = function(str){
    for(var i = 0;i<this.elements.length;i++){
        if(arguments.length==0){
            //返回后有什么问题
            return this.elements[i].textContent;
        }else{
            this.elements[i].textContent = str;
        }
    }
    return this;
}
GetElement.prototype.click = function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick = fn;
    }
    return this;
}