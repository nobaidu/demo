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
}
time();