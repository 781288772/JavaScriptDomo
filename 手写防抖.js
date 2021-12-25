// 防抖的定义
// 在时间被触发N秒后再执行回调函数，如果再N秒内又被触发，则重新计时。
// 指的是触发时间后再规定时间内回调函数只能执行一次，如果再规定时间内又触发了该事件，则会重新开始计算规定时间
// 简单总结:延时执行最后一次触发

function debounce(fn,wait){
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this,args)
        },wait)
    }
}

function fn(){
    console.log('1');
}
let myFn = debounce(fn,1000)