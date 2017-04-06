var box = document.getElementById('box');
var container = document.getElementById('container');
var btn = document.getElementById('menu').children[4];
var n = 0;
var m = 0;
var x = 0;
var y = 0;
var z = 0;
document.onmousedown = function (ev) {
	ev.preventDefault();
	switch (ev.which){
		case 1:
		box.style.transition = '300ms';
		var oLeft = ev.clientX;
		var oTop = ev.clientY;
		if (btn.getAttribute('isclicked')) {
			n = m = 0;
			x = y = 0;
			z = 0;
			btn.setAttribute('isclicked','');
		}
		document.body.onmousemove = function (ev) {
			n = ev.clientX - oLeft;
			m = ev.clientY - oTop
			box.style.transform = 'rotateX('+m+'deg) rotateY('+n+'deg)';
			container.style.left = x +'px';
			container.style.top = y +'px';
			container.style.transform = 'translateZ('+z+'px)'
		}
		document.body.onmouseup = function () {
			document.body.onmousemove = document.onmouseup = null;
		}
			break;
		case 3:
		container.style.transition = '200ms';
		var oLeft = ev.clientX;
		var oTop = ev.clientY;
		var sLeft = container.offsetLeft;
		var sTop = container.offsetTop;
		if (btn.getAttribute('isclicked')) {
			x = y = 0;
			n = m = 0;
			z = 0;
			btn.setAttribute('isclicked','')
		}
		document.body.onmousemove = function (ev) {
			x = ev.clientX - oLeft +sLeft;
			y = ev.clientY - oTop +sTop;
			box.style.transform = 'rotateX('+m+'deg) rotateY('+n+'deg)';
			container.style.left = x +'px';
			container.style.top = y +'px';
			container.style.transform = 'translateZ('+z+'px)'
		}
		document.body.onmouseup = function () {
			document.body.onmousemove = document.onmouseup = null;
		}
			break;
	}
}
document.oncontextmenu = function (ev) {
	ev.preventDefault();
}
document.body.addEventListener('DOMMouseScroll',function(ev){
	if (btn.getAttribute('isclicked')) {
		x = y = 0;
		n = m = 0;
		z = 0;
		btn.setAttribute('isclicked','')
	}
	container.style.transition = '';
	if (ev.detail > 0) {
		z+=10;
	}else{
		z-=10;
	}
	if (z >= 700) {
		z = 700;
	}
	if (z <= -300) {
		z = -300;
	}
	box.style.transform = 'rotateX('+m+'deg) rotateY('+n+'deg)';
	container.style.left = x +'px';
	container.style.top = y +'px';
	container.style.transform = 'translateZ('+z+'px)'
})
document.body.onmousewheel = function (ev) {
	if (btn.getAttribute('isclicked')) {
		x = y = 0;
		n = m = 0;
		z = 0;
		btn.setAttribute('isclicked','')
	}
	container.style.transition = '';
	if (ev.wheelDelta < 0) {
		z+=10;
	}else{
		z-=10;
	}
	if (z >= 700) {
		z = 700;
	}
	if (z <= -300) {
		z = -300;
	}
	box.style.transform = 'rotateX('+m+'deg) rotateY('+n+'deg)';
	container.style.left = x +'px';
	container.style.top = y +'px';
	container.style.transform = 'translateZ('+z+'px)'
}
