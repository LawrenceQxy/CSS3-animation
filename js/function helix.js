function helixMod () {
	var divs = document.getElementsByClassName('element');
	var arr = [];
	for (var i = 0; i < eles.length-2; i++) {
		arr.push(i)
		divs[i].style.transition = '2s';
		drawColumn(divs[i],i%40,i);
	}
	arr.sort(function (a,b) {
		return Math.random()-0.5;
	})
	//每块div在3D空间中的位置
	for (var i = 0; i < arr.length; i++) {
//		console.log(divs[i].)
		divs[arr[i]].style.transform = 'translate3D(' + (divs[i].columnX) + 'px,' + (divs[i].columnY) + 'px,' + (divs[i].columnZ) + 'px) rotateY('+ divs[i].columnPhi +'rad) scale(0.3)';
	}
}
function drawColumn(obj,j,i){
	var r = 300;
	var phi = 2*Math.PI/40;
	obj.columnX = r*Math.sin(phi*j) + 0.5*window.innerWidth;
	obj.columnY = r/4 +i*3+window.innerHeight/5;
	obj.columnZ = r*Math.cos(phi*j);
	obj.columnPhi = phi*j;
}