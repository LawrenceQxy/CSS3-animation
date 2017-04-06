function grid (obj,i) {
	obj.style.transition = '2s';
	if(i<25){
		obj.style.transform= 'translate3D('+(i%5*150+window.innerWidth/3)+'px,'+(Math.floor(i/5)*160+120)+'px,'+(-500)+'px) scale(0.3)';
	}
	
	if(i>24 && i<50){
		obj.style.transform= 'translate3D('+((i-25)%5*150+window.innerWidth/3)+'px,'+(Math.floor((i-25)/5)*160+120)+'px,'+(-250)+'px) scale(0.3)';
	}
	
	if(i>49&&i<75){
		obj.style.transform= 'translate3D('+((i-50)%5*150+window.innerWidth/3)+'px,'+(Math.floor((i-50)/5)*160+120)+'px,'+(0)+'px) scale(0.3)';
	}
	if(i>74&&i<100){
		obj.style.transform= 'translate3D('+((i-75)%5*150+window.innerWidth/3)+'px,'+(Math.floor((i-75)/5)*160+120)+'px,'+(250)+'px) scale(0.3)';
	}
	if(i>99&&i<118){
		obj.style.transform= 'translate3D('+((i-100)%5*150+window.innerWidth/3)+'px,'+(Math.floor((i-100)/5)*160+120)+'px,'+(500)+'px) scale(0.3)';
	}
}