//运动函数（运动对象，运动时间，运动属性函数，回调函数）
function montion(obj,doFn,callBack){
	obj.style.transition = '2s';
	doFn.call(obj);//doFn为设置元素运动的最终位置，call(obj)为将doFn内的this替换为obj
	obj.called = false;//transitionend为CSS过渡完成后触发，解决transitionend调用多次的bug
	obj.addEventListener('transitionend',function(){
		if(!obj.called){
//			obj.style.transition = '';
			callBack && callBack.call(obj);
			obj.called = true;
		}
	},false);
}